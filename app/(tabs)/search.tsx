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
import ResultScreenLicence from '@/components/home/serachType/licence';
import Veiculo from '@/integration/model/Veiculo';
import { veiculoService } from '@/integration/services/veiculo/veiculoService';
import { cartaService } from '@/integration/services/carta/CartaService';
import CartaDeConducao from '@/integration/model/Carta';
import ResultScreenVechicle from '@/components/home/serachType/vechicle';

const SearchScreen: React.FC = () => {
const router = useRouter();
  const { query, category } = useLocalSearchParams<{query : string, category : string}>()
  const [ isLoading, setIsLoading ] = React.useState(false)
  const [driver, setDriver ] = useState<Motorista>()
  const [licenca, setLicenca ] = useState<CartaDeConducao>()
  const [veichile, setVichile ] = useState<Veiculo>()
  const [modalVisible, setModalVisible] = useState(false);

  const phone = async ()=> {
    setIsLoading(true)
    try {
      const response = category === 'phone' ? await motoristaService.buscarMotoristaPeloId(Number(query)) : await motoristaService.buscarMotoristaPeloTelefone(query)
      console.log('Veio da API',JSON.stringify(response))
      if(!response){
        setModalVisible(true)
        setIsLoading(false)
         return;
        }
        setDriver(response)
    } catch (error) {
      alert(error)
      router.back();
    }finally{
      setIsLoading(false)
    }
  }

  const licence = async ()=> {
    setIsLoading(true)
    try {
      const response =  await cartaService.buscarCartaPorLicenca(query)
      if(!response){
        setModalVisible(true)
        setIsLoading(false)
         return;
        }
        setLicenca(response)
    } catch (error) {
      alert(error)
      router.back();
    }finally{
      setIsLoading(false)
    }
  }

  const bi = async ()=> {
    setIsLoading(true)
    try {
      const response = await motoristaService.buscarMotoristaPeloBilhete(query)
      if(!response){
        setModalVisible(true)
        setIsLoading(false)
         return;
        }
        setDriver(response)
    } catch (error) {
      alert(error)
      router.back();
    }finally{
      setIsLoading(false)
    }
  }

  const close = ()=>{
    setModalVisible(false)
    router.back();
  }
  const plate = async ()=> {
    setIsLoading(true)
    try {
      const response = await veiculoService.buscarVeiculoPorPlaca(query)
      if(!response){
        setModalVisible(true)
         return;
        }
        setVichile(response)
    } catch (error) {
      alert(error)
      router.back();
    }finally{
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    console.log(category)
    if (category === 'phone' || category === 'byId') {
      phone();
    } else if (category === 'plate'){
      plate();
    }else if (category === 'license') {
      licence();
    }else if(category === 'bi'){
      bi();
    }
  }, [query,category]);

  return (
  <SafeAreaView style={styles.container}>
    <Header title='Resultado da Pesquisa' />
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
  
   {(category === 'phone' || category === 'byId' || category === 'bi') && driver && <ResultScreenDriver result={driver} />}
  
   {(category === 'plate') && veichile && < ResultScreenVechicle result={veichile} />}
   {(category === 'license') && licenca && <ResultScreenLicence result={licenca} />}
   
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
