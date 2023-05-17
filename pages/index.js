import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Bendaas Houssem Eddine portfolio</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Developedbyed
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white dark:text-black px-4 py-2 rounded-md ml-8"
                  href="/resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Bendaas Houssem Eddine
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
              {" "}
              I'm a highly motivated developer with a Masters degree in Software
              Engineering. My passion lies in crafting robust and efficient
              software solutions. With a strong foundation in Java, JavaScript,
              and TypeScript, I enjoy exploring the exciting possibilities
              offered by frameworks like Spring Boot, Angular, and React.
              Continuously expanding my knowledge, I stay updated with the
              latest industry trends and best practices. I strive to deliver
              clean and elegant code while maintaining a focus on scalability
              and performance. Let's connect and explore opportunities to
              collaborate on exciting projects!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex  gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Frontend Development
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating responsive websites tailor made to fit your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-black">
                Technologies I use
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                HTML, CSS, Javascript
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Angular/ React
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                TailwindCSS
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Backend development
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating Java based REST APIs using the springboot framework.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-black">
                Technologies I use
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Java, MySQL, PostgresSQL
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Springboot
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Consulting
              </h3>
              <p className="py-2 dark:text-gray-400">
                provide consulting for optimazing existing software, and
                conceptualizing new ones, and managing projects.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-black">
                Technologies I use
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">Scrum</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">UML</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Microsoft Project
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
