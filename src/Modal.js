import React, { useCallback, useRef } from "react";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

const ModalContainer = styled.div`
  width: 890px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;
  font-size: 20px;
  background-color: gray;
  button {
    cursor: pointer;
    border: none;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
  }
`;

const CloseModal = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateX(0%)" : "translateX(-100%)",
  });

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Container ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalContainer>
              <Image
                bgImage={
                  "https://images.unsplash.com/photo-1589810633905-e0546e1a5620?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW9uc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                }
              />
              <Contents>
                <span>this is main title</span>
                <span>this is subtitle</span>
                <button>Join Modal!</button>
                <CloseModal onClick={() => setShowModal(false)} />
              </Contents>
            </ModalContainer>
          </animated.div>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
