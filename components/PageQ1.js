import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PageQ1 = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  // Options pour le RNPickerSelect
  const pickerOptions = [
    { label: 'R1', value: 'R1' },
    { label: 'R2', value: 'R2' },
    { label: 'R3', value: 'R3' },
    { label: 'R4', value: 'R4' },
    { label: 'T7', value: 'T7' },
    { label: 'A5', value: 'A5' },
    { label: 'S7', value: 'S7' },
    { label: 'R0', value: 'R0' },
    { label: 'O6', value: 'O6' },
    { label: 'T9', value: 'T9' },
    // ... Ajoutez d'autres options au besoin
  ];

  const renderText = () => {
    switch (selectedValue) {
      case 'R1':
        return <Text style={styles.text1}>Choisis ton problème.</Text>;
      case 'R2':
        return <Text style={styles.text2}>Travaux client.{'\n'} </Text>;
      case 'R3':
        return <Text style={styles.text3}>Pas de continuité sur l'infrastructure sfr.</Text>;
      case 'R4':
        return <Text style={styles.text4}>Texte pour jsp.</Text>;
      case 'T7':
        return <Text style={styles.text5}>Fourreau bouché en partie public.</Text>;
      case 'A5':
        return <Text style={styles.text6}>Texte pour c'est pour ça.</Text>;
      case 'S7':
        return <Text style={styles.text6}>Texte pour c'est pour ça.</Text>;
      case 'R0':
        return <Text style={styles.text6}>RDV non honnoré 250 euros d'amende.</Text>;
      case 'O6':
        return <Text style={styles.text6}>Texte pour c'est pour ça.</Text>;
      case 'T9':
        return <Text style={styles.text6}>Texte pour c'est pour ça.</Text>;
      default:
      return <Text />;
    }
  };

  return (
    <View>
      {/* Contenu du composant PageQ1 */}
      <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 20 }}>
        COMMENT FAIRE UN ECEHC ?
      </Text>
      <Text style={{ marginTop: 40, textAlign: 'center' }}>
        Pour commencer si tu peux la mettre en réussite c'est mieux, mais bon tu
        serais sûrement pas là si c'était le cas.
        {'\n'}
      </Text>
      <Text style={{ textAlign: 'center' }}>
        Si le racc il est impossible où que t'as une urgence, le meilleur echec
        possible c'est le R2, évite les faux r3 et fais pas comme Hedy avec ses
        "les clients doivent partir". Donc essaye de trouver un motif
        intellgient : fourreau bouché privatif, comble inpratiquable,
        Interdiction d'apparent bref tu connais mieux ton travaille que moi
        {'\n'}
      </Text>

      {/* RNPickerSelect */}
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={pickerOptions}
        value={selectedValue}
        style={{ inputIOS: { fontSize: 16, paddingVertical: 12, paddingHorizontal: 10, borderColor: 'gray',
         borderWidth: 1, borderRadius: 4, color: 'black', paddingRight: 30, marginTop: 10, textAlign: 'center', } }}
        placeholder={{ label: 'Sélectionnez une option', value: null }}
      />
      {renderText()}
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    color: 'red',
  },
  text2: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    color: 'blue',
  },
  text3: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    fontStyle: 'italic',
  },
  text4: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text5: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  text6: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 18,
    color: 'green',
  },
});

export default PageQ1;
