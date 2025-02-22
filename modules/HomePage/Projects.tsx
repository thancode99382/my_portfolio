import Image from "next/image";
import { FC } from "react";

const project_data: IProjectItemProps[] = [
  {
    image_url: "/images/Rectangle 12.png",
    title: "Project 01 ",
    preview_link:"https://doanwebexpress-abqiicrnd-thancode99382s-projects.vercel.app/",
    github_link:"https://github.com/thancode99382",
    date: "August",
    desc: "  Chatify is the opensource larvel packageI found this package very useful and works very well but it does not have a group chat feature. So I added it. ",
  },
  
];

interface IProjectItemProps {
  image_url: string;
  title: string;
  preview_link?: string;
  github_link?: string;
  date: string;
  desc: string;
}

const ProjectItem: FC<IProjectItemProps> = (props) => {
  return (
    <div
      className={"flex flex-col gap-6 lg:gap-10  lg:flex-row lg:items-center"}
    >
      <div
        className={
          "flex flex-col gap-3 lg:gap-5 shrink-0 w-full block max-w-lg"
        }
      >
        <div className="group relative transition w-full block max-w-lg rounded-lg aspect-[3/2] overflow-hidden">
          <Image
            src={props.image_url}
            alt="imgurl"
            layout={"fill"}
            objectPosition={"center"}
            objectFit={"cover"}
          />
        </div>
        <p className="text-lg font-medium tracking-wide lg:text-2xl lg:text-right">
          {props.date}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl tracking-wide lg:text-5xl lg:leading-normal font-meidum">
          {props.title}
        </h4>

        <div className="text-sm leading-loose">
          {props.preview_link && (
            <div className={"flex gap-3"}>
              <span>Link:</span>
              <a
                className={"hover:underline text-indigo-300 "}
                target={"_blank"}
                href={props.preview_link}
              >
                {" "}
                {props.preview_link}
              </a>
            </div>
          )}

          {props.github_link && (
            <div className={"flex gap-3"}>
              <span>Link:</span>
              <a
                className={"hover:underline text-indigo-300 "}
                target={"_blank"}
                href={props.github_link}
              >
                {" "}
                {props.github_link}
              </a>
            </div>
          )}

        </div>
        <p className={"p-light2  text-sm"  } >{props.desc} </p>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id={"about"} className="">
      <div className="container relative ">
        <div
          className={
            "absolute top-1/2 right-0 w-32 aspect-square translate-x-1/3"
          }
        >
          <Image
            src={"/images/decors/Cube-1.png"}
            alt={"cube"}
            layout={"fill"}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6 py-14 lg:flex-row lg:gap-8 ">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="heading-01">Projects</h2>
            </div>

            <div
              className={
                " border-l border-stone-800 py-6 pl-6 md:pl-10 md:py-10"
              }
            >
              <div className="flex flex-col gap-16">
                <p className="p-light2">
                  A Collection of my favorites projects I've done recently
                </p>

                <div className={"flex flex-col gap-20"}>
                  {project_data.map((item, index) => (
                    <ProjectItem {...item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
