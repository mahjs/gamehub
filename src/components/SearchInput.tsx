import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameStore((store) => store.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
