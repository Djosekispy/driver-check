import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function QRCodeExport({ id }: { id: number }) {
  const qrCodeRef = useRef(null);
  const qrCodeURL = `driver://${id}`; 

  const exportAsPNG = async () => {
    try {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, { mimeType: "image/png" });
      } else {
        alert("Exportação não suportada no dispositivo.");
      }
    } catch (error) {
      console.error("Erro ao exportar PNG:", error);
    }
  };

  const exportAsPDF = async () => {
    try {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
      });

      const pdfPath = FileSystem.documentDirectory + "QRCode.pdf";
      await FileSystem.writeAsStringAsync(pdfPath, uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfPath, { mimeType: "application/pdf" });
      } else {
        alert("Exportação não suportada no dispositivo.");
      }
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* QR Code */}
      <View ref={qrCodeRef} style={styles.qrContainer}>
        <QRCode value={qrCodeURL} size={200} />
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <Button title="Exportar como PNG" onPress={exportAsPNG} />
        <Button title="Exportar como PDF" onPress={exportAsPDF} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },
  qrContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
