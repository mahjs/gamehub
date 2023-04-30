import { useQuery } from "@tanstack/react-query";
import APICient from "../services/api-client";
import ms from "ms";

const useGameScreenShots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: new APICient<GameScreenshot>(`games/${gameId}/screenshots`).getAll,
    staleTime: ms("1 day"),
  });

export default useGameScreenShots;
