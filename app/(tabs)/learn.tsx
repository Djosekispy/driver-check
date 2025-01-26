import React, { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Header from '@/components/home/organisms/Header';
import { styles } from '@/styles/style';

const InstructionsModal = () => {
  return (
      <SafeAreaView style={styles.container}>
 <Header title='Como usar este App' />
          
          <ScrollView contentContainerStyle={modalStyles.content} showsVerticalScrollIndicator={false}>
            <Text style={modalStyles.stepTitle}>1. Pesquisa por categoria:</Text>
            <Text style={modalStyles.stepDescription}>
              No formulário, escolha a categoria de pesquisa desejada. Após selecionar a categoria, o valor correspondente será mostrado. Isso permite que você obtenha os resultados específicos para sua consulta.
            </Text>

            <Text style={modalStyles.stepTitle}>2. Ver multas correntes:</Text>
            <Text style={modalStyles.stepDescription}>
              Após realizar a pesquisa, caso existam multas em aberto, você poderá clicar no ícone de aviso (⚠️) para ver as multas correntes do condutor.
            </Text>

            <Text style={modalStyles.stepTitle}>3. Histórico de busca:</Text>
            <Text style={modalStyles.stepDescription}>
              Caso tenha clicado sem querer no botão de sair, não se preocupe! Você pode acessar o histórico de buscas e refazer a busca desejada.
            </Text>

            <Text style={modalStyles.stepTitle}>4. Exportar código QR:</Text>
            <Text style={modalStyles.stepDescription}>
              Você pode exportar o código QR do motorista e enviá-lo por e-mail ou WhatsApp, facilitando o compartilhamento das informações.
            </Text>

            <Text style={modalStyles.stepTitle}>5. Registrar multa:</Text>
            <Text style={modalStyles.stepDescription}>
              Caso o motorista possua documentação fora de prazo, você pode registrar a multa diretamente no app. 
            </Text>

            <Text style={modalStyles.stepTitle}>6. Busca rápida com QRCode:</Text>
            <Text style={modalStyles.stepDescription}>
              Para uma busca mais rápida, utilize o leitor de QRCode. Basta clicar no ícone de QRCode e escanear o código do motorista.
            </Text>
          </ScrollView>
      </SafeAreaView>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    zIndex: 2,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
  },
  stepDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    lineHeight: 22,
  },
});

export default InstructionsModal;
