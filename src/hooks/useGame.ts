import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APICient from "../services/api-client";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => new APICient<Game>("games").get(slug),
    staleTime: ms("1 day"),
  });

export default useGame;
