import Header from '@/components/home/organisms/Header';
import  SearchHistory  from '@/components/search/HistorySearch'
import React from 'react';
import { SafeAreaView,View } from 'react-native';
import { styles } from '../../styles/style'

const HistoryResults: React.FC = () => {
  return (
  <SafeAreaView style={styles.container}>
    <Header title='Hisórico de consultas' />
   <View style={{flex:1}}>
 <SearchHistory /> 
  </View>
  </SafeAreaView>)
};



export default HistoryResults;
