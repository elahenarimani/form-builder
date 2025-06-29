import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ElementState } from "../../types/formTypes";



export const useElementStore = create<ElementState>()(
  persist(
    (set) => ({
      element: [],
    }),
    {
      name: "element-storage",
    }
  )
);