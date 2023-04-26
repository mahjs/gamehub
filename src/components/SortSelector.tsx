import {
  Menu,
  Box,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SORTORDERS = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-release", label: "Release date" },
  { value: "-metacritic", label: "Popularit" },
  { value: "-rating", label: "Average rating" },
];

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
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
              onClick={() => onSelectSortOrder(sort.value)}
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
