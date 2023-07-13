import { styled } from "styled-components";
import { HorizontalRule } from "@mui/icons-material";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 3em;
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
    padding: 2em 0 0;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4em;
  gap: 0.3em;
  background: #6c1c9130;
  padding: 2em;
  border-radius: 30px;
  box-shadow: 10px 10px 20px #00000073;

  @media only screen and (max-width: 992px) {
    flex: 1;
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0.3em 0;
  text-shadow: 0px 5px 12px #d699e29b;

  @media only screen and (max-width: 992px) {
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

const Description = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;

  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff00b3;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 23em;
  object-fit: contain;
  position: absolute;
  top: -4em;
  right: 0;
  left: 4em;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  border-radius: 50%;
  filter: drop-shadow(0px 10px 20px #edc3f5ea);

  @keyframes animate {
    100% {
      transform: translateY(1.1em);
    }
  }
`;

const ProfileImg = styled.img`
  display: none;

  @media only screen and (max-width: 992px) {
    display: flex;
    align-self: center;
    width: 10em;
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0px 10px 20px #edc3f5ea);
    margin-bottom: 1em;
  }
`;

const Hero = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <ProfileImg src="/assets/Original.png" />
          <Title>
            Hi! I&apos;m Viktoriia. <br />
          </Title>
          <Subtitle>
            <HorizontalRule style={{ color: "white", width: "1.5em" }} />
            Welcome to my Portfolio!
          </Subtitle>
          <Description>
            It was made with <Emp>React.js</Emp>, <Emp>Three.js</Emp>, and{" "}
            <Emp>styled-components</Emp>.
          </Description>
          <Subtitle>
            <HorizontalRule style={{ color: "white", width: "1.5em" }} />
            What I Like?
          </Subtitle>
          <Description>
            I enjoy creating delightful, pixel-perfect, seamless digital
            experience.
            <br />
            At my free time, I like drawing, plaing piano and guitar, and
            skating!
          </Description>
        </Left>
        <Right>
          <Canvas style={{ height: "95vh" }}>
            <OrbitControls enableZoom={false} autorotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 1]} />
            <Sphere args={[2.4, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#47045c"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="/assets/Original.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
