import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useRouter } from 'expo-router';

const SearchBox: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState<string>(''); 
  const [category, setCategory] = React.useState<string | null>(null);

  const categories = [
    { id: 'phone', label: 'Telefone' },
    { id: 'plate', label: 'Placa' },
    { id: 'engine', label: 'Motor' },
    { id: 'license', label: 'Número da Carta' },
  ];

  const handleSearch = () => {
    if (query.length > 0) {
      router.push('/(tabs)/search');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Informações</Text>
      <Text style={styles.description}>
        Selecione uma categoria de busca antes de continuar:
      </Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)} 
          style={styles.picker}
          prompt="Escolha uma categoria"
        >
          <Picker.Item label="Selecione uma categoria" value={null} />
          {categories.map((item) => (
            <Picker.Item key={item.id} label={item.label} value={item.id} />
          ))}
        </Picker>
      </View>
      {category && (
        <>
          <Text style={styles.inputLabel}>
            Digite o dado correspondente à categoria "{categories.find((c) => c.id === category)?.label}":
          </Text>
          <Input
            placeholder="Digite aqui..."
            style={styles.input}
            query={setQuery}
          />
        </>
      )}
      <Button
        title="Buscar"
        onPress={handleSearch}
        style={[
          styles.button,
          {
            backgroundColor: query && category ? '#3b82f6' : '#a1a1aa', 
          },
        ]}
        disabled={!query || !category} 
      />
    </View>
  );
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
  dropdownContainer: {
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    backgroundColor: '#f9fafb',
  },
  inputLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    flexShrink: 0,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default SearchBox;
