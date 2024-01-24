import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faJs,
  faPython,
  faReact,
  faCss3Alt,
  faHtml5,
  faAngular,
  faNode,
  faGithub,
  faGitlab,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="bg-black">
      <p className="text-center text-5xl">SKILLS</p>
      <div className="CardInfo w-12/12 bg-black mt-8 rounded-xl">
        <div className="flex justify-between items-center pl-10 pr-10">
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faJava} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                JAVA
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faJs} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                JAVA SCRIPT
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faPython} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                PYTHON
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">C++</p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                C++
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faReact} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                REACT
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faCss3Alt} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                CSS
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="CardInfo w-12/12 bg-black mt-8 rounded-xl">
        <div className="flex justify-between items-center pl-10 pr-10">
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faHtml5} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                HTML
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faAngular} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                ANGULAR
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faNode} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                NODE JS
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SQL
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                MONGO DB
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                MY SQL
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="CardInfo w-12/12 bg-black mt-8 rounded-xl">
        <div className="flex justify-between items-center pl-10 pr-10">
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faGithub} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                GITHUB
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faGitlab} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                GITLAB
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faJira} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                JIRA
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SQL
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                MONGO DB
              </h5>
            </div>
          </div>
          <div className="bg-black pt-2 pb-2 w-2/12 p-3">
            <div className="p-6 bg-white border border-black rounded-lg shadow dark:bg-black dark:border-black">
              <p className="text-center text-5xl">
                <FontAwesomeIcon icon={faDatabase} />
              </p>
              <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                MY SQL
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
