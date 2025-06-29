import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FormElement } from "../../types/formTypes";

interface ElementState {
  elementt: FormElement[];

  updateElement: (updatedElement: FormElement) => void;
  deleteElement: (deletedElement: string) => void;
  addElement: (newElement: FormElement) => void;
  clearElements: () => void;
}
export const useElementStore = create<ElementState>()(
  persist(
    (set, get) => ({
      elementt: [],

      updateElement: (updatedElement) => {
        console.log(updatedElement);
        const currentElements = get().elementt;
        console.log("currentElements:", currentElements);
        const indexFinder = get().elementt.findIndex(
          (el) => el.id === updatedElement.id
        );
        if (indexFinder === -1) {
          return;
        }
        const newElement = [...currentElements];
        newElement[indexFinder] = updatedElement;
        set({ elementt: newElement });
        console.log("all element:", newElement);
      },
      deleteElement: (deletedElement) => {
        const filteredElement = get().elementt.filter(
          (el) => el.id !== deletedElement
        );
        set({ elementt: filteredElement });
      },
      addElement: (newElement) => {
        const currentElement = get().elementt;
        set({ elementt: [...currentElement, newElement] });
      },
      clearElements: () => set({ elementt: [] }),
    }),
    {
      name: "element-storage",
    }
  )
);
