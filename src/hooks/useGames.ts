import { useInfiniteQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import ms from "ms";
import useGameStore from "../store";

const useGames = () => {
  const { gameQuery } = useGameStore();

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      new APICient<Game>("games").getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    staleTime: ms("1 day"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
