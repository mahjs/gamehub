import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { ONEDAY } from "./useGenres";
import APICient from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: new APICient<Platform>(`/platforms/lists/parents`).getAll,

    staleTime: ONEDAY,
    initialData: {
      count: platforms.length,
      next: null,
      results: platforms,
    },
  });

export default usePlatforms;
