import { StyleSheet } from 'react-native'
import { Dimensions, Platform, StatusBar } from 'react-native';


const { height: screenHeight } = Dimensions.get('window');
const isLargeScreen = screenHeight > 800; 

const dynamicSpacing = Platform.select({
  ios: isLargeScreen ? 44 : 20,
  android: StatusBar.currentHeight || 24, 
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: dynamicSpacing
  },
  content: {
    padding: 16,
  },
  infoBox: {
    padding: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  infoText: {
    color: '#6b7280',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginVertical: 16,
  },
   footer: {
    marginTop: 'auto',
    padding: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 12,
  },
  footerText: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: 12,
  },
});
