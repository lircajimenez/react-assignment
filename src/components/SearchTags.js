import { useState } from "react";
import styled from "styled-components";

const SearchTags = ({ onSearchTags, placeholder }) => {
  const [text, setText] = useState("");

  const onChange = (ev) => {
    const { value } = ev.target;
    setText(value);
    onSearchTags(value);
  };

  // console.log("letter typed", text);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-inline: 1em;
  margin-top: 6px;
`;
const Input = styled.input`
  font-family: "Raleway", sans-serif;
  font-size: 1.35rem;
  font-weight: 200;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid var(--primary-color);

  :focus {
    outline: none;
    border-color: black;
  }
`;

export default SearchTags;
