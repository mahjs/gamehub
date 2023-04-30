import { SimpleGrid, Text } from "@chakra-ui/react";
import AttributeWrapper from "./AttributeWrapper";
import CriticScore from "./CriticScore";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid
      as="dl"
      columns={{
        sm: 1,
        md: 2,
      }}
    >
      <AttributeWrapper heading="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </AttributeWrapper>
      <AttributeWrapper heading="Metacritic">
        <CriticScore score={game.metacritic} />
      </AttributeWrapper>
      <AttributeWrapper heading="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </AttributeWrapper>
      <AttributeWrapper heading="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </AttributeWrapper>
    </SimpleGrid>
  );
};

export default GameAttributes;
