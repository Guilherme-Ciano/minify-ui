import React from "react";
import { Heading1, Heading2, Heading3, Link, Paragraph } from "./styles";

interface HeadingProps {
	children: string;
	type?: "light" | "bold" | "bolder";
	italic?: boolean;
	underline?: boolean;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: string | JSX.Element;
	type?: "light" | "bold" | "bolder";
	italic?: boolean;
	underline?: boolean;
}

export function H1({ children, type, italic, underline }: HeadingProps) {
	return (
		<Heading1 $type={type} $italic={italic} $underline={underline}>
			{children}
		</Heading1>
	);
}

export function H2({ children, type, italic, underline }: HeadingProps) {
	return (
		<Heading2 $type={type} $italic={italic} $underline={underline}>
			{children}
		</Heading2>
	);
}

export function H3({ children, type, italic, underline }: HeadingProps) {
	return (
		<Heading3 $type={type} $italic={italic} $underline={underline}>
			{children}
		</Heading3>
	);
}

export function P({ children, type, italic, underline }: HeadingProps) {
	return (
		<Paragraph $type={type} $italic={italic} $underline={underline}>
			{children}
		</Paragraph>
	);
}

export function A({
	children,
	type,
	italic,
	underline,
	...anchorProps
}: LinkProps) {
	return (
		<Link $type={type} $italic={italic} $underline={underline} {...anchorProps}>
			{children}
		</Link>
	);
}
