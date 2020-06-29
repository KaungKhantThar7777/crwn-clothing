import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 4rem;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 70%;
    justify-content: flex-end;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;
