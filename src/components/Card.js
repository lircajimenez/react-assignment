import { Fragment, useState } from "react";
import styled from "styled-components";

const Card = ({ student }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <Container>
        <StudentInfo>
          <Avatar>
            <img
              src={student.pic}
              alt={`${student.firstName + student.lastName}`}
            />
          </Avatar>
          <CardInfo>
            <Title>
              {student.firstName} {student.lastName}
            </Title>
            <InfoContainer>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>
                Average:{" "}
                {student.grades.reduce((sum, curr) => sum + Number(curr), 0) /
                  student.grades.length}
                %
              </p>
            </InfoContainer>
            {isExpanded ? (
              <GradesContainer>
                {student.grades.map((grade, index) => {
                  return (
                    <Grade key={index}>
                      Test {index + 1}: {grade}%
                    </Grade>
                  );
                })}
              </GradesContainer>
            ) : null}
          </CardInfo>
        </StudentInfo>
        {isExpanded ? (
          <Button onClick={() => setIsExpanded(false)}>-</Button>
        ) : (
          <Button onClick={() => setIsExpanded(true)}>+</Button>
        )}
      </Container>
    </Fragment>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary-color);
  padding: 15px;
`;
const StudentInfo = styled.div`
  display: flex;
  width: 75%;
`;
const Avatar = styled.div`
  img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    border: 2px solid var(--primary-color);
  }
`;
const CardInfo = styled.div`
  margin-left: 2em;
`;
const Title = styled.h2`
  color: black;
  font-weight: 650;
  font-size: 30px;
  text-transform: uppercase;
`;
const InfoContainer = styled.div`
  margin-left: 1.5em;
`;
const Button = styled.button`
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-size: 90px;
  font-weight: 600;
  color: #a9a9aa;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 2px solid red;

  &:hover {
    color: black;
  }
`;
const GradesContainer = styled.ul`
  margin-left: 1.5em;
  margin-top: 14px;
`;
const Grade = styled.li``;

export default Card;
