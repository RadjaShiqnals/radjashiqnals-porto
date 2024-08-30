import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * This component renders a list of projects and their details.
 * When a project is clicked, it will show a modal with the project's details
 */
const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Medtrack",
      description:
        "This is a website that is similar to a health clinic, where you can find information about health, such as how to take care of your stomach, how to dispose of waste properly, tips on how to stay healthy, and also a pharmacy where you can buy medicine for stomach problems, headaches, flu, and other diseases.",
      image: "src/assets/img/MedTrackLogo.png",
      designImages: [
        "src/assets/img/MedTrack1.png",
        "src/assets/img/MedTrack2.png",
        "src/assets/img/MedTrack3.png",
      ],
      url: "https://www.figma.com/design/lsYYkr3WivyFrGkZNYAWK5/MedTrack--nai-archive?node-id=0-1&node-type=CANVAS&t=Q0nZ34F9n1mB65PE-0",
      urlname: "Figma Link",
    },
    {
      id: 2,
      title: "Toko Online",
      description:
        "This is a simple e-commerce application with CRUD auth, data manipulation for managing or buying products. The application also has an admin feature that can manage user and product data.",
      image: "src/assets/img/TokoOnline.jpeg",
      designImages: [
        "src/assets/img/TokoOnline2.jpeg",
        "src/assets/img/TokoOnline3.jpeg",
        "src/assets/img/TokoOnline4.jpeg",
      ],
      url: "https://github.com/RadjaShiqnals/TokoOnline",
      urlname: "Github Link",
    },
    {
      id: 3,
      title: "Java Project",
      description:
        "This is a simple program made with Java programming language. The program can calculate the area and volume of rectangular solids.",
      image: "src/assets/img/Java.png",
      designImages: [
        "src/assets/img/Java1.png",
        "src/assets/img/Java2.png",
        "src/assets/img/Java3.png",
      ],
      url: "https://github.com/RadjaShiqnals/JavaProject",
      urlname: "Github Link",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id.toString()}
            onClick={() => setSelectedId(project.id)}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
          >
            <div className="flex items-center">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-24 w-24 mr-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-900">
                {project.title}
              </h2>
            </div>
            <br></br>
            <p
              className="text-gray-600 mb-4 overflow-hidden"
              style={{
                WebkitLineClamp: 1,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </p>
            {selectedId === project.id && (
              <div className="flex flex-wrap">
                {project.designImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="w-full md:w-1/2 p-2"
                  >
                    <img
                      src={image}
                      alt={project.title}
                      className="h-48 w-full object-cover object-center"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId.toString()}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg"
                onClick={() => setSelectedId(null)}
              >
                <div className="flex items-center pb-6">
                  <motion.img
                    src={projects.find((proj) => proj.id === selectedId).image}
                    alt={projects.find((proj) => proj.id === selectedId).title}
                    className="h-24 w-24 mr-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {projects.find((proj) => proj.id === selectedId).title}
                  </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                  {projects.find((proj) => proj.id === selectedId).designImages.map((image, index) => (
                    <div key={index} className="p-3 w-1/3">
                      <img
                        src={image}
                        alt={projects.find((proj) => proj.id === selectedId).title}
                        className="h-48 w-full object-cover object-left border-4 rounded"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4">
                  {projects.find((proj) => proj.id === selectedId).description}
                </p>
                <a
                  href={projects.find((proj) => proj.id === selectedId).url}
                  className="text-blue-500 hover:underline mt-4 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects.find((proj) => proj.id === selectedId).urlname}
                </a>
                <motion.button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;

