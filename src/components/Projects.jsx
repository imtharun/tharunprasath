import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import ReactIcon from "./../assets/icons/react.svg";
import TailwindIcon from "./../assets/icons/tailwindcss.svg";
import Transitions from "./Transitions";
import ReduxIcon from "./../assets/icons/redux.svg";
import MaterialUiIcon from "./../assets/icons/material-ui.svg";
import ExpressIcon from "./../assets/icons/express.svg";
import MongoDBIcon from "./../assets/icons/mongodb.svg";
import NextJSIcon from "./../assets/icons/nextjs.svg";
import AxiosIcon from "./../assets/icons/axios.svg";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects / Tharunprasath";
  }, []);

  return (
    <section className="min-h-[90vh] p-4">
      {/* <h1 className="ml-5 text-lg text-dark font-medium">Projects</h1> */}
      <ProjectCard />
    </section>
  );
};

const ProjectCard = () => {
  const items = [
    {
      title: "Social Hive",
      description: "Social Hive - A Social Media App for sociopaths!",
      stacks: [ReactIcon, ReduxIcon, MaterialUiIcon, ExpressIcon, MongoDBIcon],
      githubLink: "https://github.com/imtharun/social-hive",
      demoLink: "",
    },
    {
      title: "ContainerZen",
      description: "ContainerZen - A Docker Container Manager",
      stacks: [NextJSIcon, TailwindIcon],
      githubLink: "https://github.com/imtharun/ContainerZen",
      demoLink: "",
    },
    {
      title: "MedConnect",
      description:
        "An website created for stoke patients to connect with doctors and vice versa.",
      stacks: [ReactIcon, TailwindIcon, AxiosIcon],
      githubLink:
        "https://github.com/imtharun/Apartment-management-system-dbms",
      demoLink: "",
    },
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
    <>
      <Transitions>
        <div className="flex flex-col justify-center flex-wrap items-center sm:flex-row p-3 ">
          {items.map((item, index) => {
            return (
              <div
                key={index + 1}
                className={`max-w-[330px] relative group bg-dark text-light p-3 rounded mt-2 ml-2 mr-4`}
                title={item.title}
              >
                <div className="z-0 group-hover:opacity-50 transition-all duration-300">
                  <h1 className="font-medium">{item.title}</h1>
                  <p className="text-xs mt-2 h-8">{item.description}</p>
                  <div className="flex self-end  text-xs my-2">
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
                  <a href={item?.githubLink} target="_blank" rel="noreferrer">
                    <button className=" hidden group-hover:block absolute text-dark bg-light top-[40%] left-5 z-40  px-3 py-2 rounded-full text-sm">
                      <p className="flex justify-center items-center">
                        Github <ArrowTopRightIcon />
                      </p>
                    </button>
                  </a>
                )}
                {item.demoLink && (
                  <a href={item?.demoLink} target="_blank" rel="noreferrer">
                    <button className="hidden group-hover:block absolute text-dark bg-light top-[40%] right-5 z-40  px-3 py-2 rounded-full text-sm">
                      <p className="flex justify-center items-center">
                        Demo <ArrowTopRightIcon />
                      </p>
                    </button>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </Transitions>
    </>
  );
};

export default Projects;
