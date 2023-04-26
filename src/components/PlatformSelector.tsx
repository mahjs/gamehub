import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface PlatformSelectorProps {
  onSelectPlatform: (p: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data: platforms, error, loading } = usePlatforms();

  if (error) return null;
  if (loading)
    return (
      <Skeleton marginLeft={10} width="100px" height="40px" borderRadius={8} />
    );
  return (
    <Box marginLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {platforms.map((p) => (
            <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
