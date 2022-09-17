import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create()(
  devtools((set) => ({
    loading: true,
    user: null,
    updateUser: (by) => set((_) => ({ user: by })),
  }))
);

export default useStore;
