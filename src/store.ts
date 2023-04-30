import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameHumbStore {
  gameQuery: GameQuery;
  setOrder: (order: string) => void;
  setSearchText: (text: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
}

const useGameStore = create<GameHumbStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setOrder: (sortOrder) =>
    set((store) => ({ ...store.gameQuery, gameQuery: { sortOrder } })),

  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Game Store", useGameStore);
}

export default useGameStore;
