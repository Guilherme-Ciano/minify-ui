import React from 'react';
import styled from 'styled-components';

interface BasePaddingProps {
  value?: number;
  children: JSX.Element;
}

export function BasePadding({ value = 1, children }: BasePaddingProps) {
  const PaddingWrapper = styled.div<{ $paddingValue: number }>`
    padding: ${(props) => props.$paddingValue}rem;
  `;

  return <PaddingWrapper $paddingValue={value}>{children}</PaddingWrapper>;
}

export const PageWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;

  gap: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;
