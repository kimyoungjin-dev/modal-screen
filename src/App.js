import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  return (
    <Container>
      <Button onClick={toggleModal}>Show Modal!</Button>
    </Container>
  );
};

export default App;
