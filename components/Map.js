import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 45.75, // Latitude de Lyon
          longitude: 4.85, // Longitude de Lyon
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="HERE" // Assurez-vous que le module supporte HERE Maps
        customMapStyle={[]}
        mapType="standard"
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsTraffic={true}
        apiKey="24V_TwtmQTAlr__76muR_9lW6WMMQyd03-BFDa5WHvw" // Votre clé API HERE Maps
      >
        {/* Vous pouvez ajouter des marqueurs ou d'autres composants ici */}
        <Marker
          coordinate={{ latitude: 45.75, longitude: 4.85 }} // Position de Lyon
          title="Lyon"
          description="Ville de Lyon"
        />
      </MapView>
    </View>
  );
};

export default Map;
