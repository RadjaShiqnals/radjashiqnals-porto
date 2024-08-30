/**
 * This component renders the about me page of the website
 */
function AboutMe() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-8 m-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          About Me
        </h1>
        <p className="text-gray-600 text-center mb-8">
          My name is Radja Genta Saputra, a web and game developer who is enthusiastic about coding and learning new technologies. I am the second child of three siblings. I am currently studying at SMK Telkom Malang, with a focus on software engineering.
        </p>

        <div className="flex justify-around items-center mb-4">
          <div className="rounded">
            <img src="src/assets/img/YearbookPhoto1.JPG" alt="Radja Shiqnals" className="w-32 h-32 rounded-full object-cover" />
          </div>
        </div>
        <p className="text-gray-600 text-center mb-8">
          I have a strong interest in software engineering and computer networks, and I am committed to continuously improving my coding skills. I also enjoy playing online games and exploring new technologies to develop my personal projects.
        </p>
        <p className="text-gray-600 text-center mb-8">
          <b>Education</b>
          <br />
          <a href="https://www.smktelkom-mlg.sch.id" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">SMK Telkom Malang</a>
        </p>
        <p className="text-gray-600 text-center mb-8">
          <b>Social Media</b>
          <br />
          <a href="https://www.youtube.com/@RadjaShiqnals" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <img src="src/assets/img/youtube.png" alt="youtube" className="w-6 mr-2 inline" />
            RadjaShiqnals
          </a>
          <br />
          <a href="https://twitter.com/RadjaShiqnals" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <img src="src/assets/img/XSocialMedia.png" alt="X" className="w-6 mr-2 inline" />
            RadjaShiqnals
          </a>
          <br />
          <a href="https://www.linkedin.com/in/radja-genta-saputra/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            <img src="src/assets/img/linkedin.png" alt="linkedin" className="w-6 mr-2 inline" />
            Radja Genta Saputra
          </a>
        </p>
        <p className="text-gray-600 text-center mb-8">
          I'm always happy to share with you, please visit my <a href="/projects">projects</a> or <a href="mailto:radjagentasaputra@gmail.com" className="text-blue-500 hover:underline">contact me</a> to share your experience or collaborate with me!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;



