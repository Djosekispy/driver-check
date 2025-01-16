import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
];

const SearchHistory = () => {
  const handleRepeatSearch = (details: string) => {
    console.log(`Repetindo busca para: ${details}`);
  };

  const renderHistoryItem = ({ item }: { item: Search }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyInfo}>
        <Text style={styles.historyName}>{item.name}</Text>
        <Text style={styles.historyDetails}>{item.details}</Text>
        <Text style={styles.historyDate}>{item.searchDate}</Text>
      </View>
      <TouchableOpacity
        style={styles.repeatButton}
        onPress={() => handleRepeatSearch(item.details)}
      >
        <Text style={{ color: 'white' }}>Repetir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Consultas</Text>
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
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  historyInfo: {
    flex: 1,
  },
  historyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  historyDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 12,
    color: '#9ca3af',
  },
  repeatButton: {
    padding: 10,
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchHistory;
