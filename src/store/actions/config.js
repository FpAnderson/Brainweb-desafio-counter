import { useDispatch } from "react-redux";

export const ACTION_ADD_CARD = 'ADD_CARD';
export const ACTION_SELECTED_CARD = 'SELECT_CARD';
export const ACTION_UPDATE_CARD_LIST = 'UPDATE_CARD_LIST';
export const ACTION_RESET_CARD = 'RESET_CARD';
export const ACTION_DISABLE_CARD = 'DISABLE_CARD';

export const resetCard = () => ({
  type: ACTION_RESET_CARD,
});

export const addCard = card => ({
  type: ACTION_ADD_CARD,
  card: card,
});

export const changeStatusCard = cardDisable => ({
  type: ACTION_DISABLE_CARD,
  cardDisable: cardDisable,
});

export const selectedCard = card => ({
  type: ACTION_SELECTED_CARD,
  card
});

export const updateCardList = cardList => ({
  type: ACTION_UPDATE_CARD_LIST,
  cardList
});
