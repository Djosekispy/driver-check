import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../atoms/IconButton';

const FilterButton: React.FC = () => {
 
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handlePress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <IconButton
        iconName="car"
        buttonSize={60}
        iconSize={28}
        backgroundColor={activeButton === 'car' ? '#3b82f6' : '#6b7280'} 
        iconColor="white"
        onPress={() => handlePress('car')} 
      />
      <IconButton
        iconName="phone"
        buttonSize={60}
        iconSize={24}
        backgroundColor={activeButton === 'phone' ? '#3b82f6' : '#6b7280'} 
        onPress={() => handlePress('phone')} 
      />
      <IconButton
        iconName="drivers-license-o"
        buttonSize={60}
        iconSize={24}
        backgroundColor={activeButton === 'license' ? '#3b82f6' : '#6b7280'} 
        onPress={() => handlePress('license')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default FilterButton;
