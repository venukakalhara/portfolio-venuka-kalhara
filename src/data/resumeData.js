import mongodbIcon from "../images/mongodb_icon.svg";
import mongodbAdminImg from "../images/mongodb_admin.png";
import mongodbGettingStartedImg from "../images/mongodb_getting_started.png";
import mongodbMetricsImg from "../images/mongodb_metrics.png";
import mongodbSecurityImg from "../images/mongodb_security.png";

const contactData = {
  email: "venukakalhara@gmail.com",
  location: "Colombo, Sri Lanka"
};

const educationData = [
  {
    id: 1,
    institution: "SLIIT (Sri Lanka Institute of Information Technology)",
    degree: "BSc (Hons) in Information Technology",
    duration: "Present",
    description: "Specializing in software development, UI/UX design, and Human-Computer Interaction (HCI). Passionate about building intuitive, user-centered web applications."
  }
];

const experienceData = [];

const skillsData = {
  coding: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Node.js & Express.js", level: 80 },
    { name: "MongoDB & SQL", level: 82 }
  ],
  professional: [
    { name: "UI/UX Design & Figma", level: 92 },
    { name: "Wireframing & Prototyping", level: 90 },
    { name: "User Research & Journey Mapping", level: 95 },
    { name: "Usability Testing", level: 88 },
    { name: "Git & GitHub", level: 85 }
  ]
};

const certificatesData = [
  {
    id: 1,
    title: "CRUD Operations in MongoDB",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/crud_operations.pdf",
    link: "https://learn.mongodb.com/learn/course/crud-operations-in-mongodb-on-demand"
  },
  {
    id: 2,
    title: "Relational to Document Model",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/relational_to_document.pdf",
    link: "https://learn.mongodb.com/learn/course/relational-to-document-model"
  },
  {
    id: 3,
    title: "RAG with MongoDB",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/rag_with_mongodb.pdf",
    link: "https://learn.mongodb.com/learn/course/rag-with-mongodb"
  },
  {
    id: 4,
    title: "Schema Design Patterns and Antipatterns",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/schema_design.pdf",
    link: "https://learn.mongodb.com/learn/course/schema-design-patterns-and-antipatterns"
  },
  {
    id: 5,
    title: "Fundamentals of Data Transformation",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/data_transformation.pdf",
    link: "https://learn.mongodb.com/learn/course/fundamentals-of-data-transformation"
  },
  {
    id: 6,
    title: "Vector Search Fundamentals",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbIcon,
    pdf: process.env.PUBLIC_URL + "/certificates/vector_search.pdf",
    link: "https://learn.mongodb.com/learn/course/vector-search-fundamentals"
  },
  {
    id: 7,
    title: "MongoDB Associate Administrator",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbAdminImg,
    pdf: "https://learn.mongodb.com/",
    link: "https://learn.mongodb.com/"
  },
  {
    id: 8,
    title: "MongoDB Getting Started",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbGettingStartedImg,
    pdf: "https://learn.mongodb.com/",
    link: "https://learn.mongodb.com/"
  },
  {
    id: 9,
    title: "MongoDB Metrics",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbMetricsImg,
    pdf: "https://learn.mongodb.com/",
    link: "https://learn.mongodb.com/"
  },
  {
    id: 10,
    title: "MongoDB Security",
    organization: "MongoDB University",
    year: "2026",
    image: mongodbSecurityImg,
    pdf: "https://learn.mongodb.com/",
    link: "https://learn.mongodb.com/"
  }
];

export { contactData, educationData, experienceData, skillsData, certificatesData };
