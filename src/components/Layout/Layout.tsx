import React from 'react';
import styled from 'styled-components';

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

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 0;

  gap: 1rem;
`;
