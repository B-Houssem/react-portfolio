import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Bendaas Houssem Eddine Resume</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <a className="text-xl font-burtons dark:text-white" href="/">
              B-Houssem
            </a>
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
          <div className="lg:flex  gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Bendaas Houssem Eddine
              </h3>
              <p className="py-2 dark:text-gray-400">Software Developer</p>
              <p className="py-2 dark:text-gray-400">Constantine, Algeria</p>
              <p className="py-2 dark:text-gray-400">00213673361439</p>
              <p className="py-2 dark:text-gray-400">
                houssembendaas00@gmail.com
              </p>
              <p className="py-2 dark:text-gray-400">
                https://github.com/B-Houssem
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Experience
              </h3>
              <p className="py-2 dark:text-gray-400">Front-End Web developer</p>
              <p className="py-2 dark:text-gray-400">
                SAFE DIGITAL HEALTH, BORDJ BOU ARRERIDJ, ALGERIA, SEPTEMBER 2022
                – NOW
              </p>
              <p className="py-2 dark:text-gray-400">
                During this period I was responsible for developing the
                startup's website based on HTML, javascript, and CSS (tailwind
                CSS), as well as other responsibilities such as creating and
                managing social networks, contributing to the development and
                design of their software and systems, and doing the necessary
                research and gathering of information.
              </p>
            </div>
          </div>
          <div className="lg:flex  gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Education
              </h3>
              <h3 className="py-2 dark:text-gray-400">
                Masters in Software Engineering
              </h3>
              <p className="py-2 dark:text-gray-400">
                University Constantine 2 - Abdelhamid Mehri
              </p>
              <h3 className="py-2 dark:text-gray-400">
                Bachelors in Software Engineering
              </h3>
              <p className="py-2 dark:text-gray-400">
                University Constantine 2 - Abdelhamid Mehri
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-950 to-blue-500 w-full">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                SKILLS
              </h3>
              <p className="py-2 dark:text-gray-400">
                Front-End: TypeScript, JavaScript, React, HTML5, CSS3
              </p>
              <p className="py-2 dark:text-gray-400">
                Back-End: Java, MySQL, PostgreSQL
              </p>
              <p className="py-2 dark:text-gray-400">
                Tools & Methods: Git, GitHub, Heroku, Intellij, Postman, Chrome
                Dev Tools, VSCode
              </p>
              <p className="py-2 dark:text-gray-400">
                Languages: English, Arabic, French
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
