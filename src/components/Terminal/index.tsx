import React, { useState } from 'react';
import {
  TerminalHeader,
  TerminalBody,
  Terminal as TerminalWrapper,
  Red,
  Yellow,
  Green,
  ButtonsArea,
  TextButton,
} from './styles';
import { FaCopy } from 'react-icons/fa';
import CodeHighlight from './CodeHighlight';

interface TerminalProps {
  theme?: 'atom' | 'dracula' | 'gruvbox';
  language: string;
  code: string;
}

export default function Terminal({
  code,
  language,
  theme = 'dracula',
}: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Erro ao copiar para o clipboard: ', error);
      });
  };

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js" />
      </head>

      <TerminalWrapper>
        <TerminalHeader>
          <ButtonsArea>
            <Red />
            <Yellow />
            <Green />
          </ButtonsArea>

          <TextButton onClick={() => copyToClipboard()}>
            <FaCopy /> {copied ? 'Copied!' : 'Copy'}
          </TextButton>
        </TerminalHeader>
        <TerminalBody>
          <CodeHighlight code={code} language={language} theme={theme} />
        </TerminalBody>
      </TerminalWrapper>
    </>
  );
}
