import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useFindDataById from "../hooks/useFindData";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = useFindDataById(genres.results, gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = useFindDataById(platforms.results, gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginLeft={10} marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
