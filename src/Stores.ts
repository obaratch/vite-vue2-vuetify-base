import { Store } from "./utils/Store";

interface User {}

type GlobalState = {
  user: User;
};

export const Global = new Store<GlobalState>({
  user: undefined,
});
