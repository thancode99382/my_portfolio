import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className={"w-full relative  "}>
      <div className="relative block w-full max-w-md mx-auto lg:max-w-full lg:w-full aspect-square shrink-0">
        <Image src={"/images/datdeptrai.jpg"} className= {" rounded-full "}  alt={"main hero"} layout={"fill"} />
        <div className="absolute hidden w-full h-full scale-[1.45] translate-x-3 translate-y-4  border rounded-full lg:block border-stone-800 ">
            
            </div>
      </div>

      <div className="z-10 w-full scale-110 aspect-[8/7] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute  ">
      <Image src={"/images/decors/decor 3d.png"} alt={"3d"} layout={"fill"} />
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div
      className={
        " lg:order-first py-8 lg:py-12 flex flex-col gap-8 xl:gap-10 relative lg:max-w-lg shrink-0   "
      }
    >


        <div className="absolute top-0 right-0 w-5 -translate-x-full aspect-square">
            <Image src={"/images/decors/decor plus.svg"} alt={"plus"} layout={"fill"} />
            
        </div>
      <div className="flex flex-col gap-6 lg:gap-8">
        <h1 className="heading-01">Dat Dong</h1>
        <div className="flex flex-col gap-4">
          <p className="p-light2 lg:text-lg lg:leading-loose ">
            Web developer. I love building beautiful interfaces, web apps, and
            everything between!
          </p>

          {/* <p className="font-medium p-light lg:text-lg lg:leading-loose">
            dongvandat9054@gmail.com
          </p> */}
        </div>

        <ul className="flex gap-12 p-light2">
          <li className="text-indigo-300 transition hover:underline ">
            <a href="https://www.youtube.com/@DatDong2003" target={"_blank"}>
              Youtube
            </a>
          </li>
          <li className="text-indigo-300 transition hover:underline ">
            <a href="https://www.facebook.com/ongvanquocat/" target={"_blank"}>
              Facebook
            </a>
          </li>
          <li className="text-indigo-300 transition hover:underline ">
            <a href="https://github.com/thancode99382" target={"_blank"}>
              Github
            </a>
          </li>
        </ul>

        <div className="flex gap-4 mt-4">
          {/* <Link href={"/#projects"}>
            <div
              className={
                "text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition bg-primary hover:bg-primary2 "
              }
            >
              <span className="relative h-6 aspect-square">
                <Image
                  src={"/images/decors/mdi_magnify.png"}
                  layout={"fill"}
                  alt={"magnify"}
                />
              </span>
              <span>My Projects</span>
            </div>
          </Link>

          <Link href={"/#contact "}>
            <div
              className={
                "text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition border-2 border-dark1 hover:bg-dark1  "
              }
            >
            
              <span>Contact</span>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id={"Home"} className={" overflow-hidden pt-16 "}>
      <div className="container relative">
      <div className="w-16 aspect-[27/22] absolute bottom-1/2 right-0 translate-y-1/2 -translate-x-1/3   ">
      <Image src={"/images/decors/decor dots.png"} alt={"dots"} layout={"fill"} />
      </div>
      <div className="absolute left-0 w-10 translate-x-full translate-y-1/2 bottom-1/4 aspect-square">
      <Image src={"/images/decors/decor plus.png"} alt={"plus"} layout={"fill"} />
      </div>

        <div className="flex flex-col py-10 lg:py-14 lg:items-center lg:flex-row lg:gap-10 xl:gap-16 ">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};
