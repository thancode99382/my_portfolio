import Image from "next/image";

export const Resume = () => {
  return (
    <section id={"About"} className="">
      <div className="container relative ">
        <div className="flex flex-col gap-6 py-14 lg:flex-row lg:gap-8 ">
          <div className="flex flex-col gap-6">
            <h2 className="heading-01">About Me</h2>

            <div
              className={
                " border-l border-stone-800 py-6 pl-6 md:pl-10 md:py-10"
              }
            >
              <div className="flex flex-col gap-8 lg:gap-10">
                <div>
                  <p className="p-light2">
                    I have experience with Front End & Back End, I'm starting from
                    the backbone and now am using mostly with modern
                    frameworks like React, Express, Nestjs, Spring boot, Flutter
                  </p>
                  <br />
                  <p className={"p-light2"}>
                    As a web developer, I enjoy bridging the gap between
                    engineering and design - combining my technical knowledge
                    with my keen eye for design to create a beautiful product.
                    My goal is to always build applications that are scalable
                    and efficient under the hood while providing engaging,
                    pixel-perfect user experience
                  </p>
                </div>

                <div className={"flex flex-col gap-4"}>
                  <h4 className={"text-2xl font-semibold"}>Features</h4>

                  <ul className="pl-6 p-light2">
                    <li>
                      ✔️ Strong communication skills—easy to collaborate and negotiate with me
                    </li>
                    <li>
                      ✔️ Assionate about exploring new ideas and emerging technologies
                    </li>
                    <li>
                      ✔️ Capable of delivering clean, maintainable, and scalable code
                    </li>
                  
                  </ul>
                </div>

                {/* skills */}
                <div className={"flex flex-col gap-4 "}>
                  <h4 className={"text-2xl font-semibold"}>Skills</h4>
                </div>
                <div className={"flex flex-wrap gap-4 "}>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    rel="nofollow"
                  >
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                      width={100}
                      height={100}
                      alt="Javascript"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
              
                  <a href="https://www.typescriptlang.org/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                      width={100}
                      height={100}
                      alt="Typescript"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  >
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                      width={100}
                      height={100}
                      alt="HTML5"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
               
                  <a href="https://www.w3.org/TR/CSS/#css" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                      width={100}
                      height={100}
                      alt="CSS3"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://reactjs.org/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                      width={100}
                      height={100}
                      alt="React"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://sass-lang.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                      width={100}
                      height={100}
                      alt="Sass"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://tailwindcss.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                      width={100}
                      height={100}
                      alt="TailwindCSS"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://getbootstrap.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                      width={100}
                      height={100}
                      alt="Bootstrap"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://nextjs.org/docs" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                      width={100}
                      height={100}
                      alt="NextJs"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://webpack.js.org/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
                      alt="Webpack"
                      width={100}
                      height={100}
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  
                 
              
                
                  
                 
                  <a href="https://redux.js.org/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
                      width={100}
                      height={100}
                      alt="Redux"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://nodejs.org/en/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                      width={100}
                      height={100}
                      alt="NodeJS"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://nodejs.org/en/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                      width={100}
                      height={100}
                      alt="NodeJS"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://www.mysql.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                      width={100}
                      height={100}
                      alt="MySQL"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://www.mongodb.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                      width={100}
                      height={100}
                      alt="MongoDB"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://firebase.google.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                      width={100}
                      height={100}
                      alt="Firebase"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  
                  <a href="https://www.djangoproject.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
                      width={100}
                      height={100}
                      alt="Django"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a
                    href="https://www.adobe.com/uk/products/photoshop.html"
                    rel="nofollow"
                  >
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                      width={100}
                      height={100}
                      alt="Photoshop"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                  <a href="https://www.figma.com/" rel="nofollow">
                    <Image
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                      width={100}
                      height={100}
                      alt="Figma"
                      style={{ maxWidth: "100%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
