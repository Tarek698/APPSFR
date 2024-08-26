import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Ajout de l'importation

export default function Recherche() {
  const [selectedValue, setSelectedValue] = useState('soucis');
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Réinitialiser l'état lorsque le composant est monté
      setSelectedValue('soucis');
    }, [])
  );

  const renderPicker = () => {
    if (Platform.OS === 'ios') {
      return (
        <RNPickerSelect
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          items={[
            { label: "Soucis", value: "soucis" },
            { label: "Declarer un echec", value: "Q1" },
            { label: "georeso", value: "Q2" },
            { label: "Numéro echec", value: "Q3" },
            { label: "Faire une facture", value: "Q4" },
            { label: "c'est pour ça", value: "Q5" },
          ]}
          style={pickerSelectStyles}
          value={selectedValue}
        />
      );
    } else {
      return (
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 250, alignSelf: 'center', marginTop: 25,}}
          mode="dialog"
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Soucis" value="soucis" />
          <Picker.Item label="Declarer un echec" value="Q1" />
          <Picker.Item label="georeso" value="Q2" />
          <Picker.Item label="Numéro echec" value="Q3" />
          <Picker.Item label="Faire une facture" value="Q4" />
          <Picker.Item label="c'est pour ça" value="Q5" />
        </Picker>
      );
    }
  };

  const renderText = () => {
    switch (selectedValue) {
      case 'soucis':
        return <Text style={styles.text1}>Choisis ton problème.</Text>;
      case 'Q1':
        return <Text style={styles.text2}>Texte pour Declarer un echec.{'\n'} </Text>;
      case 'Q2':
        return <Text style={styles.text3}>Texte pour georeso.</Text>;
      case 'Q3':
        return <Text style={styles.text4}>Texte pour jsp.</Text>;
      case 'Q4':
        return <Text style={styles.text5}>Texte pour Je t'explique.</Text>;
      case 'Q5':
        return <Text style={styles.text6}>Texte pour c'est pour ça.</Text>;
      default:
        return <Text />;
    }
  };

  const navigateToPage = () => {
    switch (selectedValue) {
      case 'Q1':
        navigation.navigate('PageQ1');
        break;
      case 'Q2':
        navigation.navigate('PageQ2');
        break;
      case 'Q3':
        navigation.navigate('PageQ3');
        break;
      case 'Q4':
        navigation.navigate('PageQ4');
        break;
      case 'Q5':
        navigation.navigate('PageQ5');
        break;
      default:
        console.log("No navigation case matched");
        break;
    }
  };

  return (
    <View style={styles.container}>
      {renderPicker()}

      {renderText()}
      {selectedValue !== 'soucis' && (
        <View style={{ marginTop: 25, borderRadius: 0, padding: 10, width: 150 }}>
          <Button title="Submit" onPress={navigateToPage} />
        </View>
      )}
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginTop: 25,
    fontSize: 18,
    color: 'red',
  },
  text2: {
    marginTop: 25,
    fontSize: 18,
    color: 'blue',
  },
  text3: {
    marginTop: 25,
    fontSize: 18,
    fontStyle: 'italic',
  },
  text4: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text5: {
    marginTop: 25,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  text6: {
    marginTop: 25,
    fontSize: 18,
    color: 'green',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    marginTop: 25,
    backgroundColor: 'white',
    paddingVertical: 12,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
});
