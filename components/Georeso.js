import React from 'react';
import { View, WebView, StyleSheet } from 'react-native';

const Georeso = () => {
  return (
    <View style={styles.container}>
      {/* Remplacez "URL_DE_LA_CARTE" par l'URL réelle de la carte */}
      <WebView source={{ uri: 'https://sigreseaux.orange.fr/ger/' }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Georeso;

