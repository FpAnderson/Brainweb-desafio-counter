import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCard, changeStatusCard } from '../store/actions/config';
import Card from './componentes/card';


export default function App() {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.config.cardList, [counters]);
  const card = useSelector(state => state.config.card);

  function selectCard(item) {
    dispatch(selectedCard(item));
    dispatch(changeStatusCard(false));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>Counter</Text>
      </View>
      <FlatList
        style={styles.list}
        data={counters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectCard(item)}>
            <Card item={item} selected={card.id === item.id} />
          </TouchableOpacity >
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
