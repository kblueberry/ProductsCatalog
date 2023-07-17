import { ActionTypes } from "./StateEnums";

export interface Action {
  type: ActionTypes;
  payload: {
    value: string;
    collection: { name: string; content: Array<string> };
  };
}
