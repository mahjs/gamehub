import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (p: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error, isLoading } = usePlatforms();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);

  if (error) return null;
  if (isLoading)
    return (
      <Skeleton marginLeft={10} width="100px" height="40px" borderRadius={8} />
    );
  return (
    <Box marginLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {data?.results.map((p) => (
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
