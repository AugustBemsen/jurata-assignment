import React from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={AiOutlineSearch} />
        </InputLeftElement>
        <Input
          type="text"
          size="lg"
          variant="filled"
          placeholder={placeholder}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBox;
