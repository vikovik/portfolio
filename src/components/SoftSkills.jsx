import { styled } from "styled-components";
import RadarChartComponent from "./RadarChartComponent";

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
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 7em 0 0;
  }
`;

const Left = styled.div`
  flex: 2;
  margin-top: 2em;

  @media only screen and (max-width: 1200px) {
    flex: 1.5;
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 4em;
  margin-top: 3.5em;
  gap: 0.3em;
  background: #6c1c9130;
  box-shadow: 10px 10px 20px #00000073;
  padding: 1em 2em;
  border-radius: 30px;

  @media only screen and (max-width: 992px) {
    margin: 0;
    padding: 0 1em;
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
    display: flex;
    align-self: center;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: square;

  @media only screen and (max-width: 768px) {
    font-size: 1em;
    margin: 0;
  }
`;

const ListItem = styled.li`
  font-size: 1.1em;
  margin: 0.5em 0;
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff00b3;
`;

const SoftSkills = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <RadarChartComponent />
        </Left>
        <Right>
          <Title>My soft skills</Title>
          <List>
            <ListItem>
              I have exellent <Emp>communication</Emp> skills
            </ListItem>
            <ListItem>
              I am able to work <Emp>independently</Emp> or as a part of a{" "}
              <Emp>team</Emp>
            </ListItem>
            <ListItem>
              I have a <Emp>problem-solving</Emp> mindset and attention to
              details
            </ListItem>
            <ListItem>
              I am able to work under pressure and with strict deadlines, thanks
              to well developed <Emp>time management</Emp>
            </ListItem>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SoftSkills;
