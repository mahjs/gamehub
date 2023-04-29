import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICient from "../services/api-client";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: new APICient<Platform>(`/platforms/lists/parents`).getAll,

    staleTime: ms("1 day"),
    initialData: platforms,
  });

export default usePlatforms;
