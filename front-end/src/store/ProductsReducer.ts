import { ActionTypes } from "./dto/StateEnums";
import { ProductsState } from "./dto/ProductsState";
import { Action } from "./dto/Action";

const initialState: ProductsState = {
  wishlistItems: [],
  cartItems: [],
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        [action.payload.collection.name]: [
          ...action.payload.collection.content,
          action.payload.value,
        ],
      };
    case ActionTypes.Remove:
      const index = action.payload.collection.content.indexOf(
          action.payload.value
        ),
        sliced1 = [...action.payload.collection.content].slice(0, index),
        sliced2 =
          index <= action.payload.collection.content.length - 1
            ? [...action.payload.collection.content].slice(
                index + 1,
                action.payload.collection.content.length
              )
            : [];
      return {
        ...state,
        [action.payload.collection.name]: [...sliced1, ...sliced2],
      };
    default:
      return state;
  }
};
