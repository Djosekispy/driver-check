import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useRouter } from 'expo-router';



export default function  SearchBox () {
  const router = useRouter();
  const [ query, setQuery ] = React.useState<string>('');
  const searching = ()=>{ 
    if(query.length>0){
      router.push('/(tabs)/search');
      }
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Buscar Informações</Text>
  <Text style={styles.description}>Digite o número da carta, telefone ou outro dado abaixo:</Text>
    <Input placeholder="Digite aqui..." style={styles.input} query={setQuery}/>
    <Button title="Buscar" onPress={searching} style={styles.button} />
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    flexShrink: 0,
  },
});

