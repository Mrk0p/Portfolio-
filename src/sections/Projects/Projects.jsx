import styles from './ProjectsStyles.module.css';
import video from '../../assets/video.png';
import figma from '../../assets/figma.png';
import kanban from '../../assets/kanban-board.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Porfolio from '../../assets/portfolio.png'


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={video}
          link="https://zoom-clone-plum.vercel.app/"
          h3="Video Calling Application"
          p="❇ Developed a seamless video calling application using Next.js and React.js, styled with Tailwind CSS. Integrated real-time communication with Stream API and ensured secure user authentication via Clerk Auth.🚀" 
        />
        <ProjectCard
          src={kanban}
          link="https://kanban-board-seven-bice.vercel.app/"
          h3="Kanban board"
          p="❇ Built an interactive web application using Vite and React.js, featuring dynamic drag-and-drop functionality with DnD Kit. Styled the interface with Tailwind CSS for a modern, responsive design"
        />
        <ProjectCard
          src={figma}
          link="https://figma-clone-ivory-eight.vercel.app/"
          h3="Figma clone"
          p="❇ Created a dynamic web application with Next.js and React.js, incorporating interactive canvas elements using Fabric.js and real-time collaboration features with Liveblocks. Enhanced the UI with Tailwind CSS for a sleek, responsive design."
        />
        <ProjectCard
          src={fitLift}
          link="/"
          h3="Chat App"
          p="❇ Developed a robust web application with React.js and Tailwind CSS, utilizing Firebase for backend services, including real-time database, authentication, and hosting solutions."
        />
        <ProjectCard
          src={Porfolio}
          link="/"
          h3="Portfolio"
          p="❇personal portfolio website using React.js, featuring a modern and responsive design. Integrate EmailJS for a seamless contact form that allows visitors to send messages directly to your email. Implement a dark mode toggle to enhance user experience, providing an option to switch between light and dark themes. Showcase your projects and skills effectively, with each project having a brief description and link. This portfolio serves as a professional online presence to highlight your web development expertise."
        />
      </div>
    </section>
  );
}

export default Projects;
