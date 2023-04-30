import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import ms from "ms";

const useGameTrailer = (slug: number) =>
  useQuery({
    queryKey: ["trailers", slug],
    queryFn: new APICient<GameTrailer>(`games/${slug}/movies`).getAll,
    staleTime: ms("1 day"),
  });

export default useGameTrailer;
