import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Modal, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import QRCodeExport from '../molecules/QrCode';
import { url } from '@/config/api';
import CartaDeConducao from '@/integration/model/Carta';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { multaService } from '@/integration/services/multa/MultaService';
import ErrorModal from '@/components/search/ErrorModal';
import LoadingModal from '@/components/search/searchModal';
import SuccessModal from '@/components/search/SuccessModal';

interface ResultProps {
  result: CartaDeConducao;
}

const ResultScreenLicence: React.FC<ResultProps> = ({ result }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
   const [ modalVisible , setModalVisible ] = useState(false)
  const [ modalSuccessVisible , setModalSuccessVisible ] = useState(false)
    const [ isLoading, setIsLoading ] = React.useState(false)
  const router = useRouter();
  const close = () => {
    setModalVisible(false)
  }
  const closeSuccessModal = () => {
    setModalSuccessVisible(false)
  }
  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const openDocument = async (location: string) => {
    let result = await WebBrowser.openBrowserAsync(`${url}/${location}`);	

  };
 const registrarMultaPorTaxa = async () => {
    try {
      setIsLoading(true)
      const multa = await multaService.registarMultaDeMotorista(
        'Multa por falta de taxa de circulação', 
        'Notificamos que não pagou a sua taxa de circulação, por favor, dirija-se até ao balcão mais próximo e regularize já a situação! Obrigado.', Number(String(result?.motorista?.id)));
   setModalSuccessVisible(true)
      } catch (error) {
      setModalVisible(true)
  }finally{
    setIsLoading(false)
  }
  }

  const registrarMultaPorSeguro = async () => {
    try {
      setIsLoading(true)
      const multa = await multaService.registarMultaDeMotorista(
        'Multa por falta de Seguro de Viatura', 
        'Notificamos que não pagou o seu seguro de viatura, por favor, dirija-se até ao balcão mais próximo da sua seguradora e regularize já a situação! Obrigado.', Number(String(result?.motorista?.id)));
        setModalSuccessVisible(true)
      } catch (error) {
      setModalVisible(true)
  }finally{
    setIsLoading(false)
  }
  }

  const registrarMultaPorCarta = async () => {
    try {
      setIsLoading(true)
      const multa = await multaService.registarMultaDeMotorista(
        'Carta de Condução fora do prazo de validade', 
        'Notificamos que a sua carta de condução está fora do prazo de validade, por favor, dirija-se ao balcão mais próximo dos serviços de trânsito para regularizar a situação! Obrigado.', Number(String(result?.motorista?.id)));
        setModalSuccessVisible(true)
      } catch (error) {
      setModalVisible(true)
  }finally{
    setIsLoading(false)
  }
  }

  const multa = result.motorista?.multa?.some(item => (item.estado === 'Corrente' )) 
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <ErrorModal
      visible={modalVisible}
      title="Erro no Processamento"
      description="Ops! parace que houve um erro, por favor, tente mais tarde"
      onClose={close}
    />
       <LoadingModal visible={isLoading} message="Buscando informações, aguarde..." />
  
  <SuccessModal
    visible={modalSuccessVisible}
    title="Envio De Multa"
    description="O Motorista foi notificado com sucesso!"
    onClose={closeSuccessModal}
  />
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{result?.motorista?.nome}</Text>
          <Text style={styles.info}>
            <FontAwesome name="phone" size={14} color="#6b7280" /> {result?.motorista?.telefone}
          </Text>
          <Text style={styles.info}>
            <MaterialIcons name="location-on" size={14} color="#6b7280" /> {result?.motorista?.endereco}
          </Text>
        </View>
     
        { multa ?  
      <TouchableOpacity
      onPress={()=>router.replace({pathname:'/(tabs)/multa', params:{motoristaId: result.motorista?.id}})}
      >
<FontAwesome name="exclamation-triangle" size={24} color="#EF4444" /> 
      </TouchableOpacity>
      :
      <TouchableOpacity
      onPress={()=>router.replace({pathname:'/(tabs)/multa', params:{motoristaId: result.motorista?.id}})}
      >
      <MaterialIcons name="gpp-good" size={24} color="#10B981" />
      </TouchableOpacity>
      }
      </View>

      {/* BI Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <FontAwesome name="id-card" size={16} color="#111827" /> Documento de Identidade
        </Text>
        <Text style={styles.sectionInfo}>Número BI: {result?.motorista?.numero_bi_ou_passport}</Text>
        <Text style={styles.sectionInfo}>
          Expiração: {new Date(result?.motorista?.data_expiracao_de_documento || '').toLocaleDateString()}
        </Text>
        <Text style={styles.sectionInfo}>Nacionalidade: {result?.motorista?.nacionalidade}</Text>
        <Text style={styles.sectionInfo}>Gênero: {result?.motorista?.genero}</Text>
        <Text style={styles.sectionInfo}>Data de Nascimento: {new Date(String(result?.motorista?.data_nascimento)).toLocaleDateString()}</Text>
        <Text style={styles.sectionInfo}>Número de BI/Passport: {result?.motorista?.numero_bi_ou_passport}</Text>
        <TouchableOpacity style={styles.button} onPress={() => openDocument(`${url}/${result?.motorista?.url_do_BI}` || '')}>
          <Text style={styles.buttonText}>Ver Documento</Text>
        </TouchableOpacity>
      </View>

      {/* Cartas de Condução */}
      {result?.motorista?.cartaDeConducao && result?.motorista?.cartaDeConducao?.length > 0 && (
        <View style={styles.section}>
         
          {result.motorista?.cartaDeConducao.map((carta) => (
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

                  {new Date(carta.validade) < new Date() && (
                    <TouchableOpacity
                      style={[styles.button,{backgroundColor: '#ef4444'}]}
                      onPress={registrarMultaPorCarta}
                    >
                      <Text style={styles.buttonText}>Registrar Multa</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => openDocument(`${url}/${carta.doc_url}`)}
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
              onPress={() => toggleExpand(`veiculo-${result?.motorista?.veiculo[0].id}`)}
            >
              <Text style={styles.sectionTitle}>
                <FontAwesome name="truck" size={16} color="#111827" /> Veículos
              </Text>
              <FontAwesome
                name={expanded === `veiculo-${result?.motorista?.veiculo[0].id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {result.motorista?.veiculo.map((veiculo) => (
            expanded === `veiculo-${veiculo?.id}` && (
              <View style={styles.collapseContent}>
                <Text style={styles.collapseText}>Matrícula: {veiculo?.matricula}</Text>
                <Text style={styles.collapseText}>Combustível: {veiculo?.combustivel}</Text>
                <Text style={styles.collapseText}>Cor: {veiculo?.cor}</Text>
                <Text style={styles.collapseText}>Ano de Fabricação: {veiculo?.ano_fabricacao}</Text>
                <Text style={styles.collapseText}>Peso Bruto: {veiculo?.peso_bruto}</Text>
                <Text style={styles.collapseText}>Tipo de Caixa: {veiculo?.tipo_de_caixa}</Text>
                <Text style={styles.collapseText}>Distância entre Eixos: {veiculo?.distancia_entre_eixos}</Text>
                <Text style={styles.collapseText}>Modelo: {veiculo?.modelo}</Text>
                <Text style={styles.collapseText}>Marca: {veiculo?.marca}</Text>
                <Text style={styles.collapseText}>Medidas Pneumáticas: {veiculo?.medidas_pneomaticas}</Text>
                <Text style={styles.collapseText}>Lotação: {veiculo?.lotacao}</Text>
                <Text style={styles.collapseText}>Número Quadro: {veiculo?.numero_quadro}</Text>
                <Text style={styles.collapseText}>Cilindrada: {veiculo?.cilindrada}</Text>
                <Text style={styles.collapseText}>Número Cilindro: {veiculo?.numero_cilindro}</Text>
                <Text style={styles.collapseText}>Tara: {veiculo?.tara}</Text>
                <Text style={styles.collapseText}>Primeiro Registro: {veiculo?.primeiro_registro}</Text>
                <Text style={styles.collapseText}>Número Motor: {veiculo?.numero_motor}</Text>
              </View>
            )
             ))}
          </View>
       
          {/* Seguro */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(`seguro-${result?.motorista?.veiculo[0].seguro[0].id}`)}
            >
              <Text style={styles.listTitle}>
                <FontAwesome name="shield" size={14} color="#6b7280" /> Seguro
              </Text>
              <FontAwesome
                name={expanded === `seguro-${result?.motorista?.veiculo[0].seguro[0].id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {expanded === `seguro-${result?.motorista?.veiculo[0].seguro[0].id}` && result?.motorista?.veiculo[0].seguro && result?.motorista?.veiculo[0].seguro.length > 0 && (
              <View>
                  {result?.motorista?.veiculo.map((veiculo) => (
                veiculo?.seguro.map((seguro) => (
                 
                 <View key={seguro.id}>
                    <Text style={styles.collapseText}>Asseguradora: {seguro.asseguradora}</Text>
                    <Text style={styles.collapseText}>Tipo: {seguro.tipo}</Text>
                    <Text style={styles.collapseText}>Data de Criação:  {new Date(seguro.data_criacao).toLocaleDateString()}</Text>
                    <Text style={styles.collapseText}>última Actualização:  {new Date(seguro.ultima_actualizacao).toLocaleDateString()}</Text>
                    <Text style={styles.collapseText}>
                      Expiração: {new Date(seguro.Data_expiracao).toLocaleDateString()}
                    </Text>

                    {new Date(seguro.Data_expiracao) < new Date() && (
                          <TouchableOpacity
                            style={[styles.button,{backgroundColor: '#ef4444'}]}
                            onPress={registrarMultaPorSeguro}
                          >
                            <Text style={styles.buttonText}>Registrar Multa</Text>
                          </TouchableOpacity>
                        )}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => openDocument(`${url}/${seguro.doc_url}`)}
                    >
                      <Text style={styles.buttonText}>Ver Documento</Text>
                    </TouchableOpacity>
                  </View>
                ))
              ))}
              </View>
            )}
          </View>

          {/* Taxa de Circulação */}
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(`taxa-${result?.motorista?.veiculo[0].taxaDeCirculacao[0].id}`)}
            >
              <Text style={styles.listTitle}>
                <FontAwesome name="money" size={14} color="#6b7280" />
                 Taxa de Circulação
              </Text>
              <FontAwesome
                name={expanded === `taxa-${result?.motorista?.veiculo[0].taxaDeCirculacao[0].id}` ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {expanded === `taxa-${result?.motorista?.veiculo[0].taxaDeCirculacao[0].id}` && result?.motorista?.veiculo[0].taxaDeCirculacao && result?.motorista?.veiculo[0].taxaDeCirculacao.length > 0 && (
              <View>
                 {result?.motorista?.veiculo.map((veiculo) => (
                veiculo?.taxaDeCirculacao.map((taxa) => (
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
                    {new Date(taxa.data_expiracao) < new Date() && (
                          <TouchableOpacity
                            style={[styles.button,{backgroundColor: '#ef4444'}]}
                            onPress={registrarMultaPorTaxa}
                          >
                            <Text style={styles.buttonText}>Registrar Multa</Text>
                          </TouchableOpacity>
                        )}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => openDocument(`${url}/${taxa.doc_url}`)}
                    >
                      <Text style={styles.buttonText}>Ver Documento</Text>
                    </TouchableOpacity>
                  </View>
                ))
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
            <QRCodeExport id={Number(String(result?.motorista?.id))} />
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


export const styles = StyleSheet.create({
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
