import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Camera, CameraType, CameraView } from 'expo-camera';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import driver from '@/assets/images/driver.png';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title ? : string
}
function Header ({title}: HeaderProps){
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facing, setFacing] = useState<CameraType>('back');
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
    if (status === 'granted') {
      setModalVisible(true);
    } else {
      alert('Permissão para acessar a câmera foi negada.');
    }
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setModalVisible(false);
    const id = data.split('id=')[1]; 
    router.replace(`/(tabs)/user/${id}`);
  };

  const handleBarCodeScannedErro = ({ data }: { data: string }) => {
    setScanned(false);
    setModalVisible(true);
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.header}>
      
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={driver} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title ? title : 'Driver Check'}</Text>
      <TouchableOpacity style={styles.qrButton} onPress={requestCameraPermission}>
        <FontAwesome name="qrcode" size={34} color="#000" />
      </TouchableOpacity>

      {modalVisible && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            {hasPermission === null ? (
              <Text>Solicitando permissão para acessar a câmera...</Text>
            ) : hasPermission === false ? (
              <Text>Permissão para acessar a câmera negada!</Text>
            ) : (
              <CameraView
                facing={facing}
                onBarcodeScanned={scanned ? handleBarCodeScannedErro : handleBarCodeScanned }
                barcodeScannerSettings={{
                  barcodeTypes: ['qr'],
                }}
                style={StyleSheet.absoluteFillObject}
              />
            )}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <FontAwesome name="close" size={30} color="#6b7280" />
            </TouchableOpacity>

            <View style={styles.cameraControl}>
              <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
                <MaterialIcons name="cameraswitch" size={28} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

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
    padding: 4,
    width: 50,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  cameraControl: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default Header;
