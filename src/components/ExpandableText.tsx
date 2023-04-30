import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  length: number;
  children: string;
}

const ExpandableText = ({ length, children }: ExpandableTextProps) => {
  if (!children) return null;
  if (children.length < length) return <Text>{children}</Text>;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Box>
      <Text>
        {expanded ? children : children.slice(0, length) + "..."}
        <Button
          colorScheme="yellow"
          onClick={() => setExpanded((open) => !open)}
          marginLeft={2}
          fontWeight="bold"
          size="xs"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
