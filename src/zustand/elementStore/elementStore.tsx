import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FormElement } from "../../types/formTypes";

interface ElementState {
  element: FormElement[];
  updateElement: (updatedElement: FormElement) => void;
  deleteElement: (deletedElement: string) => void;
  addElement: (newElement: FormElement) => void;
  clearElements: () => void;
}
export const useElementStore = create<ElementState>()(
  persist(
    (set, get) => ({
      element: [],
      updateElement: (updatedElement) => {
        console.log(updatedElement);
        const currentElements = get().element;
        console.log("currentElements:", currentElements);
        const indexFinder = get().element.findIndex(
          (el) => el.id === updatedElement.id
        );
        if (indexFinder === -1) {
          return;
        }
        const newElement = [...currentElements];
        newElement[indexFinder] = updatedElement;
        set({ element: newElement });
        console.log("all element:", newElement);
      },
      deleteElement: (deletedElement) => {
        const filteredElement = get().element.filter(
          (el) => el.id !== deletedElement
        );
        set({ element: filteredElement });
      },
      addElement: (newElement) => {
        const currentElement = get().element;
        set({ element: [...currentElement, newElement] });
      },
      clearElements: () => set({ element: [] }),
    }),
    {
      name: "element-storage",
    }
  )
);
