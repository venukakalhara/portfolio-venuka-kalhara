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
    title: "CRUD Operations in MongoDB (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/crud-operations-in-mongodb-on-demand",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-f5bb991e-8ed4-4be8-b13b-1859a139ba64-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T045744Z&X-Amz-Expires=900&X-Amz-Signature=2f480781c3469f99add3445fcf3ed3f21c43f5e532d02b71377ea138bdcc6e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    id: 2,
    title: "Relational to Document Model (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/relational-to-document-model",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-d9f61c37-c337-42ef-9cb5-81b27f0a945d-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T045833Z&X-Amz-Expires=900&X-Amz-Signature=cdffe4be404fa0ada6927fafcaeecddf5bf81028301df5baeaba2a6025eef42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    id: 3,
    title: "RAG with MongoDB (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/rag-with-mongodb",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-76b0915c-1a2a-4f4b-9524-db001f82ab59-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T045930Z&X-Amz-Expires=900&X-Amz-Signature=ac15914a41543808367c671d3cdfcd9002fbe162481358bb6db4937a2b89ffee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    id: 4,
    title: "Schema Design Patterns and Antipatterns (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/schema-design-patterns-and-antipatterns",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-15549744-fdab-4cdb-ad08-8e59e74e90e2-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T050015Z&X-Amz-Expires=900&X-Amz-Signature=67ffa6dbf3cae7e29081ceb36e155a97ad99bacd60a094cdd07f4fcd55c9ebf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    id: 5,
    title: "Fundamentals of Data Transformation (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/fundamentals-of-data-transformation",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-2ef4da90-fd3e-4960-9e53-b2229bd1f140-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T050053Z&X-Amz-Expires=900&X-Amz-Signature=75c2c1a71099bdc1456b1cc1d61857ab8beb8d3c83aa453a561fa5390d71d7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    id: 6,
    title: "Vector Search Fundamentals (on-demand)",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/learn/course/vector-search-fundamentals",
    pdf: "https://ti-user-certificates.s3.us-east-1.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/991708bf-c1a3-4b82-bc20-e7b858d18f5b-venuka-kalhara-f12b5782-292f-4b07-9a6d-bcd884a0f43d-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260823T050136Z&X-Amz-Expires=900&X-Amz-Signature=64b1e25eb8b455bb2f05ed5978da9a91450abad496549c62bf02552c610ecb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  }
];

export { contactData, educationData, experienceData, skillsData, certificatesData };
