// Acceuil.js
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress, style }) => (
  <TouchableHighlight style={[styles.deco, style]} onPress={onPress}>
    <View>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableHighlight>
);

const AcceuilScreen = ({ route }) => {
  const { handleLogout } = route.params || {};
  console.log('handleLogout:', handleLogout);
  const navigation = useNavigation();
  const [besoinAideClique, setBesoinAideClique] = useState(false);

  useEffect(() => {
    const cleanupOnBlur = () => {
      setBesoinAideClique(false);
    };

    const focusSubscription = navigation.addListener('focus', () => {
      cleanupOnBlur();
    });

    return () => {
      cleanupOnBlur();
      focusSubscription();
      cleanup();
    };
  }, [navigation]);

  useLayoutEffect(() => {
    if (handleLogout) {
      navigation.setOptions({
        headerRight: () => (
          <CustomButton
            title="Déconnexion"
            onPress={handleLogout}
            style={{ width: 100, marginTop: 5 }}
            textStyle={{ color: 'black' }}
          />
        ),
      });
    }
  }, [handleLogout, navigation]);

  const handleFirstButtonClick = () => {
    setBesoinAideClique(true);
    console.log('Bouton cliqué');
    Alert.alert("Besoin d'aide", "Attend avant d'appeler Nabil");
  };

  const handleSecondButtonClick = () => {
    navigation.navigate('Recherche');
  };

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 50,
          marginBottom: 70,
          fontSize: 30,
        }}>
        Bonjour l'ancien
      </Text>
      <Button
        onPress={handleFirstButtonClick}
        title="Besoin d'aide"
      />
      {besoinAideClique && (
        <>
          <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 30 }}>
            Attend avant d'appeler Nabil {'\n'}
          </Text>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20 }}>
            Si il répond pas attend ou envoie un message ! {'\n'}
          </Text>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20, marginBottom: 30 }}>
            Sinon tu peux appuyer sur le bouton en dessous y'a les questions les plus posées {'\n'}
          </Text>
          <Button
            title="Viens poser ta question"
            onPress={handleSecondButtonClick}
            style={{ width: 200, backgroundColor: '#2196F3', borderRadius: 0, padding: 10 }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  deco: {
    width: 35,
    marginRight: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default AcceuilScreen;
