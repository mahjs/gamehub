import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner marginLeft="50%" marginTop="10%" />;
  if (error || !data) throw Error();

  return (
    <Box padding={5}>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
