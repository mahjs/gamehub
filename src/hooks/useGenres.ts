import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: new APICient<Genre>("genres").getAll,
    staleTime: ms("1 day"),
    initialData: genres,
  });

export default useGenres;
