import styled, { css } from 'styled-components';

export interface HeadingProps {
  $type?: 'light' | 'lightBold' | 'normal' | 'bold' | 'bolder';
  $italic?: boolean;
  $underline?: boolean;
}

const TextWeights = {
  light: css`
    font-weight: ${({ theme }) => theme.Font.Weight.Light};
  `,
  normal: css`
    font-weight: ${({ theme }) => theme.Font.Weight.Normal};
  `,
  lightBold: css`
    font-weight: ${({ theme }) => theme.Font.Weight.LightBold};
  `,
  bold: css`
    font-weight: ${({ theme }) => theme.Font.Weight.Bold};
  `,
  bolder: css`
    font-weight: ${({ theme }) => theme.Font.Weight.Bolder};
  `,
};

const handleTextWeight = (
  weight: 'light' | 'lightBold' | 'normal' | 'bold' | 'bolder' = 'normal'
) => TextWeights[weight];

const BaseText = css<HeadingProps>`
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.Colors.TextColor};
  font-family: ${({ theme }) => theme.Font.Family};

  ${({ $type }) => handleTextWeight($type)}
  font-style: ${({ $italic }) => $italic && 'italic'};
  text-decoration: ${({ $underline }) => $underline && 'underline'};
`;

export const Heading1 = styled.h1<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Heading1};
`;

export const Heading2 = styled.h2<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Heading2};
`;

export const Heading3 = styled.h3<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Heading3};
`;

export const Paragraph = styled.p<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Normal};
`;

export const SmallStyle = styled.p<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Small};
`;

export const Link = styled.a<HeadingProps>`
  ${BaseText}

  font-size: ${({ theme }) => theme.Font.Sizes.Normal};
  color: ${({ theme }) => theme.Colors.Primary['500']};
  cursor: pointer;
`;
