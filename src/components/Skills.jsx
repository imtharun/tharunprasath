import React, { useEffect } from "react";
import ReactIcon from "./../assets/icons/react.svg";
import NodeIcon from "./../assets/icons/nodejs.svg";
import JavaIcon from "./../assets/icons/java.svg";
import ExpressIcon from "./../assets/icons/express.svg";
import GitIcon from "./../assets/icons/git.svg";
import GithubIcon from "./../assets/icons/github.svg";
import JavascriptIcon from "./../assets/icons/javascript.svg";
// import NextIcon from "./../assets/icons/nextjs.svg";
import TailwindcssIcon from "./../assets/icons/tailwindcss.svg";
import Transitions from "./Transitions";

const Skills = () => {
  useEffect(() => {
    document.title = "Skills / Tharunprasath";
  }, []);

  const items = [
    { name: "React", img: ReactIcon, percentage: "80%" },
    { name: "TailwindCSS", img: TailwindcssIcon, percentage: "80%" },
    { name: "Javascript", img: JavascriptIcon, percentage: "75%" },
    { name: "Git", img: GitIcon, percentage: "80%" },
    { name: "Github", img: GithubIcon, percentage: "80%" },
    { name: "Java", img: JavaIcon, percentage: "80%" },
    // { name: "NextJS", img: NextIcon, percentage: "70%" },
    { name: "NodeJS", img: NodeIcon, percentage: "80%" },
    // { name: "Flutter", img: FlutterIcon, percentage: "50%" },
    { name: "ExpressJS", img: ExpressIcon, percentage: "70%" },
  ];

  return (
    <>
      <Transitions>
        <section className="text-monts gradient min-h-[90vh] flex flex-col sm:flex-row">
          <div className="mt-4 sm:w-[70%] text-dark">
            <p className="text-md ml-9 sm:ml-10 font-medium">
              Tools and Tech I use,
            </p>
            <div className="p-3 pb-2 flex flex-col justify-center items-center sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:place-items-center">
              {items.map((ele, index) => {
                return (
                  <div
                    key={index + 1}
                    className="my-2 flex justify-around items-center w-full"
                  >
                    <div
                      className="flex items-center w-[80px] h-[80px] text-gray-400 flex-col"
                      title={ele.name}
                    >
                      <img
                        className="w-[45px] h-[45px]"
                        src={ele.img}
                        alt={ele.name}
                      />
                      <p className="text-sm pt-2">{ele.name}</p>
                    </div>
                    <div title="Experience" className="w-[60%] p-1 text-start">
                      <Progress percentage={ele.percentage} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:w-[30%] mt-1 p-4 text-light">
            <p className="text-md font-medium">What I do?</p>
            <Cards />
          </div>
        </section>
      </Transitions>
    </>
  );
};

const Progress = (props) => {
  return (
    <div className="w-full bg-dark rounded-full">
      <div
        className={`bg-[#9F937F] text-xs font-medium text-blue-100 text-center p-0.2 leading-none rounded-full `}
        style={{ width: props.percentage }}
      >
        {props.percentage}
      </div>
    </div>
  );
};

const Cards = (props) => {
  const items = [
    {
      title: "Web development",
      description:
        "I have the ability to think critically, am adaptable to change, and have a strong desire to stay current with the latest technologies and trends in the field of web development.",
    },
    {
      title: "Team work",
      description:
        "I believe that the success of a project depends on the collective efforts of the team and I am committed to contributing my skills and knowledge to support that success",
    },
    {
      title: "Problem Solving",
      description:
        "I am a problem solver, skilled in identifying and resolving complex issues. I approach each challenge with a systematic and analytical mindset, breaking down the problem into smaller components to better understand its root cause.",
    },
  ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index + 1}
            className={`${index === 0 ? "mt-3" : "my-3"}
            cursor-pointer text-light bg-dark sm:bg-light sm:text-dark p-3 rounded-md transition-all duration-300 hover:scale-[1.05]`}
            title={item.title}
          >
            <h1 className="font-medium">{item.title}</h1>
            <p className="text-xs ">{item.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
