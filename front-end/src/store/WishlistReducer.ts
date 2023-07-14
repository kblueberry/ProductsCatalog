export type WishlistState = {
  wishlistItems: Array<string>;
};

const initialState: WishlistState = {
  wishlistItems: [],
};

export enum ActionTypes {
  Add = "ADD",
  Remove = "REMOVE",
}

type Action = { type: ActionTypes; payload: string };

export const wishlistReducer = (
  state: WishlistState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case ActionTypes.Remove:
      const index = state.wishlistItems.indexOf(action.payload),
        sliced1 = [...state.wishlistItems].slice(0, index),
        sliced2 =
          index <= state.wishlistItems.length - 1
            ? [...state.wishlistItems].slice(
                index + 1,
                state.wishlistItems.length
              )
            : [];
      return { ...state, wishlistItems: [...sliced1, ...sliced2] };
    default:
      return state;
  }
};
