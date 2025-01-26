import Header from '@/components/home/organisms/Header';
import Multa from '@/integration/model/Multa';
import { multaService } from '@/integration/services/multa/MultaService';
import { styles } from '@/styles/style';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';



const MultasList: React.FC = () => {
  const { motoristaId  } = useLocalSearchParams<{ motoristaId : string}>()
  const [multas, setMultas] = useState<Multas[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null); 
  const router = useRouter();
  const fecthMulta = async()=>{
    try {
      const response = await multaService.obterMultaDeMotorista(Number(motoristaId))
      if(!response){
        setModalVisible(true)
        setIsLoading(false)
         return;
        }
        setMultas(response)
    } catch (error) { 
      alert(error)
      router.back();
  }
}
  useEffect(() => {
    fecthMulta();
  }, [motoristaId]);

  const handleCollapseToggle = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id)); 
  };

  const renderItem = ({ item }: { item: Multa }) => {
    const isExpanded = expandedId === item.id;
    const truncatedTitle = item.titulo.length > 12 ? item.titulo.substring(0, 20) + '...' : item.titulo;
    const description = isExpanded ? item.descricao : item.descricao.substring(0, 50) + '...';

    return (
  
      <View style={style.itemContainer}>
        <TouchableOpacity onPress={() => handleCollapseToggle(item.id)} style={style.itemHeader}>
          <Text style={style.title}>{item.titulo}</Text>
          {item.estado === 'Corrente' ? (
            <FontAwesome name="exclamation-triangle" size={20} color="orange" />
          ) : (
            <FontAwesome name="check-circle" size={20} color="green" />
          )}
        </TouchableOpacity>

        {isExpanded && <Text style={style.description}>{description}</Text>}
      </View>
     
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <Header title='Multas do Motorista' />
    <FlatList
      data={multas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={style.list}
    />
    <TouchableOpacity onPress={() => router.replace({pathname: '/(tabs)/search' , params: {query : motoristaId, category : 'byId'}})} style={style.backButton}>
    <FontAwesome name='arrow-left' size={20} color='#fff'/>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  
  list: {
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6b7280',
    borderRadius: 100,
    padding: 15,
    elevation: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#808080', 
    width: '75%',
  },
  estado: {
    fontSize: 16,
    color: '#FFA500', 
    textAlign: 'right',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
});

export default MultasList;
