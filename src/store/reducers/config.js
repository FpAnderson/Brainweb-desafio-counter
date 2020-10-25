import {
  ACTION_ADD_CARD,
  ACTION_RESET_CARD,
  ACTION_SELECTED_CARD,
  ACTION_DISABLE_CARD,
  ACTION_UPDATE_CARD_LIST
} from "../actions/config";

const defaultState = {
  card: null,
  cardList: [],
  cardDisable: true,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_ADD_CARD:
      state.cardList.push(action.card);
      return {
        ...state,
        cardList: defaultState.cardList,
      };
    case ACTION_UPDATE_CARD_LIST:
      return {
        ...state,
        cardList: action.cardList,
      };
    case ACTION_SELECTED_CARD:
      return {
        ...state,
        card: action.card,
      };
    case ACTION_RESET_CARD:
      return {
        ...state,
        card: action.card,
      };
    case ACTION_DISABLE_CARD:
      return {
        ...state,
        cardDisable: action.cardDisable,
      };
    default:
      return state;
  }
};
