import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> BUILD</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>PYTHON DEVELOPMENT</h3>
              <div className="what-content-details">
                <h4>Description</h4>
                <p>
                  Developing clean, modular, and scalable Python applications using Object-Oriented Programming, MySQL, and modern software design principles.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Python</div>
                  <div className="what-tags">OOP</div>
                  <div className="what-tags">MySQL</div>
                  <div className="what-tags">Modules</div>
                  <div className="what-tags">Architecture</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ANALYTICS</h3>
              <div className="what-content-details">
                <h4>Description</h4>
                <p>
                  Cleaning, analyzing, and visualizing real-world datasets with Pandas, NumPy, Matplotlib, and Power BI to uncover meaningful insights.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Pandas</div>
                  <div className="what-tags">NumPy</div>
                  <div className="what-tags">Matplotlib</div>
                  <div className="what-tags">Power BI</div>
                  <div className="what-tags">Visualization</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ARTIFICIAL INTELLIGENCE</h3>
              <div className="what-content-details">
                <h4>Description</h4>
                <p>
                  Exploring Prompt Engineering, Retrieval-Augmented Generation (RAG), LLM workflows, and AI fundamentals while building toward advanced Machine Learning.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Prompt Engineering</div>
                  <div className="what-tags">Google Stitch</div>
                  <div className="what-tags">RAG</div>
                  <div className="what-tags">LLM Workflows</div>
                  <div className="what-tags">Generative AI</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PROBLEM SOLVING</h3>
              <div className="what-content-details">
                <h4>Description</h4>
                <p>
                  Turning ideas into practical software through structured thinking, debugging, experimentation, and continuous learning.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Debugging</div>
                  <div className="what-tags">Critical Thinking</div>
                  <div className="what-tags">System Design</div>
                  <div className="what-tags">Algorithms</div>
                  <div className="what-tags">Continuous Learning</div>
                </div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
