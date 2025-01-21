import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Modal, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Motorista from '@/integration/model/Motorista';
import QRCodeExport from '../molecules/QrCode';
import { url } from '@/config/api';
import Veiculo from '@/integration/model/Veiculo';

interface ResultProps {
  result: Veiculo;
}

const ResultScreenLicence: React.FC<ResultProps> = ({ result }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [ modalVisible , setModalVisible ] = useState(false)
  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const openDocument = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
    
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{result?.motorista[0].nome}</Text>
          <Text style={styles.info}>
            <FontAwesome name="phone" size={14} color="#6b7280" /> {result?.motorista[0].telefone}
          </Text>
          <Text style={styles.info}>
            <MaterialIcons name="location-on" size={14} color="#6b7280" /> {result?.motorista[0].endereco}
          </Text>
        </View>
     
        {result?.motorista[0].imagem ? (
          <Image source={{ uri: `${url}/${result?.motorista[0].imagem}` }} style={{ width: 48, height: 48 }} />
        ) : (
          <FontAwesome name="user" size={48} color="#6b7280" />
        )}
      </View>

      {/* BI Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <FontAwesome name="id-card" size={16} color="#111827" /> Documento de Identidade
        </Text>
        <Text style={styles.sectionInfo}>Número BI: {result?.motorista[0].numero_bi_ou_passport}</Text>
        <Text style={styles.sectionInfo}>
          Expiração: {new Date(result?.motorista[0].data_expiracao_de_documento || '').toLocaleDateString()}
        </Text>
        <Text style={styles.sectionInfo}>Nacionalidade: {result?.motorista[0].nacionalidade}</Text>
        <Text style={styles.sectionInfo}>Gênero: {result?.motorista[0].genero}</Text>
        <Text style={styles.sectionInfo}>Data de Nascimento: {new Date(result?.motorista[0].data_nascimento).toLocaleDateString()}</Text>
        <Text style={styles.sectionInfo}>Número de BI/Passport: {result?.motorista[0].numero_bi_ou_passport}</Text>
        <TouchableOpacity style={styles.button} onPress={() => openDocument(result?.motorista[0].url_do_BI || '')}>
          <Text style={styles.buttonText}>Ver Documento</Text>
        </TouchableOpacity>
      </View>

      {/* Cartas de Condução */}
      {result?.motorista[0].cartaDeConducao?.length > 0 && (
        <View style={styles.section}>
         
          {result.motorista[0].cartaDeConducao.map((carta) => (
            <View key={carta.id} style={styles.listItem}>
              <TouchableOpacity
                style={styles.listHeader}
                onPress={() => toggleExpand(`carta-${carta.id}`)}
              >
               <Text style={styles.sectionTitle}>
            <FontAwesome name="car" size={16} color="#111827" /> Cartas de Condução
          </Text>
                <FontAwesome
                  name={expanded === `carta-${carta.id}` ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color="#6b7280"
                />
              </TouchableOpacity>
              {expanded === `carta-${carta.id}` && (
                <View style={styles.collapseContent}>
                  <Text style={styles.collapseText}>
                    Local de Emissão: {carta.local_de_emissao}
                  </Text>
                  <Text style={styles.collapseText}>
                    Validade: {new Date(carta.validade).toLocaleDateString()}
                  </Text>
                  <Text style={styles.collapseText}>
                    Tipo de Carta: {carta.tipo_de_carta}
                  </Text>
                  <Text style={styles.collapseText}>
                    Número da Licença: {carta.numero_da_licenca}
                  </Text>
                  <Text style={styles.collapseText}>
                    Primeira Emissão Ano: {carta.primeira_emissao_ano}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => openDocument(carta.doc_url)}
                  >
                    <Text style={styles.buttonText}>Ver Documento</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      <View>
        <View key={result?.id} style={styles.listItem}>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(`veiculo-${result?.id}`)}
            >
              <Text style={styles.sectionTitle}>
                <FontAwesome name="truck" size={16} color="#111827" /> Veículos
              </Text>
              <FontAwesome
                name={expanded === `veiculo-${result.id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            
            {expanded === `veiculo-${result?.id}` && (
              <View style={styles.collapseContent}>
                <Text style={styles.collapseText}>Matrícula: {result?.matricula}</Text>
                <Text style={styles.collapseText}>Combustível: {result?.combustivel}</Text>
                <Text style={styles.collapseText}>Cor: {result?.cor}</Text>
                <Text style={styles.collapseText}>Ano de Fabricação: {result?.ano_fabricacao}</Text>
                <Text style={styles.collapseText}>Peso Bruto: {result?.peso_bruto}</Text>
                <Text style={styles.collapseText}>Tipo de Caixa: {result?.tipo_de_caixa}</Text>
                <Text style={styles.collapseText}>Distância entre Eixos: {result?.distancia_entre_eixos}</Text>
                <Text style={styles.collapseText}>Modelo: {result?.modelo}</Text>
                <Text style={styles.collapseText}>Marca: {result?.marca}</Text>
                <Text style={styles.collapseText}>Medidas Pneumáticas: {result?.medidas_pneomaticas}</Text>
                <Text style={styles.collapseText}>Lotação: {result?.lotacao}</Text>
                <Text style={styles.collapseText}>Número Quadro: {result?.numero_quadro}</Text>
                <Text style={styles.collapseText}>Cilindrada: {result?.cilindrada}</Text>
                <Text style={styles.collapseText}>Número Cilindro: {result?.numero_cilindro}</Text>
                <Text style={styles.collapseText}>Tara: {result?.tara}</Text>
                <Text style={styles.collapseText}>Primeiro Registro: {result?.primeiro_registro}</Text>
                <Text style={styles.collapseText}>Número Motor: {result?.numero_motor}</Text>
              </View>
            )}
          </View>
          {/* Seguro */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(`seguro-${result?.seguro[0].id}`)}
            >
              <Text style={styles.listTitle}>
                <FontAwesome name="shield" size={14} color="#6b7280" /> Seguro
              </Text>
              <FontAwesome
                name={expanded === `seguro-${result?.seguro[0].id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {expanded === `seguro-${result?.seguro[0].id}` && result?.seguro.length > 0 && (
              <View>
                {result?.seguro.map((seguro) => (
                  <View key={seguro.id}>
                    <Text style={styles.collapseText}>Asseguradora: {seguro.asseguradora}</Text>
                    <Text style={styles.collapseText}>Tipo: {seguro.tipo}</Text>
                    <Text style={styles.collapseText}>Data de Criação:  {new Date(seguro.data_criacao).toLocaleDateString()}</Text>
                    <Text style={styles.collapseText}>última Actualização:  {new Date(seguro.ultima_actualizacao).toLocaleDateString()}</Text>
                    <Text style={styles.collapseText}>
                      Expiração: {new Date(seguro.Data_expiracao).toLocaleDateString()}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => openDocument(seguro.doc_url)}
                    >
                      <Text style={styles.buttonText}>Ver Documento</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Taxa de Circulação */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(`taxa-${result?.taxaDeCirculacao[0].id}`)}
            >
              <Text style={styles.listTitle}>
                <FontAwesome name="money" size={14} color="#6b7280" />
                 Taxa de Circulação
              </Text>
              <FontAwesome
                name={expanded === `taxa-${result?.taxaDeCirculacao[0].id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {expanded === `taxa-${result?.taxaDeCirculacao[0].id}` && result?.taxaDeCirculacao?.length > 0 && (
              <View>
                {result?.taxaDeCirculacao.map((taxa) => (
                  <View key={taxa.id}>
                     <Text style={styles.collapseText}>
                      Criação: {new Date(taxa.criacao).toLocaleDateString()}
                    </Text>
                    <Text style={styles.collapseText}>
                      última Actualização: {new Date(taxa.ultima_actualizacao).toLocaleDateString()}
                    </Text>
                    <Text style={styles.collapseText}>
                      Expiração: {new Date(taxa.data_expiracao).toLocaleDateString()}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => openDocument(taxa.doc_url)}
                    >
                      <Text style={styles.buttonText}>Ver Documento</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <QRCodeExport id={result.id} />
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <FontAwesome name="times" size={20} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity 
          style={{ 
            marginTop: 8, 
            backgroundColor: '#3b82f6', 
            padding: 10, 
            borderRadius: 6, 
            alignItems: 'center' 
          }} 
          onPress={()=>setModalVisible(true)}
        >
          <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold' }}>Gerar QR Code</Text>
        </TouchableOpacity>
    </ScrollView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  info: {
    fontSize: 14,
    color: '#4b5563',
    marginVertical: 4,
  },
  icon: {
    marginLeft: 'auto',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827'
  },
  sectionInfo: {
    fontSize: 14,
    color: '#4b5563',
    marginVertical: 4,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItem: {
    marginBottom: 12,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  collapseContent: {
    paddingLeft: 16,
    marginTop: 10,
  },
  collapseText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    position: 'absolute',
    top: -20,
    right: 2,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});


export default ResultScreenLicence;
