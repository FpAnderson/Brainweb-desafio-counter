import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './componentes/card';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCard, updateCardList, changeStatusCard } from '../store/actions/config';

export default function Config() {
  const dispatch = useDispatch();
  let card = useSelector(state => state.config.card, [card]);
  const cardList = useSelector(state => state.config.cardList, [cardList]);
  let cardDisable = useSelector(state => state.config.cardDisable, [cardDisable]);

  function changeCounter(counter) {
    card.counter = counter;
    dispatch(selectedCard(card));
    updateCards();
  }

  function updateCards() {
    const index = cardList.findIndex(c => c.id === card.id);
    cardList[index] = card;
    dispatch(updateCardList(cardList));
  }

  function removeCard() {
    card.counter = 0;
    cardDisable = true;
    dispatch(changeStatusCard(cardDisable));

    const removeIndex = cardList.findIndex(c => c.id === card.id);
    if (removeIndex !== -1) {
      cardList.splice(removeIndex, 1);
      dispatch(updateCardList(cardList));
    }
  }

  function addNewCard() {
    let newCard = {
      id: 1,
      title: `Contador 1`,
      counter: 0,
    };

    if (cardList.length > 0) {
      const lastCard = cardList[cardList.length - 1];
      newCard = {
        id: lastCard.id + 1,
        title: `Contador ${lastCard.id + 1}`,
        counter: 0,
      };
    }

    card = newCard;
    cardDisable = false;

    dispatch(changeStatusCard(cardDisable));
    dispatch(selectedCard(card));
    cardList.push(newCard);
    dispatch(updateCardList(cardList));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>Configurações</Text>
      </View>

      <Card item={card} selected={!cardDisable} disableCard={cardDisable} />

      <View style={styles.control} opacity={cardDisable ? 0.5 : 1}>
        <TouchableOpacity style={styles.counterButtons}
          onPress={() => changeCounter(card && card.counter - 1)}
          disabled={cardDisable} >
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterNumber}>{card && card.counter}</Text>
        <TouchableOpacity style={styles.counterButtons}
          onPress={() => changeCounter(card && card.counter + 1)}
          disabled={cardDisable} >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerCard}>
        <Text style={styles.dividerCardTitle} >Contador</Text>
      </View>

      <View style={styles.containerConfigButtons} >
        <TouchableOpacity style={styles.buttonConfig} onPress={() => addNewCard()}>
          <Icon style={styles.buttonIcon} name="plus-circle" size={30} color="#3FC500" />
          <Text style={styles.buttonText} >Adiconar novo contador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfig} onPress={() => removeCard()}>
          <Icon style={styles.buttonIcon} name="times-circle" size={30} color="#3FC500" />
          <Text style={styles.buttonText}>Remover Contador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonConfig} onPress={() => changeCounter(card.counter - card.counter)} >
          <Icon style={styles.buttonIcon} name="refresh" size={30} color="#3FC500" />
          <Text style={styles.buttonText} >Resetar Contador</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  dividerCard: {
    marginTop: 10,
    backgroundColor: '#99DD33',
    width: '100%',
    height: 50,
    justifyContent: 'center'
  },
  control: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    width: '30%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    position: 'absolute',
  },
  buttonText: {
    marginLeft: 10,
    width: '100%',
    textAlign: 'center',
    color: '#3FC500',
    fontWeight: 'bold',
    fontSize: 25,
  },
  counterButtons: {
    color: '#fff',
    width: 50,
    height: 50,
    backgroundColor: '#3FC500',
    borderRadius: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff'
  },
  counterButtonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 'bold',
  },
  counterNumber: {
    color: "#000",
    fontSize: 25,
    margin: 20,
    fontWeight: 'bold',
  },
  containerConfigButtons: {
    width: '100%',
  },
  buttonConfig: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#000'
  },
  dividerCardTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  pageHeader: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  pageTitle: {
    color: '#3FC500',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    width: "90%",
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
  cardTitle: {
    color: '#fff',
  },
  counterSubtitle: {
    fontSize: 20,
    color: '#fff',
  },
  counterText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 60,
    color: '#fff',
    width: '100%',
    marginBottom: 15
  },
});
