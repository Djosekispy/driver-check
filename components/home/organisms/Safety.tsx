import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Ícones de autoridade e policiamento

const PoliceAppHighlights: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segurança e Policiamento</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <FontAwesome5 name="shield-alt" size={40} color="#0f172a" style={styles.icon} />
          <Text style={styles.cardTitle}>Proteção 24/7</Text>
          <Text style={styles.cardText}>
            Garantimos segurança contínua nas estradas com monitoramento ativo.
          </Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="traffic-light" size={40} color="#0f172a" style={styles.icon} />
          <Text style={styles.cardTitle}>Monitoramento de Trânsito</Text>
          <Text style={styles.cardText}>
            Controle rigoroso nas principais rodovias para evitar acidentes.
          </Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="police-car" size={40} color="#0f172a" style={styles.icon} />
          <Text style={styles.cardTitle}>Patrulhamento Eficiente</Text>
          <Text style={styles.cardText}>
            Viaturas estrategicamente posicionadas para resposta rápida.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: '#e5e7eb', 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563', // Cinza escuro para legibilidade
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default PoliceAppHighlights;
