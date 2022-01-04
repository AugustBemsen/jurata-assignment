import React, { useState } from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

const SearchBox = ({ className, placeholder }) => {
  const router = useRouter();

  // input field state
  const q = router.query.q;
  const [query, setQuery] = useState(q);

  const submitForm = (e) => {
    e.preventDefault();

    if (query) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form className={className} onSubmit={submitForm}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={AiOutlineSearch} />
        </InputLeftElement>
        <Input
          type="text"
          size="lg"
          variant="filled"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
