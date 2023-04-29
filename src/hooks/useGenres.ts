import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import genres from "../data/genres";

export const ONEDAY = 24 * 60 * 60 * 1000;

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: new APICient<Genre>("genres").getAll,
    staleTime: ONEDAY,
    initialData: {
      count: genres.length,
      next: null,
      results: genres,
    },
  });

export default useGenres;
