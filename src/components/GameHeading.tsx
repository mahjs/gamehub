import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useFindDataById from "../hooks/useFindData";
import useGameStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const platformId = useGameStore((store) => store.gameQuery.platformId);
  const genreId = useGameStore((store) => store.gameQuery.genreId);
  const genre = useFindDataById(genres.results, genreId);

  const { data: platforms } = usePlatforms();
  const platform = useFindDataById(platforms.results, platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginLeft={10} marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
