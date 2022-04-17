import React from "react";
import ethereum from "../../assests/images/ethereum.png";
const Project = () => {
  return (
    <div className="project__section">
    <div className="bitcoin ps-5">
            <img src={ethereum} alt="" className="img1"/>
        </div>
      <div class="container">
      
        <h1 className="project__section__heading">Projects </h1>

        <div class="portfolio">
          <div className="portfolio__section__card">
            <div>
              <div className="portfolio-box potfolio-box-1"></div>
              <h2 className="project__section__h2">title</h2>
            </div>
          </div>
          
          <div className="portfolio__section__card">
            <div>
              <div className="portfolio-box potfolio-box-4"></div>
              <h2 className="project__section__h2">title</h2>
            </div>
          </div>
        </div>

<div class="portfolio">
          <div className="portfolio__section__card">
            <div>
              <div className="portfolio-box potfolio-box-1"></div>
              <h2 className="project__section__h2">title</h2>
            </div>
          </div>
          
          <div className="portfolio__section__card">
            <div>
              <div className="portfolio-box potfolio-box-4"></div>
              <h2 className="project__section__h2">title</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bitcoin ps-5">
            <img src={ethereum} alt="" className="img2"/>
        </div>
    </div>
  );
};

export default Project;
