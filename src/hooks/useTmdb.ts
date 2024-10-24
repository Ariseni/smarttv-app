import { Movie } from "@/components/MovieCard/MovieCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import axios from "axios";

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
    const res = await axios.get("/api/discover", {
      params: { page: pageParam, ...filterParams, url },
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
      return undefined; // No more pages
    },
    getPreviousPageParam: (lastPage) => {
      if (lastPage.page > 1) {
        return lastPage.page - 1;
      }
      return undefined; // No more pages
    },
  });
};

export const useGenres = (list: "movie" | "tv") => {
  const fetchGenres = async () => {
    const response = await axios.get("/api/genres", {
      params: {
        url: `https://api.themoviedb.org/3/genre/${list}/list?language=en`,
      },
    });
    return response.data.genres as { id: number; name: string }[];
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: Infinity,
  });
};

export const useDetails = (id: string) => {
  const fetchDetails = async () => {
    const response = await axios.get(`/api/details`, {
      params: {
        id,
      },
    });
    return response.data as Details;
  };

  return useQuery({
    queryKey: ["details", id],
    queryFn: fetchDetails,
    staleTime: Infinity,
  });
};

type Details = Movie & {
  videos: {
    results: {
      key: string;
      site: string;
    }[];
  };
};
