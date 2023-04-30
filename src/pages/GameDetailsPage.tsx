import { useParams } from "react-router-dom";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner marginLeft="50%" marginTop="10%" />;
  if (error || !data) throw Error();

  return (
    <Box padding={5}>
      <Heading>{data.name}</Heading>
      <ExpandableText length={300}>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </Box>
  );
};

export default GameDetailsPage;
