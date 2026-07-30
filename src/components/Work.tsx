import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Revert and strip out any existing pin spacers or triggers for work
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id === "work" || st.trigger === workRef.current) {
          st.kill(true);
        }
      });

      const getScrollAmount = () => {
        const boxes = document.querySelectorAll(".work-box");
        if (!boxes || boxes.length === 0) return 1800;
        const firstBox = boxes[0] as HTMLElement;
        const boxWidth = firstBox.offsetWidth || 500;
        const totalDistance = (boxes.length - 1) * boxWidth + 300;
        return Math.max(1400, totalDistance);
      };

      let timeline: gsap.core.Timeline;
      const initTimer = setTimeout(() => {
        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: workRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            id: "work",
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        timeline.to(".work-flex", {
          x: () => -getScrollAmount(),
          ease: "none",
        });

        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(initTimer);
        const trigger = ScrollTrigger.getById("work");
        if (trigger) {
          trigger.kill(true);
        }
        if (timeline) {
          timeline.kill();
        }
      };
    },
    { scope: workRef }
  );
  return (
    <div className="work-section" id="work" ref={workRef}>
      <div className="work-container section-container">
        <h2>
          SELECTED <span>PROJECTS</span>
        </h2>
        <div className="work-flex">
          {[
            {
              num: "01",
              title: "Spotify Music Analytics Dashboard",
              category: "Power BI",
              description: "Designed an interactive analytics dashboard using Spotify data to visualize music trends, artist popularity, listening behavior, and key performance insights through dynamic charts and filters.",
              tools: "Power BI, Data Visualization, Analytics, Dashboard Design",
              images: [
                import.meta.env.BASE_URL + "images/spotify/Executive_Overview.png",
                import.meta.env.BASE_URL + "images/spotify/Artist_Performance_Hub.png",
                import.meta.env.BASE_URL + "images/spotify/Audio_DNA_Lab.png",
                import.meta.env.BASE_URL + "images/spotify/Music_Evolution_Timeline.png",
                import.meta.env.BASE_URL + "images/spotify/Platform_Wars.png",
              ]
            },
            {
              num: "02",
              title: "Student Management System",
              category: "Python • MySQL",
              description: "Developing a modular student management application featuring secure authentication, role-based access, MySQL integration, CRUD operations, and separate dashboards for administrators, teachers, and staff.",
              tools: "Python, MySQL, OOP, CLI, Authentication",
              image: import.meta.env.BASE_URL + "images/student_mgmt_code.png"
            },
            {
              num: "03",
              title: "InsightForge AI",
              category: "React • Node.js • Gemini AI",
              description: "An AI-powered data analytics platform featuring automated EDA, deterministic data cleaning, and Gemini AI-driven business insights using a Bring Your Own Key (BYOK) architecture.",
              tools: "React, TypeScript, Node.js, Express, Gemini AI, Recharts",
              image: import.meta.env.BASE_URL + "images/insightforge_overview.png"
            },
            {
              num: "04",
              title: "Rock Paper Scissors Game",
              category: "Python",
              description: "Developed an interactive Python game inspired by IShowSpeed featuring game logic, score tracking, multiple rounds, and an engaging command-line experience.",
              tools: "Python, Game Logic, CLI, Programming Fundamentals",
              image: import.meta.env.BASE_URL + "images/rps_code.png"
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Technologies & Tools</h4>
                <p>{project.tools}</p>
              </div>
              {/* @ts-ignore */}
              <WorkImage image={project.image || import.meta.env.BASE_URL + "images/placeholder.webp"} images={project.images} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
