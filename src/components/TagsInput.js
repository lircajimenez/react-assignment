import React, { useState } from "react";
import styled from "styled-components";

const TagsInput = () => {
  const [tag, setTag] = useState([]);

  const addTag = (ev) => {
    if (ev.key === "Enter") {
      setTag([...tag, ev.target.value]);
      ev.target.value = "";
    }
  };

  //   console.log("TAGS", tag);

  return (
    <Wrapper>
      <TagsContainer>
        {tag.map((t, index) => (
          <Tag key={index}>{t}</Tag>
        ))}
      </TagsContainer>
      <Input type="text" placeholder="Add a tag" onKeyPress={addTag} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 6px;
  margin-left: 1.5em;
`;
const TagsContainer = styled.div`
  display: flex;
`;
const Tag = styled.span`
  padding: 6px;
  margin-left: 6px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #e0e0e0;
`;
const Input = styled.input`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  /* width: 40px; */
  padding: 6px;
  border: none;
  border-bottom: 1px solid var(--primary-color);

  :focus {
    outline: none;
    border-color: black;
  }
`;

export default TagsInput;
