import { Fragment, useEffect, useState, useRef } from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import styled from "styled-components";
import Search from "./components/Search";
import Card from "./components/Card";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const allStudentsRef = useRef([]);

  // fetch data from API
  useEffect(() => {
    const getStudents = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const data = await response.json();
      allStudentsRef.current = data.students;
      setStudents(data.students);
      setIsLoading(false);
    };

    getStudents();
  }, []);
  console.log("STUDENTS", students);

  // filter by student full name
  const onSearch = (value) => {
    const filterStudents = allStudentsRef.current.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });

    setStudents(filterStudents);
  };

  return (
    <Fragment>
      <GlobalStyles />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Search onSearch={onSearch} />
          {students.map((student) => (
            <Card student={student} key={student.id} />
          ))}
        </Container>
      )}
    </Fragment>
  );
};

const Container = styled.ul`
  background: white;
  width: 60vw;
  height: 80vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin-inline: auto;
  margin-top: 5em;
  border-radius: 8px;
  box-shadow: 2px 6px 15px -4px rgba(0, 0, 0, 0.61);
`;

export default App;
