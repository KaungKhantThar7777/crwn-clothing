import styled, { css } from "styled-components";

export const BtnContainer = styled.div`
  width: 47%;
  display: inline-block;
  margin-top: 20px;
`;

const googleSignin = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignin) {
    return googleSignin;
  }

  return props.inverted ? inverted : buttonStyle;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
