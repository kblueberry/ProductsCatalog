import { ActionTypes } from "./dto/StateEnums";

export const actionType = (list: Array<string>, itemId: string) => {
  return list.includes(itemId) ? ActionTypes.Remove : ActionTypes.Add;
};
