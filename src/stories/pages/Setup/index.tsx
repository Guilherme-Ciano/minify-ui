import React from "react";

import { FaNpm } from "react-icons/fa";
import Terminal from "../../../components/Terminal";

export default function SetupPage() {
	return (
		<>
			<div className="pageInfo" id="setup">
				<div className="section">
					<div className="sectionText">
						<div className="infoContent">
							<div className="header">
								<h1 className="headerTitle">Our mission</h1>
								<h3 className="subtitleInfo">Simplicity is always the key</h3>
							</div>

							<p>
								The Minify-UI library is designed with the goal of streamlining
								the process of system development. It achieves this by focusing
								on a minimalist design approach that emphasizes simplicity and
								ease of customization. By providing a wide range of components,
								Minify-UI aims to cater to various development needs while
								ensuring a cohesive and visually appealing user interface.
								Moreover, the library is engineered to be lightweight and
								user-friendly, facilitating smooth integration into projects and
								enhancing overall development efficiency. With Minify-UI,
								developers can create sleek and modern interfaces with minimal
								effort, allowing them to focus more on functionality and user
								experience.
							</p>

							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								In addition to its focus on simplicity and usability, Minify-UI
								is committed to ongoing improvement and expansion. One of its
								key objectives is to continuously implement new components and
								features that enhance its versatility and utility for
								developers. This commitment to innovation ensures that Minify-UI
								remains relevant and adaptable to evolving development needs and
								trends. Furthermore, the project actively seeks the support and
								collaboration of other individuals and organizations interested
								in contributing to its growth and success. By fostering a
								collaborative community, Minify-UI aims to leverage the diverse
								skills and perspectives of its contributors to enrich the
								library and provide even greater value to its users.
							</p>

							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								Finally, we would like to express our heartfelt gratitude to our
								readers for their trust and support. It is your continued belief
								in Minify-UI that drives us to strive for excellence and
								constantly improve. Your feedback, contributions, and enthusiasm
								play a vital role in shaping the future of our library, and we
								are truly grateful for your ongoing support. Together, we look
								forward to making Minify-UI even better and more valuable for
								developers around the world. Thank you for being a part of our
								journey and for helping us create something truly special.
							</p>
						</div>
					</div>
				</div>

				<div className="section" id="bundle">
					<div className="sectionText">
						<div className="infoContent">
							<div className="header">
								<h1 className="headerTitle">Bundle Size</h1>
								<h3 className="subtitleInfo">Blazingly fast</h3>
							</div>

							<p>
								The size of Minimal-UI at the completion of full packing is
								about 1mb, This is a good score when comparing the size of
								modern client applications and will not impact the performance
								of your application. As a matter of engineering practice, it is
								recommended that you always split Minimal-UI as a separate chunk
								within your application to get fixed caching.
							</p>
						</div>
					</div>
				</div>

				<div className="section" id="setupInfo">
					<div className="sectionText">
						<div className="header">
							<h1 className="headerTitle">Setup</h1>
							<h3 className="subtitleInfo">
								Streamlining Front-End Excellence
							</h3>
						</div>

						<div className="infoContent">
							<p>
								Ensure your have the latest
								<a href="https://nodejs.org/en/download/">NodeJS</a>
								and a package manager:
								<a href="https://www.npmjs.com/">NPM</a> or
								<a href="https://yarnpkg.com/">Yarn</a>.
							</p>

							<p>
								Minify-UI is based on the component library of framework React,
								which means you must also understand the basics of how to create
								projects with the framework
							</p>
						</div>
					</div>

					<div className="sectionCode" id="installation">
						<h3 className="subtitleInfo">
							Installation Minify UI can be installed via npm:
						</h3>
						<Terminal code="npm install minify-ui" language="bash" />
					</div>
				</div>

				<div className="section" id="usage">
					<div className="sectionText">
						<div className="infoContent">
							<div className="header">
								<h1 className="headerTitle">Usage</h1>
								<h3 className="subtitleInfo">
									Soon, you'll be ready to create outstanding pages!
								</h3>
							</div>

							<p>
								Import and use components from minify-ui in your React project:
							</p>
						</div>
					</div>

					<div className="sectionCode">
						<Terminal
							language="typescript"
							code={`
          import React from 'react';
          import { Button, Input } from 'minify-ui/index';
          
          export default function App() {
              return (
                  <div>
                    <Button variant="shadow">Click me</Button>
                    <Input type="text" placeholder="Enter your name" />
                  </div>
                  );
                }
            `}
						/>
					</div>
				</div>

				<div className="section" id="contributing">
					<div className="sectionText">
						<div className="infoContent">
							<div className="header">
								<h1 className="headerTitle">Contributing</h1>
								<h3 className="subtitleInfo">
									You are the missing piece I was looking for
								</h3>
							</div>
							<p>
								Thank you for expressing your willingness to contribute. The
								Minify-UI project greatly values the contributions of all
								individuals who are eager to help improve the library. Your
								willingness to contribute is truly appreciated and makes a
								significant difference in the project's success.
							</p>
							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								If you're new to the process of contributing to open-source
								projects, don't worry! The Minify-UI community is here to
								support you every step of the way. Feel free to reach out to our
								team members or consult our contribution guidelines for
								assistance. We want to ensure that your contributions are
								meaningful and that you have a positive experience collaborating
								with us.
							</p>
							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								Pull Requests (PRs) are a vital part of the contribution
								process. They allow us to review and discuss the changes you've
								made before integrating them into the main codebase. Our team of
								maintainers will carefully review your PR, provide feedback, and
								guide you through any necessary revisions. We aim to maintain
								high standards of quality and consistency in our code, so your
								attention to detail and commitment to following best practices
								are greatly appreciated.
							</p>
							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								Please keep in mind that, in order for your PR to be merged, it
								will need to meet certain criteria and receive approval from our
								maintainers. This ensures that all contributions align with the
								project's goals and standards. We value transparency and
								collaboration, and we're committed to working together with you
								to ensure that your contributions are recognized and valued.
							</p>
							<p
								style={{
									paddingTop: "1rem",
								}}
							>
								Once again, we extend our sincere thanks for your willingness to
								contribute to the Minify-UI project. Your efforts help make our
								library better for everyone, and we're grateful for your support
								and dedication. Let's continue working together to build
								something great!
							</p>

							<div
								style={{
									display: "flex",
									gap: "5px",
									paddingTop: "1rem",
								}}
							>
								<p>With that in mind</p>

								<p>
									<a href="https://github.com/Guilherme-Ciano/minify-ui/issues">
										submit an issue
									</a>{" "}
									or{" "}
									<a href="https://github.com/Guilherme-Ciano/minify-ui/pulls">
										create a pull request
									</a>
									on GitHub.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
