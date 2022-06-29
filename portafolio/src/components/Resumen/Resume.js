import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h3 className="txt_resume">Experiencia</h3>
          </div>
          <div className="content-section">
            <div className="contentt">
              {ResumeApi.map((val, id) => {
                if (val.category === "education") {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      year={val.year}
                      rate={val.rate}
                      desc={val.desc}
                    />
                  );
                }
              })}
            </div>

            <div className="contentt">
              {ResumeApi.map((val, index) => {
                if (val.category === "experience") {
                  return (
                    <Card
                      key={index}
                      title={val.title}
                      year={val.year}
                      rate={val.rate}
                      desc={val.desc}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
