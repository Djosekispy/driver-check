import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ContactRowProps {
  iconName: keyof typeof FontAwesome.glyphMap;
  text: string;
}

const ContactRow: React.FC<ContactRowProps> = ({ iconName, text }) => (
  <View style={styles.row}>
    <FontAwesome name={iconName} size={18} color="#4B5563" />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    marginLeft: 8,
    color: '#6b7280',
    fontSize: 16,
  },
});

export default ContactRow;
