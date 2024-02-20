import React from 'react';

import { BsFeather } from 'react-icons/bs';
import { GrConfigure } from 'react-icons/gr';
import { MdOutlineDesignServices } from 'react-icons/md';

export default function Homepage() {
  return (
    <div className="page" id="home">
      <div className="header">
        <h1 className="headerTitle">Minify UI</h1>
        <h3 className="headerSubtitle">Streamlining Front-End Excellence</h3>
      </div>

      <div className="row">
        <div className="card">
          <div className="titleSection">
            <div className="titleIcon">
              <MdOutlineDesignServices className="icon" />
              <h2 className="title">Streamlined Design</h2>
            </div>
            {/* <h3 className="subtitle">Subtítulo do Card</h3> */}
          </div>

          <p className="description">
            Minimalist design ethos, delivering sleek and uncluttered UI
            components that seamlessly integrate into any project.
          </p>
        </div>

        <div className="card">
          <div className="titleSection">
            <div className="titleIcon">
              <GrConfigure className="icon" />
              <h2 className="title">Easy Customization</h2>
            </div>
            {/* <h3 className="subtitle">Subtítulo do Card</h3> */}
          </div>

          <p className="description">
            Effortlessly customize and extend components to align with your
            project's unique design specifications.
          </p>
        </div>

        <div className="card">
          <div className="titleSection">
            <div className="titleIcon">
              <BsFeather className="icon" />
              <h2 className="title">Lightweight</h2>
            </div>
            {/* <h3 className="subtitle">Subtítulo do Card</h3> */}
          </div>

          <p className="description">
            Engineered for performance, Minify UI is lightweight, ensuring swift
            load times and fluid user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
