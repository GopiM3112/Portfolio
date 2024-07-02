import project1 from "../assets/projects/project.png";
import project2 from "../assets/projects/todolist.png";
import project3 from "../assets/projects/game xox.png";

export const HERO_CONTENT = `I am a dedicated and versatile full stack developer, passionate about building efficient and user-friendly web applications. With 5 years of professional experience, I have expertise in various technologies, including React, MySQL, PostgreSQL, and Java Spring Boot. My journey in web development started with a deep curiosity about how things work, evolving into a career focused on continuous learning and adapting to new challenges. I excel in collaborative environments, enjoying the process of solving complex problems to deliver high-quality solutions. Beyond coding, I stay active, explore new technologies, and contribute to open-source projects`;

export const ABOUT_TEXT = `I am a passionate full stack developer with a talent for creating robust and scalable web applications. With 5 years of hands-on experience, I have developed proficiency in front-end technologies such as HTML5, CSS, and JavaScript, as well as back-end technologies including Java, MySQL, PostgreSQL, and Spring Boot. My objective is to utilize my expertise to develop innovative solutions that propel business growth and provide exceptional user experiences. I thrive on tackling complex challenges and continuously seek opportunities to expand my skill set and stay ahead of technological advancements`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Feb 2024",
    role: "Java Full Stack Developer Intern",
    company: "Kodnest",
    description: `Successfully completed a six-month internship focusing on Java & Python full stack development. Explored competitive programming, web development, SQL, and both manual & automation testing. The program emphasized versatility, preparing me for the dynamic tech landscape. Ready to contribute with a solid foundation in full-stack development and testing.`,
    technologies: ["Javascript", "React.js", "Java", "Springboot", "Html","CSS","SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Tune-Hub",
    image: project1,
    description:"The project consists of two modules: ADMIN and USER. An admin can register as an administrator and log in to the application. Upon entering the correct credentials, the admin is redirected to the admin login page. Invalid login attempts are prevented by checking the stored data in the database. After logging in, the admin can add songs, view songs, add playlists, and view playlists. The admin can establish a many-to-many relationship between songs and playlists to enhance efficiency. A user can register into the application. Upon registration, they can log in to hear songs only if they are a premium user. If not, the user is prompted to purchase a premium membership to access the songs. Duplicate user registrations are prevented by checking the email ID of the user. During login, the user must enter the correct email ID and password. If the credentials match those stored in the database, the user is permitted to log in. Otherwise, it's considered an invalid login, and the user is redirected to the login page. Once successfully registered, the user can listen to songs. If the user is not a premium member, they are directed to purchase a premium subscription via Razorpay",
    technologies: ["HTML", "CSS", "React", "javascript", "Java","Sql"],
    link: "https://tunehub3112.netlify.app" // Add your project link here
  },
  {
    title: "TO-DO-LIST | Mini-Project",
    image: project2 ,
    description: "I have completed a TO-DO-LIST project using HTML, CSS, and React.js. The app features a user-friendly interface, dynamic updates, and responsive design, showcasing my front-end development skills.",
    technologies: ["React.js", "HTML", "CSS"],
    link: "https://to-do-list3112.netlify.app"
  },
  {
    title: "TIC TAC TOE GAME | Mini-Project",
    image: project3,
    description: "TIC TAC TOE GAME project using HTML, CSS, and React.js. The project showcases a dynamic and interactive game interface with responsive design, demonstrating my expertise in modern web technologies.",
    technologies: ["React.js", "HTML", "CSS"],
    link: "https://tictactoe-xox-game.netlify.app"
  },
];


export const CONTACT = {
  address: "Vellore, Tamilnadu",
  phoneNo: "9600505918",
  email: "gopigopigr31@gmail.com",
};
