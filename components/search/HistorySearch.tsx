import { Records } from '@/integration/repositories/repositoryBase/IRepositoryBase';
import { repository } from '@/integration/repositories/repositoryBase/RepositoryBase';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import LoadingModal from './searchModal';
import { useRouter } from 'expo-router';



const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = React.useState<Records[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const handleRepeatSearch = (id: string) => {
   router.push({pathname:`/(tabs)/user/${id}`, params:{ id }});
  };
  const onDelete = () => {
    Alert.alert('Deletar Histórico de consultas', 'Tem certeza que deseja deletar todos os registros', [{
      text: 'Não', style: 'cancel'
    },
    {
      text: 'Sim', onPress: async () => {
        setIsLoading(true);
        await repository.deleteAll();
        getSearchHistory();
        setIsLoading(false);
      }
    }
    ], {
      cancelable: true,
      userInterfaceStyle: 'dark'
    })
  }

  const getSearchHistory = async () => {
    setIsLoading(true);
    const searchHistory = await repository.getAll();
    setSearchHistory(searchHistory);
    setIsLoading(false);
  }

  useEffect(() => {
    getSearchHistory();
  }, [])

  const renderHistoryItem = ({ item }: { item: Records }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyInfo}>
        <View style={styles.historyTopView}>
          <Text style={styles.historyName}>{item.name}</Text>
          <Text style={styles.historyDate}>{new Date(item.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
        </View>
        <View style={styles.historyTopView}>
          <Text style={styles.historyDetails}>{item.details}</Text>
          <TouchableOpacity
            style={styles.repeatButton}
            onPress={() => handleRepeatSearch(String(item.id))}
          >
            <FontAwesome name='repeat' size={18} color='#3b82f6' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LoadingModal visible={isLoading} message="Buscando informações, aguarde..." />
      <View style={styles.deleteSecction}>
        <TouchableOpacity
          onPress={onDelete}
        >
          <FontAwesome name='trash-o' size={20} color='red' />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchHistory}
        keyExtractor={({ id }) => String(id)}
        renderItem={renderHistoryItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <FontAwesome name='info-circle' size={40} color='#3b82f6' />
            <Text style={styles.emptyTitle}>Nenhum histórico encontrado.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modal : {
      backgroundColor: 'red',
      width: 300,
      height: 300
  },
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
  
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position:'relative'
  },
  historyInfo: {
    flex: 1,
  },
  historyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  historyDetails: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 12,
    color: '#9ca3af',
  },
  repeatButton: {
    padding: 5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteSecction:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 12
  },
  historyTopView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default SearchHistory;
