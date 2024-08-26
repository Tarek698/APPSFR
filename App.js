// App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthenticationScreen from './components/Identification';
import AcceuilScreen from './components/accueil';
import RechercheStack from './components/RechercheStack';
import DisplayAnImage from './components/switch';
import Map from './components/Map';

const Tab = createBottomTabNavigator();

const App = ({ route }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      try {
        const isAuthenticated = await AsyncStorage.getItem('authenticated');
        setAuthenticated(isAuthenticated === 'true');
      } catch (error) {
        console.error('Error checking authentication status:', error.message);
      }
    };
  
    if (route) {
      checkAuthenticationStatus();
    }
  }, [route]);

  if (authenticated === null) {
    // Peut-être afficher un écran de chargement ici
    return null;
  }
  const handleLogout = () => {
    console.log('AppContent handleLogout');
    try {
      setAuthenticated(false);
      navigation.navigate('Authentication');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error.message);
    }
  };

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="Acceuil" 
          component={AcceuilScreen}
          initialParams={{ handleLogout }} />
          <Tab.Screen name="Recherche"
           component={RechercheStack}
            options={{ headerShown: false }} />
          <Tab.Screen name="Image" component={DisplayAnImage} />
          {/* Ajoutez d'autres onglets au besoin */}
        </Tab.Navigator>
      ) : (
        <AuthenticationScreen onLogin={(handleLogout) => setAuthenticated(true)} />
      )}
    </NavigationContainer>
  );
};


export default App; 