import ContactRow from '@/components/home/atoms/ContactRow';
import SearchBox from '@/components/home/molecules/SearchBar';
import Header from '@/components/home/organisms/Header';
import FilterButton from '@/components/home/organisms/ButtonFilter';
import ResultScreen  from '@/components/search/Result'
import ContactSection from '@/components/footer/ContactSection';
import  SearchHistory  from '@/components/search/HistorySearch'
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text,ScrollView } from 'react-native';

import { styles } from '../../styles/style'



import HomeCards from '@/components/home/organisms/HomeCards';
import { useRouter } from 'expo-router';

const HomeScreen: React.FC = () => {
    const router = useRouter();
  return (
  <SafeAreaView style={styles.container}>
    <Header />
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

    <View style={styles.content}>
      <SearchBox/>
  
      <FilterButton />
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Informações do Sistema</Text>
        <Text style={styles.infoText}>
          O aplicativo permite buscar motoristas e acessar informações sobre
          cartas de condução, seguros e taxas de forma eficiente.
        </Text>
      </View>
      
      <HomeCards />
     <ContactSection />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} Driver Check. Todos os direitos
          reservados.
        </Text>
      </View>
    </View>
  
  </ScrollView>
  </SafeAreaView>
  )
};



export default HomeScreen;
