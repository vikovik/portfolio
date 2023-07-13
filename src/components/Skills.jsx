import { styled } from "styled-components";
import PieChartComponent from "./PieChartComponent";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1 4em;
  height: 100%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4em;
  margin-top: 3.5em;
  gap: 0.3em;
  background: #6c1c9130;
  box-shadow: 10px 10px 20px #00000073;
  padding: 1em 2em;
  border-radius: 30px;

  @media only screen and (max-width: 992px) {
    flex: 1;
    margin: 0;
    padding: 1em;
    justify-content: center;
    align-items: center;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.9em;
  margin: 0.3em 0;
  text-shadow: 0px 5px 12px #d699e29b;

  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  margin: 0.5em 0;
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff00b3;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Left>
          <Title>What can I do?</Title>
          <List>
            <ListItem>
              I have more that 1 year of experience using <Emp>React.js</Emp>
            </ListItem>
            <ListItem>
              I have maintained and developed backend coded with{" "}
              <Emp>Express.js</Emp>
            </ListItem>
            <ListItem>
              As you may guess, I have a great knowlege of <Emp>JavaScript</Emp>
            </ListItem>
            <ListItem>
              I have a deep knowlege of such database systems as{" "}
              <Emp>MongoDB</Emp>, <Emp>Oracle SQL</Emp>, and{" "}
              <Emp>PostgreSQL</Emp>
            </ListItem>
            <ListItem>
              Some knowlege and experience with <Emp>C</Emp>, <Emp>C++</Emp>,
              and <Emp>Python</Emp>
            </ListItem>
          </List>
        </Left>
        <Right>
          <PieChartComponent />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Skills;
