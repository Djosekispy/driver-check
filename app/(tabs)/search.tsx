import Header from '@/components/home/organisms/Header';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { styles } from '../../styles/style'
import { motoristaService } from '@/integration/services/motorista/MotoristaService';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import ResultScreenDriver from '@/components/home/serachType/driver';
import Motorista from '@/integration/model/Motorista';
import ErrorModal from '@/components/search/ErrorModal';
import LoadingModal from '@/components/search/searchModal';

const SearchScreen: React.FC = () => {
const router = useRouter();
  const { query, category } = useLocalSearchParams<{query : string, category : string}>()
  const [ isLoading, setIsLoading ] = React.useState(false)
  const [driver, setDriver ] = useState<Motorista>()
  const [modalVisible, setModalVisible] = useState(false);
  const phone = async ()=> {
    setIsLoading(true)
    try {
      const response = await motoristaService.buscarMotoristaPeloTelefone(query)
      if(!response){
        setModalVisible(true)
         return;
        }
        setDriver(response)
    } catch (error) {
      alert(error)
    }finally{
      setIsLoading(false)
    }
  }
  const close = ()=>{
    setModalVisible(false)
    router.back();
  }

  React.useEffect(()=>{
    category === 'phone' && phone();
  },[category])

  return (
  <SafeAreaView style={styles.container}>
    <Header title='Resultado da Pesquisa' />
    <View style={styles.searchContainer}>
   <FontAwesome name='search' size={18} color="#3b82f6" />
    <Text style={styles.searchText}>{query} </Text>
        </View>
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
  
   {category === 'phone' && driver && <ResultScreenDriver result={driver} />}

   <ErrorModal
        visible={modalVisible}
        title="Erro na Busca"
        description="A informação solicitada não foi encontrada"
        onClose={close}
      />
         <LoadingModal visible={isLoading} message="Buscando informações, aguarde..." />
    
  </ScrollView>
  </SafeAreaView>)
};



export default SearchScreen;
