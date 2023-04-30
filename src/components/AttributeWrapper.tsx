import { Box, Heading, List } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AttributeWrapperProps {
  heading: string;
  children: ReactNode;
}

const AttributeWrapper = ({ heading, children }: AttributeWrapperProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="xl" color="gray.600">
        {heading}
      </Heading>
      <List as="dd" marginLeft={1}>
        {children}
      </List>
    </Box>
  );
};

export default AttributeWrapper;
