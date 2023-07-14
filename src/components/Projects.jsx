import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 992px) {
    height: 170vh;
  }

  @media only screen and (max-width: 768px) {
    height: 140vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 4em 1em;
  height: 100%;

  @media only screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 1em 0;
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
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  gap: 3em;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  background: #6c1c9130;
  border-radius: 30px;
  width: 300px;
  height: fit-content;
  box-shadow: 10px 10px 20px #00000073;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: fit-content;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 12em;
  object-fit: cover;
  border-radius: 30px;

  @media only screen and (max-width: 768px) {
    height: 8em;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0;
  color: #ff00b3;
  letter-spacing: 0.07em;
  font-size: 1.5em;

  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Description = styled.p`
  font-size: 1.1em;

  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
    margin: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Projects</Title>
        <ProjectsWrapper>
          <Link href="https://e-commerce-ten-jet.vercel.app/" target="_blank">
            <ProjectContainer>
              <Img src="/assets/rammshop.PNG" />
              <ProjectTitle>E-commerce App</ProjectTitle>
              <Description>
                A Fullstack E-commerce App built with React, Redux, Express.js,
                JWT, MongoDB, and styled-components.
              </Description>
            </ProjectContainer>
          </Link>
          <Link
            href="https://vikaavrora.wixsite.com/ukranian-resistance"
            target="_blank"
          >
            <ProjectContainer>
              <Img src="/assets/ur.PNG" />
              <ProjectTitle>Ukrainian Resistance</ProjectTitle>
              <Description>
                A website for a non-profit organization Ukrainian Resistance
                Toronto. Designed and developed using Wix website builder.
              </Description>
            </ProjectContainer>
          </Link>
        </ProjectsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Projects;
