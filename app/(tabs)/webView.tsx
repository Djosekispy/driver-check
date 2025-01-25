import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { url } from '@/config/api';

export default function DocumentOpen() {
    const { location } = useLocalSearchParams<{ location: string }>();
    const router = useRouter()
    router.canGoBack()
  return (
    <WebView
    style={styles.container}
    allowFileAccess={true}
    allowingReadAccessToURL='*'
    allowingReadAccessToURL='http://*/*'
    allowsProtectedMedia={true}
    allowsLinkPreview={true}
    allowsBackForwardNavigationGestures={true}
    allowUniversalAccessFromFileURLs={true}
    allowFileAccessFromFileURLs={true}
    source={{ uri: `${url}/${location}` }}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
