import React from "react";
import useRecommned from "../hooks/useRecommend";
import useSearchInput from "../hooks/useSearchInput";
import SearchIcon from "./common/SearchIcon";
import { Section, Form, Input, Button } from "./SearchInput.style";

const SearchInput = () => {
  const { input, changeHandler, submitHandler } = useSearchInput();
  const { keydownHandler } = useRecommned();

  return (
    <Section>
      <Form onSubmit={submitHandler}>
        <Input
          onChange={changeHandler}
          value={input}
          placeholder="검색어를 입력해주세요."
          onKeyDown={keydownHandler}
        />
        <Button type="submit">
          <SearchIcon color="#FFFFFF" size={24} />
        </Button>
      </Form>
    </Section>
  );
};

export default SearchInput;
