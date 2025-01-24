import React from 'react';
import { View, StyleSheet, Text, Platform, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useRouter } from 'expo-router';
import { motoristaService } from '@/integration/services/motorista/MotoristaService';

const SearchBox: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState<string>(''); 
  const [category, setCategory] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const categories = [
    { id: 'phone', label: 'Telefone' },
    { id: 'plate', label: 'Matricula' },
    { id: 'license', label: 'Número da Carta' },
    { id: 'bi', label: 'Número de Bilhete' },
  ];

  const handleSearch = async () => {
    if (query.length > 0) {
      router.push({pathname : '/(tabs)/search', params : { query, category}});
    }
  };

  const renderPicker = () => {
    if (Platform.OS === 'android') {
      return (
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
      );
    } else if (Platform.OS === 'ios') {
      return (
        <View style={styles.iosPickerContainer}>
          <TouchableOpacity onPress={() => setShowModal(true)} style={styles.pickerButton}>
            <Text style={styles.pickerButtonText}>
              {category ? categories.find(c => c.id === category)?.label : "Escolha uma categoria"}
            </Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={showModal}
            animationType="slide"
            onRequestClose={() => setShowModal(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {categories.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => { setCategory(item.id); setShowModal(false); }}
                    style={styles.modalItem}
                  >
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Informações</Text>
      <Text style={styles.description}>
        Selecione uma categoria de busca antes de continuar:
      </Text>
      <View style={styles.dropdownContainer}>
        {renderPicker()}
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
        title={isLoading ? "Buscando..." :"Submeter a Buscar"}
        onPress={handleSearch}
        style={[
          styles.button,
          { backgroundColor: query && category ? '#3b82f6' : '#FF7F50' }
        ]}
        disabled={isLoading ? true : (!query || !category)} 
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
  iosPickerContainer: {
    marginBottom: 16,
  },
  pickerButton: {
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerButtonText: {
    color: '#6b7280',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: 300,
  },
  modalItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalItemText: {
    fontSize: 16,
    color: '#6b7280',
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
