import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';
import RNPickerSelect from 'react-native-picker-select';
import { Platform } from 'react-native';


// Importez vos images
import test from './rrrr.jpg';
import test2 from './test2.jpg';
import test3 from './test3.jpg';
import test4 from './test4.jpg';
import test5 from './image00002.jpeg';
import test6 from './image00003.jpeg';
import test7 from './image00004.jpeg';
import test8 from './image00005.jpeg';
import test9 from './image00006.jpeg';
import test10 from './image00007.jpeg';
import test11 from './image00008.jpeg';
import test12 from './image00009.jpeg';
import test13 from './image00010.jpeg';
import test14 from './image00011.jpeg';
import test15 from './image00012.jpeg';
import test16 from './image00013.jpeg';
import test17 from './image00014.jpeg';
import test18 from './image00015.jpeg';
import test19 from './image00016.jpeg';
import test20 from './image00017.jpeg';
import test21 from './image00018.jpeg';

// Tableau de groupes d'images
const images = [
  [test, test2, test3],
  [test4, test5, test6],
  [test7, test8, test9],
  [test10, test11, test12],
  [test13, test14, test15],
  [test16, test17, test18],
  [test19, test20, test21],
];

// Styles pour les composants React Native
const styles = StyleSheet.create({
  cont: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
  },
  picker: {
    width: 150,
    height: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  pickerAndroid: {
    width: 151,
    height: 40,
    marginBottom: 20,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  fullScreenImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 55,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  navigationButtonsuiv: {
    color: 'white',
    fontSize: 16,
    marginBottom: 50,
    marginLeft: 30,
  },
  navigationButtonprec: {
    color: 'white',
    fontSize: 16,
    marginBottom: 50,
    marginRight: 50,
  },
});

// Composant principal
const DisplayAnImage = () => {
  // État pour suivre le groupe actif
  const [currentGroup, setCurrentGroup] = useState(0);

  // État pour suivre l'index de l'image sélectionnée pour l'affichage en plein écran
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    if (selectedImageIndex < images[currentGroup].length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  // Gérer le clic sur une miniature d'images
  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const renderPicker = () => {
    if (Platform.OS === 'ios') {
      return (
        <RNPickerSelect
          onValueChange={(itemValue) => setCurrentGroup(itemValue)}
          items={images.map((group, index) => ({
            label: `Groupe ${index + 1}`,
            value: index,
          }))}
          style={{
            ...pickerSelectStyles,
            placeholder: {
              color: 'gray',
            },
          }}
          placeholder={{
            label: 'Sélectionner un groupe',
            value: null,
          }}
          value={currentGroup}
        />
      );
    } else {
      return (
        <Picker
          selectedValue={currentGroup}
          onValueChange={(itemValue) => setCurrentGroup(itemValue)}
          style={styles.pickerAndroid}
        >
          {images.map((group, index) => (
            <Picker.Item
              key={index}
              label={`Groupe ${index + 1}`}
              value={index}
            />
          ))}
        </Picker>
      );
    }
  };

  return (
    <View style={styles.cont}>
      {/* Picker pour sélectionner le groupe d'images actif */}
      {renderPicker()}

      {/* Afficher les miniatures d'images du groupe sélectionné */}
      <View style={styles.container}>
        {images[currentGroup].map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
            <Image
              style={index % 2 === 0 ? styles.tinyLogo : styles.logo}
              source={image}
            />
            {/* Permet d'alterner les styles des photos paires et impaires */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal pour afficher l'image en plein écran */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image
            style={styles.fullScreenImage}
            source={images[currentGroup][selectedImageIndex]}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>

          {/* Boutons de navigation */}
          <View style={styles.navigationButtons}>
            <TouchableOpacity onPress={prevImage}>
              <Text style={styles.navigationButtonprec}>Prec</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextImage}>
              <Text style={styles.navigationButtonsuiv}>Suiv</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    marginTop: 25,
    backgroundColor: 'white',
    paddingVertical: 12,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
});

export default DisplayAnImage;
