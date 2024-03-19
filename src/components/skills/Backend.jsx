import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills_title">Backend Developer</h3>
      <br />
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">NestJS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div> */}

          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Socket.io</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> */}

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          {/* <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">LoopBack 4</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Backend;
