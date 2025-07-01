// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { FormElement, FinalForm } from "../types/formTypes";
// import {FormState} from "../types/formTypes"
// export const useFormStore = create<FormState>()(
//   persist(
//     (set, get) => ({
//       elements: [],
//       finalForm: [],
//       setElements: (els) => set({ elements: els }),
//       addFinalForm: (form) =>
//         set((state) => ({ finalForm: [...state.finalForm, form] })),
//       setFinalForm: (forms) => set({ finalForm: forms }),
//       num: 123,
//       increaseCounterNumber: () => set((state) => ({num: state.num +1})),
//       log:()=> {
//         console.log(`current number is ${get().num}`)
//       }
//     }),
//     {
//       name: "form-storage", // کلید ذخیره در localStorage
//     }
//   )
// );
import { useElementStore } from "./elementStore/elementStore";
import { useFinalFormStoreStore } from "./finalFormStore/finalFormStore";

export const useCombinedStore = () => ({
  ...useElementStore(),
  ...useFinalFormStoreStore(),
});
