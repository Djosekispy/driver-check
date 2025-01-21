import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { url } from "@/config/api";

export default function QRCodeExport({ id }: { id: number }) {
  const qrCodeRef = useRef<View>(null); 
  const qrCodeURL = `${url}/motorista/id=${id}`; 

  const exportAsPNG = async () => {
    try {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
        snapshotContentContainer: false
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
        format: "webm",
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
      <View style={styles.qrContainer} ref={qrCodeRef} collapsable={false}>
        <QRCode value={qrCodeURL} size={200} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={exportAsPDF}>
          <Text style={styles.buttonText}>Exportar PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonWrapper, { backgroundColor: "#FF7F50" }]}
          onPress={exportAsPNG}
        >
          <Text style={styles.buttonText}>Exportar PNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  qrContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  buttonWrapper: {
    marginVertical: 8,
    borderRadius: 10, 
    backgroundColor: '#3b82f6', 
    padding: 14,
    elevation: 2,
  },
});
