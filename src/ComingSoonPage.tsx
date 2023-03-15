import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

interface Props {
  apiUrl: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Description = styled.p`
  width: 500px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 6rem;
  /* font-spacing */
`;

const Input = styled.input`
  padding: 1rem;
  border: 0.1rem solid #007aff;
  border-radius: 0.5rem;
  margin: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Button = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff69b4;
  }
`;

const ComingSoonPage: React.FC<Props> = ({ apiUrl }) => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert(`Thanks for signing up with email: ${email}`);
      setEmail("");
    } else {
      alert(`Failed to save email: ${email}`);
      setEmail("");
    }
  };

  return (
    <Container>
      <Heading>TryveWorks</Heading>
      <Description>
        Tryve is an online platform that connects people looking for help with
        household tasks to local service providers who can assist with a variety
        of needs. Whether you need help cleaning your home, organizing your
        space, or running errands, Tryve has you covered.
      </Description>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email to stay updated"
          value={email}
          onChange={handleEmailChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>

      <div style={{ paddingTop: "1.5rem" }}>
        <a href="https://www.facebook.com/tryveworks">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/tryveworks">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com/tryveworks">
          <FaTwitter />
        </a>
      </div>
    </Container>
  );
};

export default ComingSoonPage;
