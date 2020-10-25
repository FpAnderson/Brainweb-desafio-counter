import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card({ item, selected = true, disableCard }) {

  return (
    <LinearGradient
      colors={['#3FC500', '#9DCC62']}
      opacity={selected ? 1 : 0.5}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={styles.card}>
      {!disableCard ? (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle} >{item && item.title}</Text>
          <Text style={styles.counterSubtitle}>{"Contador:"}</Text>
          <Text style={styles.counterText}>{item && item.counter}</Text>
        </View>
      ) : (
          <View style={styles.cardDeletedContainer}>
            <Text style={styles.deleteText}>{"Adicione ou escolha um contador"}</Text>
          </View>
        )
      }
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    width: "95%",
    height: 200,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    margin: 10
  },
  cardContainer: {
    width: "100%",
    alignItems: 'center',
  },
  cardDeletedContainer: {
    width: "100%",
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 1,
    borderStyle: 'dotted',
  },
  cardTitle: {
    color: '#fff',
  },
  counterSubtitle: {
    fontSize: 20,
    color: '#fff',
  },
  counterText: {
    textAlign: 'center',
    fontSize: 60,
    color: '#fff',
    width: '100%',
    marginBottom: 15
  },
  deleteText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#777',
    width: '100%',
    marginBottom: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
