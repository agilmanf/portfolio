import { Project, ProjectPlatform, ProjectType } from "src/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Pasar Ikan",
    subTitle: "eCommerce",
    shortDescription:
      "An online store offering a wide variety of fish and seafood.",
    description: (
      <>
        <p>
          Pasar Ikan is the first website I developed with a team during the
          initial stages of a programming bootcamp in early 2022. This project
          was a simple e-commerce platform focused on seafood products, built
          using vanilla JavaScript and the Bootstrap CSS framework. The data was
          sourced from MockAPI.
        </p>

        <p>
          <strong>Objectives:</strong>
          <ul className="list-disc ml-5">
            <li>To create a basic e-commerce website for seafood products.</li>
            <li>
              To implement user authentication with a signup and login system.
            </li>
            <li>
              To develop essential e-commerce functionalities like adding items
              to a cart and order checkout.
            </li>
          </ul>
        </p>

        <p>
          <strong>Process and Methodology:</strong>
          <br /> The project began with planning and design discussions among
          team members. Using vanilla JavaScript and Bootstrap, we developed the
          core features and ensured the basic functionality of the e-commerce
          site. We used MockAPI for data retrieval and local storage for storing
          user data such as login credentials and cart items.
        </p>

        <p>
          <strong>Outcomes and Results:</strong>
          <br /> Despite being our first project, Pasar Ikan successfully
          delivered a functional e-commerce platform with the following
          features:
          <ul className="list-disc ml-5">
            <li>
              User signup and login system (data stored in local storage).
            </li>
            <li>
              Ability to add products to the cart and proceed to checkout.
            </li>
            <li>
              Display of seafood products with details fetched from MockAPI.
            </li>
          </ul>
          However, the project had limitations, including incomplete mobile
          responsiveness and basic feature sets.
        </p>

        <p>
          <strong>Conclusion:</strong>
          <br /> Developing Pasar Ikan was a significant learning experience. I
          gained valuable insights and skills, such as: The importance of mobile
          responsiveness in web development, collaborating effectively with a
          team using Git, fetching data from APIs and enhancing my programming
          logic.
        </p>

        <p>
          This project laid a strong foundation for my future endeavors in web
          development, providing practical experience in creating functional web
          applications and collaborating within a team.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/pasar-ikan/thumbnail.jpg",
    imageUrls: [
      "/images/projects/pasar-ikan/previews/preview-1.webp",
      "/images/projects/pasar-ikan/previews/preview-2.webp",
      "/images/projects/pasar-ikan/previews/preview-3.webp",
      "/images/projects/pasar-ikan/previews/preview-4.webp",
      "/images/projects/pasar-ikan/previews/preview-5.webp",
    ],
    projectUrl: "https://pasar-ikan.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/pasar-ikan",
    year: 2022,
    techs: ["Vanilla Javascript", "Bootstrap", "MockAPI"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.EXPERIMENTAL,
  },
  {
    id: "project-2",
    title: "Haku Library",
    subTitle: "Online Library",
    shortDescription:
      "A website offering a wide selection of e-books for reading.",
    description: (
      <>
        <p>
          Haku Library is a website developed in 2022 during a bootcamp, in
          collaboration with three team members. The primary aim of this project
          was to apply the lessons learned in using the React.js framework,
          focusing on front-end development.
        </p>

        <p>
          <strong>Objectives:</strong>
          <ul className="list-disc ml-5">
            <li>
              To create an online library showcasing data from the Google Books
              API.
            </li>
            <li>
              To implement a range of user functionalities, enhancing the
              overall user experience.
            </li>
          </ul>
        </p>

        <p>
          <strong>Process and Methodology:</strong>
          <br /> The project involved collaborative planning and execution. We
          divided tasks among team members to maximize efficiency and ensure
          comprehensive coverage of the features. Using React.js, we focused on
          building a dynamic and responsive front-end. For data management, we
          integrated Redux to handle the application state, and utilized local
          storage for data persistence.
        </p>

        <p>
          <strong>Features:</strong>
          <ul className="list-disc ml-5">
            <li>User authentication: Login and register.</li>
            <li>Book display: Show all books with sorting by category.</li>
            <li>Book search functionality.</li>
            <li>User interactions: Add books to cart and favorites.</li>
            <li>User profile: Edit profile information.</li>
            <li>
              Data handling: Fetching, sorting, limiting, searching, and
              pagination of data.
            </li>
          </ul>
        </p>

        <p>
          <strong>Outcomes and Results:</strong>
          <br /> The Haku Library project successfully provided an interactive
          online library with several key features, including user
          authentication, book categorization, search functionality, and
          personalized user interactions. Despite being a front-end focused
          project, it demonstrated effective data management and user experience
          enhancement.
        </p>

        <p>
          <strong>Conclusion:</strong>
          <br /> From this project, I gained valuable insights into:
          <ul className="list-decimal ml-5">
            <li>Task distribution and collaboration within a larger team.</li>
            <li>
              Advanced API handling, including sorting, data limiting,
              searching, and pagination.
            </li>
            <li>The benefits of using state management with Redux.</li>
            <li>The efficiency of React.js in creating reusable components.</li>
          </ul>
        </p>

        <p>
          The Haku Library project significantly deepened my understanding of
          React.js and state management, and enhanced my ability to work
          effectively in a team setting.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/haku-library/thumbnail.jpg",
    imageUrls: [
      "/images/projects/haku-library/previews/preview-1.webp",
      "/images/projects/haku-library/previews/preview-2.webp",
      "/images/projects/haku-library/previews/preview-3.webp",
      "/images/projects/haku-library/previews/preview-4.webp",
      "/images/projects/haku-library/previews/preview-5.webp",
      "/images/projects/haku-library/previews/preview-6.webp",
      "/images/projects/haku-library/previews/preview-7.webp",
    ],
    projectUrl: "https://haku-library.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/haku-library",
    year: 2022,
    techs: ["React.js", "Bootstrap", "Google Books API"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.EXPERIMENTAL,
  },
  {
    id: "project-3",
    title: "Melodico",
    subTitle: "Music Streaming WebApp",
    shortDescription: "A free music streaming service accessible to everyone.",
    description: (
      <>
        <p>
          Melodico is a free music streaming platform developed as the final
          project during a bootcamp in 2022. This project was created in
          collaboration with a teammate, utilizing the MERN stack over a
          three-month period. It represents our first full-stack development
          project.
        </p>

        <p>
          <strong>Objectives:</strong>
          <ul className="list-disc ml-5">
            <li>
              To develop a comprehensive music streaming platform with both
              front-end and back-end functionalities.
            </li>
            <li>
              To implement user authentication, music management, and
              interactive features.
            </li>
          </ul>
        </p>

        <p>
          <strong>Process and Methodology:</strong>
          <br /> The project began with thorough planning and task allocation.
          We used React.js, Bootstrap, and illustrations from Unsplash for the
          front end, while the back end was built using Node.js, Express.js, and
          MongoDB. AWS S3 was employed for data storage, and Redux was used for
          state management. We emphasized creating a cohesive and visually
          appealing user interface and ensuring robust back-end functionality.
        </p>

        <p>
          <strong>Features:</strong>
          <ul className="list-disc ml-5">
            <li>User authentication: Login and register.</li>
            <li>
              Music management: Add songs, listen to songs, add favorites.
            </li>
            <li>Search functionality: Search songs and artists.</li>
            <li>
              Data handling: Sorting, profile editing, uploading images and
              songs.
            </li>
            <li>
              Theming: Consistent color schemes, font sizes, and layout
              structures.
            </li>
            <li>
              Interactivity: Loading animations for a more dynamic user
              experience.
            </li>
          </ul>
        </p>

        <p>
          <strong>Outcomes and Results:</strong>
          <br /> Developing Melodico was a challenging and rewarding experience.
          The platform includes comprehensive features such as user
          authentication, music search and playback, and user profile
          management. We successfully implemented JWT for secure authentication
          and handled file uploads to AWS S3.
        </p>

        <p>
          <strong>Conclusion:</strong>
          <br /> From this project, I gained significant insights into:
          <ul className="list-decimal ml-5">
            <li>
              The complexity and resource requirements of developing a
              full-stack application.
            </li>
            <li>
              The importance of selecting the right server for deployment to
              balance efficiency and cost.
            </li>
            <li>
              The critical role of secure authentication and data encryption.
            </li>
            <li>
              The necessity of validation on both the back end and front end to
              ensure data integrity.
            </li>
            <li>
              The challenges of handling file uploads and the need for efficient
              storage solutions, including file compression.
            </li>
            <li>
              The importance of coding standards in team projects for
              maintainability and scalability.
            </li>
          </ul>
        </p>

        <p>
          <strong>Additional Learnings:</strong>
          <ul className="list-disc ml-5">
            <li>
              Implementing comprehensive error handling and user feedback
              mechanisms.
            </li>
            <li>
              The importance of continuous integration and deployment (CI/CD)
              pipelines for seamless updates and maintenance.
            </li>
            <li>
              Enhancing user experience through responsive design and intuitive
              navigation.
            </li>
          </ul>
        </p>

        <p>
          The Melodico project not only deepened my technical skills but also
          highlighted the importance of teamwork, project management, and
          strategic planning in software development.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/melodico/thumbnail.jpg",
    imageUrls: ["/images/projects/melodico/preview.webp"],
    projectUrl: "https://melodico.netlify.app/",
    sourceUrl: "https://github.com/agilmanf/melodico",
    year: 2022,
    techs: ["React.js", "Bootstrap", "Express.js", "MongoDB", "AWS S3"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.EXPERIMENTAL,
  },
  {
    id: "project-4",
    title: "Game Gratis",
    subTitle: "Free Games Portal",
    shortDescription:
      "A collection of free and legal games from various platforms.",
    description: (
      <>
        <p>
          Game Gratis is a website dedicated to providing information about free
          and legal games. Recognizing that many people still play pirated
          games, this project aims to showcase the abundance of high-quality
          free games available. This experimental project was created while I
          was learning the Next.js framework, TypeScript, and Tailwind CSS.
        </p>

        <p>
          <strong>Objectives:</strong>
          <ul className="list-disc ml-5">
            <li>
              To create an informative platform highlighting free and legal
              games.
            </li>
            <li>
              To explore and experiment with Next.js, TypeScript, and Tailwind
              CSS.
            </li>
            <li>
              To encourage gamers to choose legal alternatives over pirated
              games.
            </li>
          </ul>
        </p>

        <p>
          <strong>Process and Methodology:</strong>
          <br /> The project was initiated as a learning experiment. I utilized
          Next.js for server-side rendering and static site generation,
          TypeScript for type safety and better code management, and Tailwind
          CSS for efficient and responsive styling. Game data was sourced from
          the FreeToGame public API.
        </p>

        <p>
          <strong>Features:</strong>
          <ul className="list-disc ml-5">
            <li>Display of a wide range of free and legal games.</li>
            <li>
              Detailed information about each game, including genre, platform,
              and descriptions.
            </li>
            <li>User-friendly interface with responsive design.</li>
            <li>
              Efficient data fetching and rendering using Next.js capabilities.
            </li>
          </ul>
        </p>

        <p>
          <strong>Outcomes and Results:</strong>
          <br /> Game Gratis successfully demonstrated the power and flexibility
          of Next.js, TypeScript, and Tailwind CSS. The website provides a
          comprehensive and attractive presentation of free games, promoting
          legal gaming alternatives.
        </p>

        <p>
          <strong>Conclusion:</strong>
          <br /> Through this project, I gained valuable insights into:
          <ul className="list-decimal ml-5">
            <li>
              The benefits of using Next.js for both server-side and client-side
              rendering.
            </li>
            <li>
              The advantages of TypeScript in improving code quality and
              maintainability.
            </li>
            <li>
              The efficiency of Tailwind CSS in creating responsive and visually
              appealing designs.
            </li>
            <li>
              The process of integrating and utilizing public APIs for dynamic
              content.
            </li>
          </ul>
        </p>

        <p>
          <strong>Additional Learnings:</strong>
          <ul className="list-disc ml-5">
            <li>
              The importance of clean and intuitive UI/UX design to enhance user
              engagement.
            </li>
            <li>
              The role of ethical considerations in software development,
              promoting legal alternatives to piracy.
            </li>
            <li>
              The benefits of experimenting with new technologies to expand
              skill sets and improve problem-solving abilities.
            </li>
          </ul>
        </p>

        <p>
          Game Gratis not only enriched my technical skills but also reinforced
          the significance of ethical software practices and the potential
          impact of well-designed informational platforms.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/game-gratis/thumbnail.jpg",
    imageUrls: [
      "/images/projects/game-gratis/previews/preview-1.webp",
      "/images/projects/game-gratis/previews/preview-2.webp",
      "/images/projects/game-gratis/previews/preview-3.webp",
    ],
    projectUrl: "https://gamegratis.vercel.app/",
    sourceUrl: "https://github.com/agilmanf/gamegratis",
    year: 2022,
    techs: ["Next.js", "Typescript", "Tailwind"],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.REAL,
  },
  {
    id: "project-5",
    title: "Skilvul",
    subTitle: "Learning Platform",
    shortDescription:
      "An educational platform offering content on digital skills and technology.",
    description: (
      <>
        <p>
          Skilvul is an educational platform offering a wide range of digital
          learning content, including self-paced courses, live classes,
          webinars, challenges, and scholarship programs. It features quizzes to
          assess student understanding and an integrated IDE that supports HTML,
          CSS, and JavaScript, making it easier for students to practice coding.
          The platform also includes a dedicated section for scholarship
          programs, called Skilvul Program, which functions as an online
          classroom. This helps mentors manage class materials, syllabuses,
          attendance, permissions, assessments, and reports. Additionally, there
          is a comprehensive dashboard for managing all aspects of the platform.
        </p>

        <p>
          I joined Skilvul as a full stack web developer, where my primary
          responsibilities included website maintenance, bug fixes, and feature
          enhancements. Adapting to their technology stack—which includes
          Next.js and Chakra UI for the front end, and Golang, GraphQL, and
          Postgres for the back end—was a significant challenge. However, within
          a month, I was proficient enough to start adding new features. I also
          refactored deprecated backend code from Node.js and Prisma to Golang,
          significantly improving data retrieval times. Over my two years at
          Skilvul, I contributed to various aspects of the platform, enhancing
          my skills and adapting to new technologies, while helping to improve
          the functionality and user experience of the website.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/skilvul/thumbnail.png",
    imageUrls: [
      "/images/projects/skilvul/previews/picture-1.webp",
      "/images/projects/skilvul/previews/picture-2.webp",
      "/images/projects/skilvul/previews/picture-3.webp",
      "/images/projects/skilvul/previews/picture-4.webp",
      "/images/projects/skilvul/previews/picture-5.webp",
      "/images/projects/skilvul/previews/picture-6.webp",
      "/images/projects/skilvul/previews/picture-7.webp",
      "/images/projects/skilvul/previews/picture-8.webp",
      "/images/projects/skilvul/previews/picture-9.webp",
      "/images/projects/skilvul/previews/picture-10.webp",
    ],
    projectUrl: "https://skilvul.com/",
    sourceUrl: null,
    year: 2024,
    techs: [
      "Next.js",
      "Typescript",
      "Chakra UI",
      "GraphQL",
      "Redis",
      "Golang",
      "PostgreSQL",
      "AWS",
    ],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.REAL,
  },
  {
    id: "project-6",
    title: "Skilroom",
    subTitle: "Web Builder",
    shortDescription:
      "Platform that simplifies website creation and student management for digital content.",
    description: (
      <>
        <p>
          Skilroom is a project developed under the Skilvul company, aimed at
          simplifying the creation of websites or landing pages, often referred
          to as a web builder. The platform allows users to easily customize
          their website's appearance through a partner dashboard. It supports
          the creation of various products such as classes, webinars, and
          digital assets, enabling website owners or partners to monetize their
          offerings. Additionally, Skilroom includes a simple certificate
          generator that automatically awards certificates to students upon
          completing a class or webinar.
        </p>

        <p>
          The websites configured in the dashboard are presented as standalone
          sites accessible to users or prospective students, with customizable
          domains, currently under the subdomain skilroom.com. Skilroom also
          facilitates the management of registered students, aligning with its
          core purpose of streamlining the administration of learning content.
        </p>

        <p>
          In 2023, my colleague and I embarked on developing Skilroom, tackling
          both the front-end and back-end. This project was particularly
          challenging as it required designing the database from scratch,
          selecting suitable technologies, setting up CI/CD pipelines,
          configuring servers, and managing deployment processes. Despite the
          challenges, the experience was incredibly rewarding, providing
          valuable lessons and extensive hands-on experience in full-stack
          development.
        </p>
      </>
    ),
    thumbnailUrl: "/images/projects/skilroom/thumbnail.png",
    imageUrls: [
      "/images/projects/skilroom/previews/preview-1.webp",
      "/images/projects/skilroom/previews/preview-2.webp",
      "/images/projects/skilroom/previews/preview-3.webp",
      "/images/projects/skilroom/previews/preview-4.webp",
      "/images/projects/skilroom/previews/preview-5.webp",
      "/images/projects/skilroom/previews/preview-6.webp",
      "/images/projects/skilroom/previews/preview-7.webp",
      "/images/projects/skilroom/previews/preview-8.webp",
      "/images/projects/skilroom/previews/preview-9.webp",
      "/images/projects/skilroom/previews/preview-10.webp",
      "/images/projects/skilroom/previews/preview-11.webp",
      "/images/projects/skilroom/previews/preview-12.webp",
      "/images/projects/skilroom/previews/preview-13.webp",
    ],
    projectUrl: "https://beta.skilroom.com/",
    sourceUrl: null,
    year: 2024,
    techs: [
      "Remix",
      "Typescript",
      "Tailwind",
      "Golang",
      "Redis",
      "PostgreSQL",
      "Turborepo",
      "AWS",
    ],
    platforms: new Set([ProjectPlatform.WEB]),
    type: ProjectType.REAL,
  },
];
