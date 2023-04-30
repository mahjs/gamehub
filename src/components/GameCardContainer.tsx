import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="all .15s ease-in"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
