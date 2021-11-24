import { useState, createContext } from "react";

export const TagsContext = createContext(null);

export const TagsProvider = ({ children }) => {
  const [searchTags, setSearchTags] = useState([]);

  return (
    <TagsContext.Provider value={{ searchTags, setSearchTags }}>
      {children}
    </TagsContext.Provider>
  );
};
