import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthenticationScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      try {
        const isAuthenticated = await AsyncStorage.getItem('authenticated');
        setAuthenticated(isAuthenticated === 'true');
      } catch (error) {
        console.error('Error checking authentication status:', error.message);
      }
    };

    checkAuthenticationStatus();
  }, []);

  const handleLogout = async () => {
    console.log('Logout button pressed');
    try {
      await AsyncStorage.removeItem('authenticated');
      setAuthenticated(false);
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  const handleLogin = async () => {
    console.log('Bouton de connexion cliqué');
    try {
      if (!AsyncStorage) {
        console.error('AsyncStorage is not defined');
        return;
      }

      const predefinedAccounts = [
        { username: 'Tarek', password: 'projet' },
        { username: 'user2', password: 'pass2' },
      ];

      const matchedAccount = predefinedAccounts.find(
        (account) => account.username === username && account.password === password
      );

      if (matchedAccount) {
        await AsyncStorage.setItem('authenticated', 'true');
        setAuthenticated(true);
        console.log('handleLogout:', handleLogout);
        navigation.navigate('AcceuilScreen', { handleLogout });
        setUsername(matchedAccount.username);
        onLogin();
      } else {
        alert('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {authenticated && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Se connecter" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: 200,
  },
});

export default AuthenticationScreen;



