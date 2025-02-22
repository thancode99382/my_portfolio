import Image from "next/image";
import { FC } from "react";
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../firebase/config"; // Adjust path as necessary






// const project_data: IProjectItemProps[] = [
//   {
//     image_url: "/images/Rectangle 12.png",
//     title: "Project 01 ",
//     preview_link:"https://doanwebexpress-abqiicrnd-thancode99382s-projects.vercel.app/",
//     github_link:"https://github.com/thancode99382",
  
//     desc: "  Chatify is the opensource larvel packageI found this package very useful and works very well but it does not have a group chat feature. So I added it. ",
//   },
  
// ];

interface IProjectItemProps {
  id?:string;
  image_url: string;
  title: string;
  preview_link?: string;
  github_link?: string;
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
        <img
  src={props.image_url}
  alt="imgurl"
  className="imgProject"
  
/>
        </div>
        <p className="text-lg font-medium tracking-wide lg:text-2xl lg:text-right">
          {/* {props.date} */}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl tracking-wide lg:text-5xl lg:leading-normal font-meidum">
          {props.title}
        </h4>

        <div className="text-sm leading-loose">
          {props.preview_link && (
            <div className={"flex gap-3"}>
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="inline text-indigo-300 size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg></span>
              <a
                className={"hover:underline text-indigo-300 text-sm "}
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
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="inline text-indigo-300 size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg></span>
              <a
                className={"hover:underline text-indigo-300 text-sm "}
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


  const [projects, setProjects] = useState<IProjectItemProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const fetchedProjects = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          // Ensure all required fields are extracted and correctly typed
          return {
            id: doc.id,
            image_url: data.image_url || "", // Fallback value
            title: data.title || "",
            preview_link: data.preview_link || "",
            github_link: data.github_link || "",
            desc: data.desc || "", // Fallback value
          };
        });
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <section id={"Projects"} className="">
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
                  A Collection of my favorites projects I have done recently
                </p>

                <div className={"flex flex-col gap-20"}>
                  {projects.map((item, index) => (
                    <ProjectItem  {...item} key={index} />
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
