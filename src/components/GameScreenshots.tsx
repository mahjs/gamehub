import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenShots from "../hooks/useGameScreenshots";

interface GameScreenShotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenShotsProps) => {
  const { data, isLoading, error } = useGameScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      marginY={5}
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      gap={4}
    >
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
