import { AuthProvider } from '@/context';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};


export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
    <AuthProvider>
    <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} networkActivityIndicatorVisible translucent />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </AuthProvider>
      </>
  );
}
