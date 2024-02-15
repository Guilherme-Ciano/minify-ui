import styled from 'styled-components';

export const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3rem;
`;

export const HeaderTitle = styled.h1`
  color: #000;
  font-size: 64pt;
  font-weight: bold;
`;

export const HeaderSubtitle = styled.h3`
  color: #000;
  font-size: 12pt;
  font-weight: light;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  justify-content: left;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  justify-content: center;
  align-items: left;
  border-radius: 8px;
  border: 0.5px solid #000;
  box-shadow: -3px 2px 0px 1px #000;
  padding: 20px;
  margin: 20px;
  padding-top: none;
  margin-top: none;
  max-width: 300px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0rem;
  justify-content: flex-start;
  align-items: left;
  line-height: 1rem;
  gap: 0rem;
`;

export const TitleIcon = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: left;
`;

export const Icon = styled.div`
  margin-bottom: 15px;
  padding: 0rem;
  color: #000;
  font-size: 14pt;
`;

export const Title = styled.h2`
  padding: none;
  margin: none;
  font-size: 20px;
  border: none;
  text-decoration: none;
`;

export const Subtitle = styled.h3`
  padding: none;
  margin: none;
  font-size: 18px;
  color: #888888;
`;

export const Description = styled.p`
  padding: none;
  margin: none;
  margin: 5px 0px;
  font-size: 14px;
  line-height: 1rem;
`;
