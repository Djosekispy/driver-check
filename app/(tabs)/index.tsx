import ContactRow from '@/components/home/atoms/ContactRow';
import SearchBox from '@/components/home/molecules/SearchBar';
import Header from '@/components/home/organisms/Header';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const HomeScreen: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <View style={styles.content}>
      <SearchBox />
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Informações do Sistema</Text>
        <Text style={styles.infoText}>
          O aplicativo permite buscar motoristas e acessar informações sobre
          cartas de condução, seguros e taxas de forma eficiente.
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Contato</Text>
        <ContactRow iconName="phone" text="+244 123 456 789" />
        <ContactRow iconName="envelope" text="contato@apppolicial.com" />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 16,
  },
  infoBox: {
    padding: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  infoText: {
    color: '#6b7280',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
});

export default HomeScreen;
