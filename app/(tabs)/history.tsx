import Header from '@/components/home/organisms/Header';
import  SearchHistory  from '@/components/search/HistorySearch'
import React from 'react';
import { SafeAreaView,ScrollView } from 'react-native';
import { styles } from '../../styles/style'
import { useRouter } from 'expo-router';

const HistoryResults: React.FC = () => {
  return (
  <SafeAreaView style={styles.container}>
    <Header />
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
 <SearchHistory /> 
  </ScrollView>
  </SafeAreaView>)
};



export default HistoryResults;
