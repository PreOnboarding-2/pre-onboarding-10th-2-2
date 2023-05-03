import React from "react";
import useSearchInput from "../hooks/useSearchInput";
import { Section, Form, Input, Button } from "./SearchInput.style";

const SearchInput = () => {
  const { input, changeHandler, submitHandler } = useSearchInput();
  return (
    <Section>
      <Form onSubmit={submitHandler}>
        <Input onChange={changeHandler} value={input} placeholder="검색어를 입력해주세요." />
        <Button type="submit">검색</Button>
      </Form>
    </Section>
  );
};

export default SearchInput;
