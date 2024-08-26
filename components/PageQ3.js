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
        <CallButton phoneNumber="0100000000" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros du BOT:</Text>
        {/* Bouton d'appel pour le numéro du BOT */}
        <CallButton phoneNumber="0100000000" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros Sfr Echec:</Text>
        {/* Bouton d'appel pour le numéro Sfr Echec */}
        <CallButton phoneNumber="0100000000" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros CA:</Text>
        {/* Bouton d'appel pour le numéro CA */}
        <CallButton phoneNumber="0100000000" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Numéros Plp:</Text>
        {/* Bouton d'appel pour le numéro Plp */}
        <CallButton phoneNumber="0100000000" />
      </View>

      <View>
        <Text style={{fontWeight: 'bold'}}>{'\n'}Les numéros d'ERT :</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Contact ERT 1:</Text>
        {/* Bouton d'appel pour le numéro de Contact ERT 1 */}
        <CallButton phoneNumber="0100000000" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Contact ERT 2:</Text>
        {/* Bouton d'appel pour le numéro de Contact ERT 2 */}
        <CallButton phoneNumber="0100000000" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Contact ERT 3:</Text>
        {/* Bouton d'appel pour le numéro de Contact ERT 3 */}
        <CallButton phoneNumber="0100000000" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold'}}>{'\n'}Numéros de l'entreprise :</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>  
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Responsable 1 :</Text>
        {/* Bouton d'appel pour le numéro de responsable 1 */}
        <CallButton phoneNumber="0100000000" />
      </View>  

      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{textDecorationLine: 'underline'}}>{'\n'}Responsable 2 :</Text>
        {/* Bouton d'appel pour le numéro de responsable 2 */}
        <CallButton phoneNumber="0100000000" />
      </View>
    </View>
  );
};

export default PageQ3;
