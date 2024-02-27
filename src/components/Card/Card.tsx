import React from 'react';
import { StyledCard } from './styles';

interface CardProps {
  shadowLevel?: number;
  padding?: number;
  borderRadius?: number;
  children: JSX.Element | JSX.Element[];
}

export default function Card({
  children,
  shadowLevel,
  padding,
  borderRadius,
}: CardProps) {
  return (
    <StyledCard
      shadowLevel={shadowLevel}
      padding={padding}
      borderRadius={borderRadius}
    >
      {children}
    </StyledCard>
  );
}
