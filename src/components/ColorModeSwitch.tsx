import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
