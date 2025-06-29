import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FinalForm, FormElement } from "../../types/formTypes";
interface ElementState {
   finalForm: FinalForm[];
  setFinalForm: (forms: FinalForm[]) => void;
  log: () => void;
  finalFormName: string;
  element: FormElement[];
}
//  const [finalForm, setFinalForm] = useState<FinalForm[]>
export const useFinalFormStoreStore = create<ElementState>()(
  persist(
    (set, get) => ({
      finalForm: [],
      finalFormName: "",
      element: [],
      // addFormToTable:() => set((state => ({finalForm : }))) ,
      setFinalForm: (forms) => set({ finalForm: forms }),
      log: () => {
        console.log(`current number is ${get().finalForm}`);
      },
    }),
    {
      name: "element-storage",
    }
  )
);
