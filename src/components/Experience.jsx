import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import imagenD from "./daniel.jpg";

const Experience = () => {
  return (
    <div className="bg-black bg-center text-white">
      <Header />
      <p className="text-center text-5xl md:dark:text-amber-700">
        Experience & Education
      </p>
      <br></br>
      <div className="w-full">
        <br></br>
        <div className="flex">
          <div className="w-6/12 justify-items-center">
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Logo"
              src={imagenD}
              width="300"
            />
            <br></br>
            <div className=" content-center w-10/12 pt-2 ">
              <h1 className="text-center">
                Using the tools and knowledge required for my profession, with
                the purpose of helping companies to reach their goals and meet
                the requirements necessary. By contributing my skills as well as
                learning for others. In order, to find a successful, and mutual
                agreement. In result, give me the opportunity to grow as a
                person and as an engineer. (Looking for employment opportunities
                in Software Development/Engineering).
              </h1>
            </div>
          </div>
          <div className="w-6/12 pr-8">
            <div className="rounded-xl  hover:bg-gray-950 first-line:md:dark:hover:text-amber-700">
              <div className="justify-items-end">
                <div className="text-center text-3xl w-8/12 ">
                  <h1>SANTANDER</h1>
                </div>
              </div>
              <br></br>
              <div className="flex">
                <div className="w-4/12 rounded-xl ">
                  <h1 className="text-lg">Nov 2023 - Jan 2025</h1>
                </div>
                <div className="w-8/12 rounded-xl">
                  <h2 className="text-justify">
                    At my previous job, I contributed to the "Migración de
                    Constancias Fiscales" project, which focused on migrating
                    tax-related records from an existing database storage
                    system. I led the migration of a legacy database (old model)
                    to a new schema, specifically targeting fiscal records
                    ("constancias f iscales"). My responsibilities included
                    analyzing and formatting data to align with the new database
                    model, ensuring a smooth and error-free migration process.
                    Additionally, I developed software using Spring Batch and
                    Spring Boot to process large volumes of data efficiently,
                    optimizing the overall workflow.
                    <h2 className="text-sm first-letter:font-bold">
                      Technologies: Java, Soring Boot, Spring Batch, Jenkins,
                      SonarQube, Doker, Oracle, and Git Hub.
                    </h2>
                  </h2>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="rounded-xl  hover:bg-gray-950 first-line:md:dark:hover:text-amber-700">
              <div className="justify-items-end">
                <div className="text-center text-3xl w-8/12 ">
                  <h1>SUPER Q</h1>
                </div>
              </div>
              <br></br>
              <div className="flex">
                <div className="w-4/12 rounded-xl ">
                  <h1 className="text-lg">Sep 2022 - Nov 2023</h1>
                </div>
                <div className="w-8/12 rounded-xl">
                  <h2 className="text-justify">
                    At Super Q, I successfully implemented the Super Q ERP
                    system across 220 stores, ensuring smooth deployment while
                    providing ongoing bug fixes and system optimizations. To
                    enhance point-of-sale management, I developed a web-based
                    platform using HTML, CSS, Bootstrap, jQuery, Ajax, and
                    JavaScript for the front-end, while building the backend
                    with a Java API using the Grails framework. Additionally, I
                    created SQL stored procedures to generate various reports.
                    To further improve reporting capabilities, I developed a
                    report viewing platform with a Node.js backend and a React
                    front-end, leveraging SQL for efficient database management.
                    <h2 className="text-sm first-letter:font-bold">
                      Technologies: Java, SQL, Grails, NodeJS, React, Tailwind,
                      Axios, Groovy, Gradle, Bootstrap, jQuery, Ajax,
                      JavaScript, HTML CSS, JavaFX, GitHub, Jira.
                    </h2>
                  </h2>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="rounded-xl  hover:bg-gray-950 first-line:md:dark:hover:text-amber-700">
              <div className="justify-items-end">
                <div className="text-center text-3xl w-8/12 ">
                  <h1>SINTEL TI</h1>
                </div>
              </div>
              <br></br>
              <div className="flex">
                <div className="w-4/12 rounded-xl ">
                  <h1 className="text-lg">Jan 2020 - Sep 2022</h1>
                </div>
                <div className="w-8/12 rounded-xl">
                  <h2 className="text-justify">
                    During my time at Sintel Ti, I developed a Point-of-Sale
                    system to manage Super Q convenience stores efficiently. I
                    designed and implemented Java APIs using the Grails
                    framework to handle database requests, ensuring seamless
                    data processing. Additionally, I built and maintained a SQL
                    Server database to store and manage system data securely. To
                    enhance user experience, I developed the front-end using
                    JavaFX and Java, creating an intuitive and user-friendly
                    interface.
                    <h2 className="text-sm first-letter:font-bold">
                      Technologies: Java, SQL, Grails, Bootstrap, jQuery, Ajax,
                      JavaScript, HTML CSS, JavaFX.
                    </h2>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <Footer />
    </div>
  );
};
export default Experience;
