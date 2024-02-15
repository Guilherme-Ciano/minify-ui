import React from 'react';

import { MdOutlineDesignServices } from 'react-icons/md';
import { GrConfigure } from 'react-icons/gr';
import { BsFeather } from 'react-icons/bs';
import {
  Card,
  Description,
  HeaderSubtitle,
  HeaderTitle,
  Row,
  StyledHeader,
  StyledPage,
  Subtitle,
  Title,
  TitleIcon,
  TitleSection,
} from './styles';
import Navbar from './navbar';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <StyledPage>
        <StyledHeader>
          <HeaderTitle>Minify UI</HeaderTitle>
          <HeaderSubtitle>Streamlining Front-End Excellence</HeaderSubtitle>
        </StyledHeader>
        <Row>
          <Card>
            <TitleSection>
              <TitleIcon>
                <MdOutlineDesignServices className="icon" />
                <Title>Streamlined Design</Title>
              </TitleIcon>
              <Subtitle>Subtítulo do Card</Subtitle>
            </TitleSection>
            <Description>
              Minimalist design ethos, delivering sleek and uncluttered UI
              components that seamlessly integrate into any project.
            </Description>
          </Card>
          <Card>
            <TitleSection>
              <TitleIcon>
                <GrConfigure className="icon" />
                <Title>Easy Customization</Title>
              </TitleIcon>
              <Subtitle>Subtítulo do Card</Subtitle>
            </TitleSection>
            <Description>
              Effortlessly customize and extend components to align with your
              project's unique design specifications.
            </Description>
          </Card>
          <Card>
            <TitleSection>
              <TitleIcon>
                <BsFeather className="icon" />
                <Title>Lightweight</Title>
              </TitleIcon>
              <Subtitle>Subtítulo do Card</Subtitle>
            </TitleSection>
            <Description>
              Engineered for performance, Minify UI is lightweight, ensuring
              swift load times and fluid user experiences.
            </Description>
          </Card>
        </Row>
      </StyledPage>
    </>
  );
}
