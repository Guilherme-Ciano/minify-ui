import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	atomDark,
	dracula,
	gruvboxDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeHighlightProps {
	theme?: "atom" | "dracula" | "gruvbox";
	language: string;
	code: string;
}

const CodeHighlight = ({ language, code, theme }: CodeHighlightProps) => {
	const themeSelected = () => {
		switch (theme) {
			case "atom":
				return atomDark;
			case "dracula":
				return dracula;
			case "gruvbox":
				return gruvboxDark;

			default:
				return dracula;
		}
	};

	return (
		<SyntaxHighlighter language={language} style={themeSelected()}>
			{code}
		</SyntaxHighlighter>
	);
};

export default CodeHighlight;
