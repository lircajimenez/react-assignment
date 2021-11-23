import { useState } from "react";
import styled from "styled-components";

const Search = ({ onSearch }) => {
  const [nameEntered, setNameEntered] = useState("");

  const onChange = (ev) => {
    const { value } = ev.target;
    setNameEntered(value);
    onSearch(value);
  };

  // console.log("letter typed", nameEntered);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search by name"
        value={nameEntered}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
`;
const Input = styled.input`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #a7a5a7;
  width: 95%;
  padding: 8px;
  border: none;
  border-bottom: 4px solid var(--primary-color);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a7a5a7;
  }
  :-ms-input-placeholder {
    color: #a7a5a7;
  }
`;

export default Search;
