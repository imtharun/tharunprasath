import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import ReactIcon from "./../assets/icons/react.svg";
import TailwindIcon from "./../assets/icons/tailwindcss-icon.svg";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects / Tharunprasath";
  }, []);

  return (
    <section className="min-h-[90vh] p-4">
      <h1 className="ml-5 text-lg">Projects</h1>
      <ProjectCard />
    </section>
  );
};

const ProjectCard = () => {
  const items = [
    {
      title: "Apartment Management System",
      description:
        "This is our mini-project for the course Database Management System.",
      stacks: [ReactIcon, TailwindIcon],
      githubLink:
        "https://github.com/imtharun/Apartment-management-system-dbms",
      demoLink: "",
    },
    {
      title: "what2watch",
      description:
        "A movie recommendation system using React, tailwindcss and tmdb API.",
      githubLink: "https://github.com/imtharun/what2watch",
      demoLink: "https://w2watch.netlify.app/movie",
      stacks: [ReactIcon],
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row p-3 ">
      {items.map((item, index) => {
        return (
          <div
            key={index + 1}
            className={`max-w-[350px] relative group bg-dark text-light p-3 rounded mt-2 ml-2 mr-4`}
          >
            <div className="z-0 group-hover:opacity-50 transition-all duration-300">
              <h1 className="">{item.title}</h1>
              <p className="text-xs mt-2">{item.description}</p>
              <div className="flex text-xs my-2">
                {item.stacks.map((icon, index) => {
                  return (
                    <img
                      index={index + 1}
                      className={`w-5 h-5 ${
                        index === 0 ? "ml-0" : "ml-2"
                      } justify-center items-center`}
                      src={icon}
                      alt="React"
                    />
                  );
                })}
              </div>
            </div>
            {item.githubLink && (
              <button className=" hidden group-hover:block absolute text-dark bg-light top-[40%] left-5 z-40  px-3 py-2 rounded-full text-sm">
                <p className="flex justify-center items-center">
                  Github <ArrowTopRightIcon />
                </p>
              </button>
            )}
            {item.demoLink && (
              <button className="hidden group-hover:block absolute text-dark bg-light top-[40%] right-5 z-40  px-3 py-2 rounded-full text-sm">
                <p className="flex justify-center items-center">
                  Demo <ArrowTopRightIcon />
                </p>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
