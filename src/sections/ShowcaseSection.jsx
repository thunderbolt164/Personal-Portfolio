import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
gsap.registerPlugin(ScrollTrigger);

const handleProjectClick = (project) => {
  if (project.liveLink) {
    window.open(project.liveLink, "_blank", "noopener,noreferrer");
  } else {
    alert("🚧 This project is currently under development.");
  }
};
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Featured Projects" sub="💻 Turning Ideas into Reality (Click on it to see)" />

        <div className="mt-20 showcaselayout">
          {/* Featured Project */}
          <div
            className="first-project-wrapper"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div
              className="image-wrapper cursor-pointer"
              onClick={() => handleProjectClick(projects[0])}
            >
              <img src={projects[0].image} alt={projects[0].title} />
            </div>

            <div className="text-content">
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Project List */}
          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.title}
                className="project"
                ref={(el) => (cardsRef.current[index + 1] = el)}
              >
                <div
                  className={`image-wrapper ${project.color} cursor-pointer`}
                  onClick={() => handleProjectClick(project)}
                >
                  <img src={project.image} alt={project.title} />
                </div>

                <h2>{project.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
