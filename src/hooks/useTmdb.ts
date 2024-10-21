import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export type DiscoverFilterParams = {
  with_genres?: string;
};

export type SearchFilterParams = {
  query?: string;
};

type TmdbApiParams = {
  url: string;
  filterParams: DiscoverFilterParams | SearchFilterParams;
};

export const useDiscover = ({ url, filterParams }: TmdbApiParams) => {
  const fetchMovies = async ({ pageParam = 1 }) => {
    const res = await axios.get(url, {
      params: { page: pageParam, ...filterParams },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return res.data;
  };

  return useInfiniteQuery({
    queryKey: [JSON.stringify(filterParams)],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined; //no more pages
    },
    getPreviousPageParam: (lastPage) => {
      if (lastPage.page > 1) {
        return lastPage.page - 1;
      }
      return undefined; //no more pages
    },
  });
};

export const useGenres = (list: "movie" | "tv") => {
  const fetchGenres = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/${list}/list?language=en`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.genres as { id: number; name: string }[];
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: Infinity,
  });
};
