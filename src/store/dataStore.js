import { create } from "zustand";

export const useDataStore = create((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
