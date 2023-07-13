import { styled } from "styled-components";
import emailjs from "@emailjs/browser";
import MapChart from "./Map";
import { useRef, useState } from "react";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 992px) {
    height: 170vh;
    scroll-snap-align: start;
  }

  @media only screen and (max-width: 768px) {
    height: 120vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1 4em;

  @media only screen and (max-width: 992px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4em;

  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 70%;

  @media only screen and (max-width: 992px) {
    width: 60vw;
  }

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin-bottom: 0.3em;
  text-shadow: 0px 5px 12px #d699e29b;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const Input = styled.input`
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: lightgrey;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: lightgrey;
  font-size: 1em;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const ButtonSend = styled.button`
  padding: 0.7em;
  border: none;
  border-radius: 5px;
  background-color: #76008d;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: 500;
`;

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mokx38x",
        "template_uh4p89k",
        ref.current,
        "yXIfa3HxaG5RDVKZu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("true");
        },
        (error) => {
          console.log(error.text);
          setSuccess("false");
        }
      );
  };
  return (
    <Container id="contact">
      <Wrapper>
        <Left>
          <Form onSubmit={handleSubmit} ref={ref}>
            <Title>Get in Touch</Title>
            <Input placeholder="Your Name" name="name"></Input>
            <Input placeholder="Your Email" name="email"></Input>
            <TextArea
              placeholder="Write your message here..."
              rows={7}
              name="message"
            ></TextArea>
            <ButtonSend type="submit">Send</ButtonSend>
            {success && "Message sent successfully!"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
