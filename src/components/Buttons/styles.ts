import styled, { css } from "styled-components";

const BaseButton = css`
  display: flex;

  gap: 0.5rem;

  justify-content: center;
  align-items: center;

  padding: var(--button-padding);

  background: transparent;

  border-radius: var(--border-radius-small);

  color: var(--text-color);

  font-size: var(--font-size-base);
  cursor: pointer;

  /* Animation */
  transition: background-color 0.5s ease;
`;

export const DefaultButton = css`
  ${BaseButton}

  border: 2px solid var(--shadow-color);
  background: transparent;
`;

export const PrimaryButton = css`
  ${BaseButton}

  border: 2px solid var(--shadow-color);
  background: var(--shadow-color);
  color: var(--background-color);
`;

export const DashedButton = css`
  ${BaseButton}

  border: 2px dashed var(--shadow-color);
  background: transparent;
`;

export const TextButton = css`
  ${BaseButton}

  border: none;
  background: transparent;
`;

export const ShadowButton = css`
  ${BaseButton}

  border: 2px solid var(--shadow-color);
  background: transparent;
  transition: box-shadow 0.5s ease;
`;

export const MinimalButton = styled.button<{
	$type: "primary" | "default" | "text" | "dashed" | "shadow";
	$size?: "sm" | "md" | "lg";
}>`
  ${(props) => props.$type === "primary" && PrimaryButton}
  ${(props) => props.$type === "default" && DefaultButton}
  ${(props) => props.$type === "dashed" && DashedButton}
  ${(props) => props.$type === "text" && TextButton}
  ${(props) => props.$type === "shadow" && ShadowButton}

  ${(props) =>
		props.$type === "shadow" &&
		`
  &:hover {
  box-shadow: -3px 2px 0px 1px var(--shadow-color);
  -webkit-box-shadow: -3px 2px 0px 1px var(--shadow-color);
  -moz-box-shadow: -3px 2px 0px 1px var(--shadow-color);
  }
  `}

    ${(props) =>
			props.$type !== "shadow" &&
			`
&:hover {
    background-color: #f5f5f5;
    color: #1f1f1f;
  `}
`;
