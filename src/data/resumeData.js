import certCrud from "../images/cert_crud.svg";
import certRelational from "../images/cert_relational.svg";
import certRag from "../images/cert_rag.svg";
import certSchema from "../images/cert_schema.svg";
import certDataTransformation from "../images/cert_data_transformation.svg";
import certVector from "../images/cert_vector.svg";

const contactData = {
  email: "venukakalhara@gmail.com",
  location: "Colombo, Sri Lanka"
};

const educationData = [
  {
    id: 1,
    institution: "SLIIT (Sri Lanka Institute of Information Technology)",
    degree: "BSc (Hons) in Information Technology",
    duration: "2023 - Present",
    description: "An Information Technology undergraduate specializing in software engineering, modern web technologies, and interactive UI/UX design. Passionate about building robust, scalable web applications and solving real-world problems with clean, efficient code."
  },
  {
    id: 2,
    institution: "Ruhunu Vijayaba National College (RVC)",
    degree: "G.C.E. Advanced Level (Technology Stream)",
    duration: "2008 - 2021",
    description: "Successfully completed secondary education specializing in the Technology stream with focus on Engineering Technology (ET), Science for Technology (SFT), and ICT, establishing a strong technical and analytical foundation for higher education."
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
    image: certCrud,
    pdf: process.env.PUBLIC_URL + "/certificates/crud_operations.pdf",
    link: "https://learn.mongodb.com/learn/course/crud-operations-in-mongodb-on-demand"
  },
  {
    id: 2,
    title: "Relational to Document Model",
    organization: "MongoDB University",
    year: "2026",
    image: certRelational,
    pdf: process.env.PUBLIC_URL + "/certificates/relational_to_document.pdf",
    link: "https://learn.mongodb.com/learn/course/relational-to-document-model"
  },
  {
    id: 3,
    title: "RAG with MongoDB",
    organization: "MongoDB University",
    year: "2026",
    image: certRag,
    pdf: process.env.PUBLIC_URL + "/certificates/rag_with_mongodb.pdf",
    link: "https://learn.mongodb.com/learn/course/rag-with-mongodb"
  },
  {
    id: 4,
    title: "Schema Design Patterns and Antipatterns",
    organization: "MongoDB University",
    year: "2026",
    image: certSchema,
    pdf: process.env.PUBLIC_URL + "/certificates/schema_design.pdf",
    link: "https://learn.mongodb.com/learn/course/schema-design-patterns-and-antipatterns"
  },
  {
    id: 5,
    title: "Fundamentals of Data Transformation",
    organization: "MongoDB University",
    year: "2026",
    image: certDataTransformation,
    pdf: process.env.PUBLIC_URL + "/certificates/data_transformation.pdf",
    link: "https://learn.mongodb.com/learn/course/fundamentals-of-data-transformation"
  },
  {
    id: 6,
    title: "Vector Search Fundamentals",
    organization: "MongoDB University",
    year: "2026",
    image: certVector,
    pdf: process.env.PUBLIC_URL + "/certificates/vector_search.pdf",
    link: "https://learn.mongodb.com/learn/course/vector-search-fundamentals"
  }
];

export { contactData, educationData, experienceData, skillsData, certificatesData };

