import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const HomeCards : React.FC = () => {
  const router = useRouter();

  const handleLearnApp = () => {
    router.push('/(tabs)/learn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>O que você deseja fazer?</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={()=>router.push('/(tabs)/history')}>
          <FontAwesome name="list-alt" size={40} color="#4B5563" />
          <Text style={styles.cardTitle}>Últimos Resultados</Text>
          <Text style={styles.cardDescription}>
            Confira os resultados mais recentes de suas consultas.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleLearnApp}>
          <FontAwesome name="info-circle" size={40} color="#4B5563" />
          <Text style={styles.cardTitle}>Como Usar o App</Text>
          <Text style={styles.cardDescription}>
            Aprenda a navegar pelo aplicativo e aproveitar todas as funcionalidades.
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default HomeCards;
