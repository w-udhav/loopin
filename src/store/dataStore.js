import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const getToday = () => new Date().toISOString().split("T")[0];

export const useDataStore = create((set) => ({
  selectedDate: "today",
  dataByDate: {},
  loading: false,
  error: null,

  setSelectedDate: (date) => set({ selectedDate: date }),

  fetchData: async (date) => {
    set({ loading: true, error: null });
    try {
      const actualDate = date === "today" ? getToday() : date;
      if (get().dataByDate[actualDate]) {
        set({ loading: false, error: null });
        return;
      }
      const res = await axiosInstance.get(`/data/${actualDate}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = res.data;
      set((state) => ({
        dataByDate: {
          ...state.dataByDate,
          [actualDate]: data,
        },
        loading: false,
        error: null,
      }));
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));
