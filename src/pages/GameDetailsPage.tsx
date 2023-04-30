import { useParams } from "react-router-dom";
import { Box, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner marginLeft="50%" marginTop="10%" />;
  if (error || !data) throw Error();

  return (
    <Box padding={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
      >
        <GridItem>
          <Heading>{data.name}</Heading>
          <ExpandableText length={300}>{data.description_raw}</ExpandableText>
          <GameAttributes game={data} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data.id} />
          <GameScreenshots gameId={data.id} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GameDetailsPage;
