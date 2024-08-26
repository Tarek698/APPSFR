import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image, StyleSheet, Modal, ScrollView } from 'react-native';

const PageQ4 = () => {
  const documentUrl = 'https://www.dropbox.com/scl/fi/kzs4n4s49eghroy5qyffw/FACTURE.docx?rlkey=45k7qdic5qhk9pjb4ymx7oyw3&dl=0';

  const openDocument = async () => {
    try {
      // Ouvrir le document avec une application tierce
      await Linking.openURL(documentUrl);
    } catch (error) {
      console.error('Erreur lors de l\'ouverture du document :', error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView>
    <View>
      <Text style={styles.heading}>
        Comment faire une facture
      </Text>

      {/* Ajoutez cette partie pour afficher une image locale */}
      <TouchableOpacity onPress={toggleModal}>
        <Image
          source={require('./fac.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={openDocument}>
        <Text style={styles.link}>
          Ouvrir le document Word {'\n'}
        </Text>
      </TouchableOpacity>

      <Text style={{textAlign:'center', textDecorationLine: 'underline',}}>La facture est à faire chaque mois, voici toutes les modifications à apporter :{'\n\n'}</Text>
      <Text><Text style={styles.instruction}>En haut à gauche :</Text> Nom, Prenom, Adresse postale, Nurméros de siret. {'\n\n'}</Text>
      <Text><Text style={styles.instruction}>En haut à droite :</Text> Pour le numéros de facture c'est : Année/Mois/N° 
        ex =(2023090001 Donc septembre 2023 et 0001 pour la première facture pas besoin
         de mettre autre chose que 0001 puisque vous ne fait pas beaucoup de facture). 
         Oubliez pas la date en dessous c'est la fin du moi en génèral ex= 30/09/2023 ou 31/08/2023{'\n\n'}</Text>
      <Text><Text style={styles.instruction}>En bas à gauche :</Text> Faut simplement mettre la même date que en haut à droite.{'\n\n'}</Text>
      <Text>Et pour finir faut simplement mettre le montant que vous avez ce mois-ci à la place de là où y'a 2550.00.</Text>
      {/* Modal pour afficher l'image en plein écran */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Image
            source={require('./fac.jpg')}
            style={styles.fullScreenImage}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%', // La largeur est maintenant définie à 100% de la largeur de l'écran
    height: 300, // Ajustez la hauteur selon vos besoins
    alignSelf: 'center',
    marginVertical: 20,
  },
  link: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 20,
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreenImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 70
    ,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  instruction: { 
      textDecorationLine: 'underline',
      textDecorationColor: 'red',
  },
});

export default PageQ4;
