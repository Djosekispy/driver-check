import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import driver from '@/assets/images/driver.png';

const Header: React.FC = () => (
  <View style={styles.header}>
    <Image source={driver} style={styles.icon} />
    <Text style={styles.title}>App Policial</Text>
    <TouchableOpacity style={styles.qrButton}>
      <FontAwesome name="qrcode" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  qrButton: {
    padding: 8,
    backgroundColor: '#3b82f6',
    borderRadius: 24,
  },
});

export default Header;
