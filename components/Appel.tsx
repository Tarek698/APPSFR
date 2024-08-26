// Appel.tsx
//Les fichiers avec l'extension .tsx sont généralement utilisés lorsque
// vous avez des composants React qui incluent du JSX et nécessitent une vérification
// de type par TypeScript. Cela permet au compilateur TypeScript de comprendre la 
// structure du code JSX et de détecter d'éventuelles erreurs de typage avant l'exécution du code.
import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

const CallButton = ({ phoneNumber }) => {
  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity onPress={handleCall}>
      <Text style={{ color: 'blue'}}>{'\n'} {phoneNumber}</Text>
    </TouchableOpacity>
  );
};

export default CallButton;
