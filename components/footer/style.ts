import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'column', // Alinha as colunas verticalmente
    justifyContent: 'flex-start', // Começa o alinhamento do conteúdo no topo
    alignItems: 'center', // Centraliza apenas os títulos
    padding: 16
  },
  column: {
    width: '100%', // Garante que a coluna ocupe toda a largura
    marginBottom: 16, // Espaçamento entre as seções
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center', // Centraliza o título
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb',
    paddingBottom: 4,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 16, // Garante alinhamento à esquerda para o conteúdo
  },
  contactIcon: {
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'left', // Alinha o texto à esquerda
  },
});
