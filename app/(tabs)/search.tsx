import Header from '@/components/home/organisms/Header';
import ResultScreen  from '@/components/search/Result'
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { styles } from '../../styles/style'

const SearchScreen: React.FC = () => {

  return (
  <SafeAreaView style={styles.container}>
    <Header title='Resultado da Pesquisa' />
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
   <ResultScreen  /> 
  </ScrollView>
  </SafeAreaView>)
};



export default SearchScreen;
