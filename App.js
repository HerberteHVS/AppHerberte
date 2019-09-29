/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Navbar, Container} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View >
      <View style={styles.euquemando}>
        <Text style={styles.euquemandoText}>E.Drink</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.productTitle}>Produtos</Text>
        <Text style={styles.productDescription}>Cerveja</Text>
        <Text style={styles.productDescription}>Refrigerante</Text>
        <Text style={styles.productDescription}>Sucos</Text>
        <Text style={styles.productDescription}>Água</Text>
      </View>
      <View style={styles.rodape}>
        <Text style={styles.rodapeText}>Busca Avançada</Text>
        <Text style={styles.rodapeText}>Sair</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E2D3E',
    paddingBottom: 20,
    marginBottom: 0.3,
  },
  list: {
    padding: 20,
  },
  euquemando: {
    margin: 0,
    padding: 0,
    paddingLeft: 50,
    height: 30,
    backgroundColor: '#263445',
    paddingBottom: 150,
  },
  euquemandoText: {
    marginTop: 50,
    color: '#FFF',
    fontSize: 45,
    fontFamily: 'Open Sans',
  },
  productContainer: {
    backgroundColor: '#1E2D3E',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    marginLeft: 50,
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF',
  },
  productDescription: {
    marginLeft: 50,
    paddingTop: 25,
    fontSize: 25,
    color: '#FFF',
    marginTop: 5,
    lineHeight: 24,
  },
  rodape: {
    paddingLeft: 50,
    paddingTop: 50,
    backgroundColor: '#1E2D3E',
    paddingBottom: 150,

  },
  rodapeText: {
    fontSize: 25,
    color: '#FFF',
    paddingBottom: 35,
  },

});

export default App;
