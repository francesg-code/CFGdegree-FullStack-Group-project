import "./Button.css";
import styled from "styled-components";

function Button({ buttonText, buttonColor }) {
  const whenButtonPressed = () => {};

  const StyledButton = styled.button`
    background-color: ${buttonColor};
    border: 4px solid ${buttonColor};
    border-radius: 2px;
    color: #424242;
    display: block;
    margin: 0 auto;
    font-family: "Andale Mono";
    font-weight: bolder;
    font-size: 20px;
    padding: 20px;
    margin-top: 20px;
    text-transform: uppercase;
    transition: all 400ms ease-in-out;
  `;
  return (
    <>
      <StyledButton type="button" onClick={whenButtonPressed}>
        {buttonText}
      </StyledButton>
    </>
  );
}

export default Button;
