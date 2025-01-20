import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Motorista from '@/integration/model/Motorista';

interface ResultProps {
  result: Motorista;
}

const ResultScreenDriver: React.FC<ResultProps> = ({ result }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

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
          <Text style={styles.name}>{result?.nome}</Text>
          <Text style={styles.info}>Telefone: {result?.telefone}</Text>
          <Text style={styles.info}>Endereço: {result?.endereco}</Text>
        </View>
        <FontAwesome
          name="user-circle"
          size={48}
          color="#4b5563"
          style={styles.icon}
        />
      </View>

      {/* BI Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documento de Identidade</Text>
        <Text style={styles.sectionInfo}>Número BI: {result?.numero_bi_ou_passport}</Text>
        <Text style={styles.sectionInfo}>
          Expiração: {new Date(result?.data_expiracao_de_documento || '').toLocaleDateString()}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openDocument(result?.url_do_BI || '')}
        >
          <Text style={styles.buttonText}>Ver Documento</Text>
        </TouchableOpacity>
      </View>

      {/* Cartas de Condução */}
      {result.cartaDeConducao.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cartas de Condução</Text>
          {result.cartaDeConducao.map((carta) => (
            <View key={carta.id} style={styles.listItem}>
              <TouchableOpacity
                style={styles.listHeader}
                onPress={() => toggleExpand(`carta-${carta.id}`)}
              >
                <Text style={styles.listTitle}>
                  {carta.tipo_de_carta} - {carta.numero_da_licenca}
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

      {/* Veículos */}
      {result?.veiculo?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Veículos</Text>
          {result.veiculo.map((veiculo) => (
            <View key={veiculo.id} style={styles.listItem}>
              <TouchableOpacity
                style={styles.listHeader}
                onPress={() => toggleExpand(`veiculo-${veiculo.id}`)}
              >
                <Text style={styles.listTitle}>
                  {veiculo.marca} - {veiculo.modelo}
                </Text>
                <FontAwesome
                  name={expanded === `veiculo-${veiculo.id}` ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color="#6b7280"
                />
              </TouchableOpacity>
              {expanded === `veiculo-${veiculo.id}` && (
                <View style={styles.collapseContent}>
                  <Text style={styles.collapseText}>Matrícula: {veiculo.matricula}</Text>
                  <Text style={styles.collapseText}>
                    Combustível: {veiculo.combustivel}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => openDocument(veiculo.seguro[0]?.doc_url || '')}
                  >
                    <Text style={styles.buttonText}>Ver Seguro</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ResultScreenDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 8,
    color: '#111827',
  },
  sectionInfo: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
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
    marginTop: 8,
  },
  collapseText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
});
