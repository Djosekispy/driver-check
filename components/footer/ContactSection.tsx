import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style'

const ContactRow = ({ iconName, text }: { iconName: string; text: string }) => (
  <View style={styles.contactRow}>
    <FontAwesome name={iconName} size={16} color="#2563eb" style={styles.contactIcon} />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const ContactSection = () => {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.column}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <ContactRow iconName="phone" text="+244 123 456 789" />
        <ContactRow iconName="phone" text="+244 123 456 789" />
        <ContactRow iconName="phone" text="+244 123 456 789" />
        <ContactRow iconName="phone" text="+244 123 456 789" />
      </View>
      <View style={styles.column}>
        <Text style={styles.sectionTitle}>Email</Text>
        <ContactRow iconName="envelope" text="contato@checkdriver.com" />
        <ContactRow iconName="envelope" text="suporte@checkdriver.com" />
      </View>
      <View style={styles.column}>
        <Text style={styles.sectionTitle}>Redes Sociais</Text>
        <ContactRow iconName="facebook" text="Facebook" />
        <ContactRow iconName="twitter" text="Twitter" />
        <ContactRow iconName="instagram" text="Instagram" />
        <ContactRow iconName="linkedin" text="LinkedIn" />
      </View>
    </View>
  );
};

export default ContactSection;
