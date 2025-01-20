import SearchBox from '@/components/home/molecules/SearchBar';
import Header from '@/components/home/organisms/Header';
import ContactSection from '@/components/footer/ContactSection';
import React from 'react';
import { SafeAreaView, View, Text,ScrollView } from 'react-native';
import { styles } from '../../styles/style'
import HomeCards from '@/components/home/organisms/HomeCards';
import PoliceAppHighlights from '@/components/home/organisms/Safety';

const HomeScreen: React.FC = () => {
  return (
  <SafeAreaView style={styles.container}>
    <Header />
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

    <View style={styles.content}>
      <SearchBox/>
  
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Informações do Sistema</Text>
        <Text style={styles.infoText}>
          O aplicativo permite buscar motoristas e acessar informações sobre
          cartas de condução, seguros e taxas de forma eficiente.
        </Text>
      </View>
      <PoliceAppHighlights />
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
