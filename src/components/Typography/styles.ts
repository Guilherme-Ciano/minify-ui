import styled, { css } from "styled-components";

interface HeadingProps {
	$type?: "light" | "bold" | "bolder";
	$italic?: boolean;
	$underline?: boolean;
}

const BaseText = css`
  margin: 0;
  padding: 0;

  color: var(--font-color);
  font-family: var(--font-family-sans-serif);
  font-size: var(--font-size-base);
`;

export const Heading1 = styled.h1<HeadingProps>`
  ${BaseText}

  font-family: var(--font-family-sans-serif);
  font-size: calc(var(--font-size-base) * 2);
  font-style: ${(props) => props.$italic && "italic"};
  text-decoration: ${(props) => props.$underline && "underline"};
  font-weight: ${(props) => {
		switch (props.$type) {
			case "light":
				return "var(--font-weight-light)";
			case "bold":
				return "var(--font-weight-bold)";
			case "bolder":
				return "var(--font-weight-bolder)";
			default:
				return "var(--font-weight-normal)";
		}
	}};
`;

export const Heading2 = styled.h2<HeadingProps>`
  ${BaseText}

  font-family: var(--font-family-sans-serif);
  font-size: calc(var(--font-size-base) * 1.6);
  font-style: ${(props) => props.$italic && "italic"};
  text-decoration: ${(props) => props.$underline && "underline"};
  font-weight: ${(props) => {
		switch (props.$type) {
			case "light":
				return "var(--font-weight-light)";
			case "bold":
				return "var(--font-weight-bold)";
			case "bolder":
				return "var(--font-weight-bolder)";
			default:
				return "var(--font-weight-normal)";
		}
	}};
`;

export const Heading3 = styled.h3<HeadingProps>`
  ${BaseText}

  font-family: var(--font-family-sans-serif);
  font-size: calc(var(--font-size-base) * 1.2);
  font-style: ${(props) => props.$italic && "italic"};
  text-decoration: ${(props) => props.$underline && "underline"};
  font-weight: ${(props) => {
		switch (props.$type) {
			case "light":
				return "var(--font-weight-light)";
			case "bold":
				return "var(--font-weight-bold)";
			case "bolder":
				return "var(--font-weight-bolder)";
			default:
				return "var(--font-weight-normal)";
		}
	}};
`;

export const Paragraph = styled.p<HeadingProps>`
  ${BaseText}

  font-family: var(--font-family-sans-serif);
  font-size: calc(var(--font-size-base) * 0.8);
  font-style: ${(props) => props.$italic && "italic"};
  text-decoration: ${(props) => props.$underline && "underline"};
  font-weight: ${(props) => {
		switch (props.$type) {
			case "light":
				return "var(--font-weight-light)";
			case "bold":
				return "var(--font-weight-bold)";
			case "bolder":
				return "var(--font-weight-bolder)";
			default:
				return "var(--font-weight-normal)";
		}
	}};
`;

export const Link = styled.a<HeadingProps>`
  ${BaseText}

  color: var(--color-primary);
  cursor: pointer;

  font-family: var(--font-family-sans-serif);
  font-size: calc(var(--font-size-base) * 0.8);
  font-style: ${(props) => props.$italic && "italic"};
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
  font-weight: ${(props) => {
		switch (props.$type) {
			case "light":
				return "var(--font-weight-light)";
			case "bold":
				return "var(--font-weight-bold)";
			case "bolder":
				return "var(--font-weight-bolder)";
			default:
				return "var(--font-weight-normal)";
		}
	}};
`;
