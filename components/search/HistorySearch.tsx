import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';

type Search = {
  name: string;
  id: string;
  searchDate: string;
  details: string;
};

const searchHistory: Search[] = [
  { id: '1', name: 'João Silva', searchDate: '2025-01-01', details: 'Carta Nº 123456' },
  { id: '2', name: 'Ana Sousa', searchDate: '2024-12-30', details: 'Telefone: +244 987654321' },
  { id: '3', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '4', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '5', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '6', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '7', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '8', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '9', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '10', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '11', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
  { id: '12', name: 'Carlos Mendes', searchDate: '2024-12-28', details: 'BI: 001234567' },
];

const SearchHistory = () => {
  const handleRepeatSearch = (details: string) => {
    console.log(`Repetindo busca para: ${details}`);
  };
 const onDelete = ()=>{
  Alert.alert('Deletar Histórico de consultas','Tem certeza que deseja deletar todos os registros',[{
    text: 'Não', style : 'cancel'
  },
  {
    text: 'Sim', onPress : ()=>alert('Informações apagadas com sucesso')
  }
],{
  cancelable : true,
  userInterfaceStyle: 'dark'
})
 }
  const renderHistoryItem = ({ item }: { item: Search }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyInfo}>
        <View style={styles.historyTopView}>
        <Text style={styles.historyName}>{item.name}</Text>
        <Text style={styles.historyDate}>{item.searchDate}</Text>
        </View>
        <View style={styles.historyTopView}>
        <Text style={styles.historyDetails}>{item.details}</Text>
        <TouchableOpacity
        style={styles.repeatButton}
        onPress={() => handleRepeatSearch(item.details)}
      >
          <FontAwesome name='repeat' size={18} color='#3b82f6' />
      </TouchableOpacity>
        </View>

      </View>
    

    
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.deleteSecction}>
      <TouchableOpacity
      onPress={onDelete}
      >
          <FontAwesome name='trash-o' size={20} color='red' />
      </TouchableOpacity>
      </View>
      <FlatList
        data={searchHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderHistoryItem}
        showsVerticalScrollIndicator={false}
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
    padding:16,
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
