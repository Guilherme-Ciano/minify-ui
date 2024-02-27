import styled, { css } from 'styled-components';

interface CardProps {
  shadowLevel?: number;
  padding?: number;
  borderRadius?: number;
}

const StyledCardBase = css`
  background-color: ${({ theme }) => theme.Colors.BW['100']};
  border-radius: ${({ theme }) => theme.Size.sxsm};
  padding: ${({ theme }) => theme.Size.lg};

  box-shadow: -4px 6px 5px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: -4px 6px 5px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: -4px 6px 5px 5px rgba(0, 0, 0, 0.05);
`;

export const StyledCard = styled.div<CardProps>`
  ${StyledCardBase}

  ${({ shadowLevel }) =>
    shadowLevel !== undefined &&
    css`
      box-shadow: -4px 6px 5px ${shadowLevel === 0 ? 5 : shadowLevel}px
        rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: -4px 6px 5px ${shadowLevel === 0 ? 5 : shadowLevel}px
        rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -4px 6px 5px ${shadowLevel === 0 ? 5 : shadowLevel}px
        rgba(0, 0, 0, 0.1);
    `}

    ${({ borderRadius }) =>
    borderRadius !== undefined &&
    css`
      border-radius: ${borderRadius}px;
    `}

    ${({ padding }) =>
    padding !== undefined &&
    css`
      padding: ${padding}px;
    `}
`;
