import { useElementStore } from "./elementStore/elementStore";
import { useFinalFormStoreStore } from "./finalFormStore/finalFormStore";
import {authStore} from "./authStore/authStore"

export const useCombinedStore = () => ({
  ...useElementStore(),
  ...useFinalFormStoreStore(),
  ...authStore(),
});
