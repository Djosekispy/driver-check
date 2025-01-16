import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type IconButtonProps = {
  iconName: string; 
  iconSize?: number; 
  iconColor?: string; 
  buttonSize?: number; 
  backgroundColor?: string; 
  onPress?: () => void;
  style?: ViewStyle; 
};

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconSize = 24,
  iconColor = 'white',
  buttonSize = 48,
  backgroundColor = '#3b82f6',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          backgroundColor,
        },
        style,
      ]}
      onPress={onPress}
    >
      <FontAwesome name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
