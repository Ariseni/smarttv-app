import { Movie } from "@/components/MovieCard/MovieCard";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type FavoritesState = {
  favorites: Movie[];
  addFavorite: (item: Movie) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (item: Movie) => {
        const currentFavorites = get().favorites;
        const isAlreadyFavorite = currentFavorites.some(
          (fav) => fav.id === item.id,
        );

        if (!isAlreadyFavorite) {
          set({ favorites: [...currentFavorites, item] });
        }
      },
      removeFavorite: (id: string) => {
        set({
          favorites: get().favorites.filter((fav) => fav.id !== id),
        });
      },
      isFavorite: (id: string) => {
        return get().favorites.some((fav) => fav.id === id);
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
