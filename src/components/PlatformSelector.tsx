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
import useFindDataById from "../hooks/useFindData";
import useGameStore from "../store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatformId = useGameStore(
    (store) => store.gameQuery.platformId
  );
  const setPlatformId = useGameStore((store) => store.setPlatformId);
  const platform = useFindDataById(data.results, selectedPlatformId);

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
            <MenuItem onClick={() => setPlatformId(p.id)} key={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
