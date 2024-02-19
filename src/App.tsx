import React from "react";
import styled from "styled-components";

import { FaAddressBook, FaSave } from "react-icons/fa";

import { A, Button, H1, H2, H3, Input, P } from "./components";

const App: React.FC = () => {
	return (
		<Wrapper>
			<Row>
				<Button variant="default" label="Press Me" icon={<FaSave />} />
				<Button
					variant="primary"
					label="Press Me"
					trailIcon={<FaAddressBook />}
				/>
				<Button variant="dashed" label="Press Me" />
				<Button variant="text" label="Press Me" />
				<Button variant="shadow" label="Press Me" />
			</Row>

			<Row>
				<H1>Heading 1</H1>
				<H2>Heading 2</H2>
				<H3>Heading 3</H3>
				<P>Paragraph</P>
				<A>Link</A>
			</Row>

			<Row>
				<H1 type="bolder">Heading 1</H1>
				<H2 type="bolder">Heading 2</H2>
				<H3 type="bolder">Heading 3</H3>
			</Row>

			<Row>
				<H1 type="bold">Heading 1</H1>
				<H2 type="bold">Heading 2</H2>
				<H3 type="bold">Heading 3</H3>
			</Row>

			<Row>
				<H1 type="light">Heading 1</H1>
				<H2 type="light">Heading 2</H2>
				<H3 type="light">Heading 3</H3>
			</Row>

			<Column>
				<Input placeholder="Input text" />
				<Input placeholder="Input text" primary />
				<Input placeholder="Input text" error />
				<Input placeholder="Input text" disabled />
				<Input placeholder="Input text" feedback="Mensagem de feedback" />
				<Input placeholder="Input text" icon={<FaSave />} />
			</Column>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;

  gap: 1rem;

  justify-content: center;
  align-items: baseline;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  justify-content: center;
  align-items: baseline;
`;

export default App;
