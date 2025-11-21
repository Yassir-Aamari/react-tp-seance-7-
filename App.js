import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, FlatList, Alert } from 'react-native';

const products = [
  { id: '1', title: 'Baskets Vintage', price: '89,99 €', image: require('./assets/basket.png') },
  { id: '2', title: 'Chaussures Urban', price: '69,99 €', image: require('./assets/basket3.png') },
  { id: '3', title: 'Nike Air Max', price: '129,99 €', image: require('./assets/basket2.png') },

];

export default function App() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => Alert.alert(item.title, item.price)}>
      <Image 
        source={item.image}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <Text style={styles.productDescription}>Produit de haute qualité.</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Achat", "Vous avez choisi : " + item.title)}>
          <Text style={styles.buttonText}>Acheter maintenant</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  productImage: {
    width: '100%',
    height: (Dimensions.get('window').width * 0.85) * 0.75,
  },
  contentContainer: {
    padding: 15,
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#27ae60',
  },
  productDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
