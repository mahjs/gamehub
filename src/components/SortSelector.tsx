import {
  Menu,
  Box,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../store";

const SORTORDERS = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-release", label: "Release date" },
  { value: "-metacritic", label: "Popularit" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = () => {
  const sortOrder = useGameStore((store) => store.gameQuery.sortOrder);
  const setOrder = useGameStore((store) => store.setOrder);
  const currentSortOrder = SORTORDERS.find((sort) => sort.value === sortOrder);
  return (
    <Box marginLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {SORTORDERS.map((sort) => (
            <MenuItem
              key={sort.value}
              value={sort.value}
              onClick={() => setOrder(sort.value)}
            >
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
