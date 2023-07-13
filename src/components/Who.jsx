import { HorizontalRule } from "@mui/icons-material";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Pc from "./Pc";

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
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 1em;
  }
`;

const Left = styled.div`
  flex: 3;

  @media only screen and (max-width: 1200px) {
    flex: 2;
    width: 80%;
    height: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 992px) {
    flex: 1;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.3em;
  margin-right: 4em;
  background: #6c1c9130;
  padding: 1.5em;
  border-radius: 30px;
  box-shadow: 10px 10px 20px #00000073;

  @media only screen and (max-width: 992px) {
    flex: 1;
    display: flex;
    margin: 0;
    justify-content: flex-end;
    align-self: flex-start;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0.3em 0;
  text-shadow: 0px 5px 12px #d699e29b;

  @media only screen and (max-width: 992px) {
    width: 100vw;
    display: flex;
    align-self: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const Subtitle = styled.h3`
  display: flex;
  align-items: center;
  color: #ff00b3;
  letter-spacing: 0.07em;
  margin: 0;
`;

const TitleText = styled.h2`
  font-size: 2.2em;
  margin: 0.5em 0;
  height: 2em;
  width: 100%;
  letter-spacing: 0.07em;
  color: transparent;
  -webkit-text-stroke: 1px #ffd3f2;
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Who = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const toRotate = [
    "Web Developer.",
    "Frontend Developer.",
    "Fullstack Developer.",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };
  return (
    <Container id="about">
      <Wrapper>
        <Left>
          <Canvas style={{ height: "90vh" }}>
            <OrbitControls enableZoom={false} />
            <Stage environment="city" intensity={0.5}>
              <Pc />
            </Stage>
          </Canvas>
        </Left>
        <Right>
          <Title>Who am I?</Title>
          <Subtitle>
            <HorizontalRule style={{ color: "white", width: "1.5em" }} />I am a:
          </Subtitle>
          <TitleText>{text}|</TitleText>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Who;
