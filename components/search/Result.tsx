import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import  { styles }  from './style';

type CollapseItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
};

const ResultScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Função para expandir/colapsar itens
  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  // Dados fictícios para a tela
  const user = {
    name: 'Mauro Vicente',
    phone: '+244 912 345 678',
    address: 'Bairro Santo António, Rua 12, Huíla',
    status: 'restrito', // ou 'livre'
  };

  const collapseItems: CollapseItem[] = [
    {
      id: '1',
      title: 'Informações Pessoais',
      icon: <FontAwesome name="user" size={20} color="#2563eb" />,
      content: 'BI: 001234567\nData de Nascimento: 01/01/1990\nEstado Civil: Solteiro',
    },
    {
      id: '2',
      title: 'Automóvel',
      icon: <MaterialIcons name="directions-car" size={20} color="#f59e0b" />,
      content: 'Marca: Toyota\nModelo: Corolla\nPlaca: LD-12-34',
    },
    {
      id: '3',
      title: 'Carta de Condução',
      icon: <FontAwesome name="id-card" size={20} color="#10b981" />,
      content: 'Número: 12345678\nCategoria: B\nValidade: 01/01/2030',
    },
    {
      id: '4',
      title: 'Taxa de Circulação',
      icon: <FontAwesome name="money" size={20} color="#ef4444" />,
      content: 'Pago até: 01/01/2025\nValor: AKZ 50,000',
    },
    {
      id: '5',
      title: 'Seguro',
      icon: <MaterialIcons name="security" size={20} color="#6d28d9" />,
      content: 'Cobertura: Total\nValidade: 01/01/2024\nValor: AKZ 100,000',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userPhone}>{user.phone}</Text>
          <Text style={styles.userAddress}>{user.address}</Text>
        </View>
        <View style={styles.headerStatus}>
          <FontAwesome
            name={user.status === 'livre' ? 'check-circle' : 'ban'}
            size={24}
            color={user.status === 'livre' ? '#10b981' : '#ef4444'}
          />
        </View>
      </View>

      {/* Lista de Itens */}
      <View style={styles.list}>
        {collapseItems.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <TouchableOpacity
              style={styles.listHeader}
              onPress={() => toggleExpand(item.id)}
            >
              <View style={styles.listHeaderLeft}>
                {item.icon}
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>
              <FontAwesome
                name={expanded === item.id ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#6b7280"
              />
            </TouchableOpacity>
            {expanded === item.id && (
              <View style={styles.collapseContent}>
                <Text style={styles.collapseText}>{item.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ResultScreen;
