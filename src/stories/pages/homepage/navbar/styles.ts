import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 8rem calc(100% - 23rem);

  padding-left: 2rem;

  z-index: 100;

  gap: 2rem;

  & img {
    width: 8rem;
  }
`;

export const NavbarItems = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;

  & a {
    color: #000;
  }

  & a:hover {
    color: #000;
    text-decoration: underline;
  }
`;
