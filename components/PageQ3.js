import React from 'react';
import { View, Text } from 'react-native';
import CallButton from './Appel';

const PageQ3 = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>Numéros Importants {'\n'}</Text>
      <Text style={{ fontWeight: 'bold' }}>Voici les numéros pour déclarer un échec / passer une PLP en racc / demander une info :{'\n'}</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros de la maintenance:</Text>
        {/* Bouton d'appel pour le numéro de la maintenance */}
        <CallButton phoneNumber="0329432520" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros du BOT:</Text>
        {/* Bouton d'appel pour le numéro du BOT */}
        <CallButton phoneNumber="0236671005" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros Sfr Echec:</Text>
        {/* Bouton d'appel pour le numéro Sfr Echec */}
        <CallButton phoneNumber="0180978800" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros CA:</Text>
        {/* Bouton d'appel pour le numéro CA */}
        <CallButton phoneNumber="0329432560" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros Plp:</Text>
        {/* Bouton d'appel pour le numéro Plp */}
        <CallButton phoneNumber="0805775050" />
      </View>

      <View>
        <Text style={{fontWeight: 'bold'}}>{'\n'}Les numéros d'ERT :</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Mehdi ERT:</Text>
        {/* Bouton d'appel pour le numéro de Mehdi ERT */}
        <CallButton phoneNumber="0603709364" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Fouad ERT:</Text>
        {/* Bouton d'appel pour le numéro de Fouad ERT */}
        <CallButton phoneNumber="0609720047" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Moktar ERT:</Text>
        {/* Bouton d'appel pour le numéro de Moktar ERT */}
        <CallButton phoneNumber="0622229251" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold'}}>{'\n'}Numéro de Mlsn :</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>  
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Kamel Grand chef :</Text>
        {/* Bouton d'appel pour le numéro de Kamel */}
        <CallButton phoneNumber="0651168210" />
      </View>  

      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Nabil Chef :</Text>
        {/* Bouton d'appel pour le numéro de Nabil */}
        <CallButton phoneNumber="0760242095" />
      </View>

        <Text>{'\n'}Tarek l'alternant : M'appele pas je sers à rien.</Text>
    </View>
  );
};

export default PageQ3;
