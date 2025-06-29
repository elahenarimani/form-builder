import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FinalForm, FormElement } from "../../types/formTypes";
interface ElementState {
  finalForm: FinalForm[];
  setFinalForm: (forms: FinalForm[]) => void;
  log: () => void;
  finalFormName: string;
  element: FormElement[];
  addForm: (newForm: FinalForm) => void;
}
//  const [finalForm, setFinalForm] = useState<FinalForm[]>
export const useFinalFormStoreStore = create<ElementState>()(
  persist(
    (set, get) => ({
      finalForm: [],
      finalFormName: "",
      element: [],
      setFinalForm: (forms) => set({ finalForm: forms }),
      log: () => {
        console.log(`current number is ${get().finalForm}`);
      },
      addForm: (newForm) => {
        const currentForm = get().finalForm;
        set({ finalForm: [...currentForm, newForm] });
      },
    }),
    {
      name: "final-form-storage",
    }
  )
);
