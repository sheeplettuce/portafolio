// ============ CONTENIDO EDITABLE ============
// Los campos vacíos ("" o []) simplemente no se muestran.

const SITE = {
  name: "Carlos Santiago Delgado Oliva",
  hero: "assets/art/RAMON.jpeg", // imagen de bienvenida (Ramona)
  heroCaption: "*Ramona | Personaje diseñado bajo la técnica “Photobashing”",
};

const CV = {
  about: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma y estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital. Combino el desarrollo web y móvil con diseño de interfaces, experiencia de usuario y comunicación visual para crear soluciones digitales funcionales y cuidadas.",
  education: [
    { title: "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital", short: "Licenciatura", place: "UTAgs", period: "2026 – actualmente" },
    { title: "TSU en Desarrollo de Software Multiplataforma", short: "TSU", place: "UTAgs", period: "2024 – 2026" },
  ],
  experience: [
    {
      title: "Desarrollador full-stack · Estadía profesional",
      place: "Tractoreconstrucciones San Quintín",
      period: "Mayo – agosto 2026",
      detail: "Desarrollo de Monitor, sistema para la gestión de incidentes vehiculares y reclamaciones de seguros. Aplicación multiplataforma con React Native, React Native Web y Expo; backend con TypeScript, Express, Prisma y PostgreSQL. Autenticación JWT y permisos por rol, además de instaladores de escritorio con Electron y APK para Android.",
    },
    {
      title: "Apoyo en el área de informática",
      place: "CONALEP Irapuato · Las Carmelitas",
      period: "Agosto 2026",
      detail: "Mantenimiento de switches y cámaras de seguridad, armado y ponchado de cableado de red e introducción a pfSense en una maqueta de red.",
    },
    {
      title: "Almacenista",
      place: "Tractoreconstructora",
      period: "Marzo – abril 2024",
      detail: "Recepción, organización y control de mercancía; verificación de entradas, salidas e inventario.",
    },
  ],
  certifications: [
    { title: "Oxford Placement Test · Inglés B2", short: "Oxford B2", place: "Oxford University Press", period: "Marzo 2026" },
    { title: "Linux Essentials", short: "Linux", place: "Cisco Networking Academy", period: "Abril 2025" },
    { title: "Solana Latam Builders Program · Rust", short: "Solana", place: "WayLearn Technologies / Solana Foundation", period: "Febrero – marzo 2026" },
  ],
  skills: [
    {
      title: "Desarrollo web y móvil",
      items: ["React", "React Native", "Angular", "Node.js", "Express", "TypeScript", "JavaScript", "Expo", "Prisma ORM", "JWT", "Electron"],
    },
    {
      title: "Lenguajes y bases de datos",
      items: ["Java", "Python", "Rust · básico", "SQL Server", "MySQL", "PostgreSQL", "Firebase · básico/intermedio"],
    },
    {
      title: "Diseño y contenido",
      items: ["Figma · intermedio", "Canva · intermedio", "GIMP · básico", "UI/UX", "Edición de foto", "Edición de audio", "Edición de video", "ExcelJS"],
    },
    {
      title: "Suites de oficina",
      items: ["Word · intermedio", "Excel · básico", "PowerPoint · básico"],
    },
    {
      title: "Sistemas y redes",
      items: ["Windows 7–11 · intermedio", "Linux · intermedio", "macOS · básico", "Redes Cisco · básico", "pfSense · introductorio", "Servicios en la nube · básico"],
    },
  ],
  contact: {
    email: "santiagodeloli19@gmail.com",
    instagram: "",
    github: "",
    phone: "+52 462 291 6549",
  },
};

const SKILL_BADGES = {
  "React": { logo: "react", color: "20232A", logoColor: "61DAFB" },
  "React Native": { logo: "react", color: "20232A", logoColor: "61DAFB" },
  "Angular": { logo: "angular", color: "0F0F11", logoColor: "DD0031" },
  "Node.js": { logo: "nodedotjs", color: "303030", logoColor: "5FA04E" },
  "Express": { logo: "express", color: "353535", logoColor: "FFFFFF" },
  "TypeScript": { logo: "typescript", color: "235A97", logoColor: "FFFFFF" },
  "JavaScript": { logo: "javascript", color: "D8B900", logoColor: "171715" },
  "Expo": { logo: "expo", color: "171717", logoColor: "FFFFFF" },
  "Prisma ORM": { logo: "prisma", color: "303030", logoColor: "FFFFFF" },
  "JWT": { logo: "jsonwebtokens", color: "333333", logoColor: "FFFFFF" },
  "Electron": { logo: "electron", color: "252F38", logoColor: "9FEAF9" },
  "Java": { logo: "openjdk", color: "343434", logoColor: "FFFFFF" },
  "Python": { logo: "python", color: "306998", logoColor: "FFD43B" },
  "Rust": { logo: "rust", color: "38332E", logoColor: "FFFFFF" },
  "SQL Server": { logo: "microsoftsqlserver", color: "A91D22", logoColor: "FFFFFF" },
  "MySQL": { logo: "mysql", color: "176B8A", logoColor: "FFFFFF" },
  "PostgreSQL": { logo: "postgresql", color: "336791", logoColor: "FFFFFF" },
  "Firebase": { logo: "firebase", color: "302B24", logoColor: "FFCA28" },
  "Figma": { logo: "figma", color: "292929", logoColor: "FFFFFF" },
  "Canva": { logo: "canva", color: "1673C9", logoColor: "FFFFFF" },
  "GIMP": { logo: "gimp", color: "5C5543", logoColor: "FFFFFF" },
  "UI/UX": { logo: "figma", color: "292929", logoColor: "FFFFFF" },
  "ExcelJS": { logo: "microsoftexcel", color: "217346", logoColor: "FFFFFF" },
  "Word": { logo: "microsoftword", color: "185ABD", logoColor: "FFFFFF" },
  "Excel": { logo: "microsoftexcel", color: "217346", logoColor: "FFFFFF" },
  "PowerPoint": { logo: "microsoftpowerpoint", color: "C43E1C", logoColor: "FFFFFF" },
  "Windows 7–11": { logo: "windows", color: "0078D4", logoColor: "FFFFFF" },
  "Linux": { logo: "linux", color: "242424", logoColor: "FCC624" },
  "macOS": { logo: "apple", color: "363636", logoColor: "FFFFFF" },
  "Redes Cisco": { logo: "cisco", color: "34444A", logoColor: "1BA0D7" },
  "Rust · básico": { level: "básico", base: "Rust" },
  "Firebase · básico/intermedio": { level: "básico/intermedio", base: "Firebase" },
  "Figma · intermedio": { level: "intermedio", base: "Figma" },
  "Canva · intermedio": { level: "intermedio", base: "Canva" },
  "GIMP · básico": { level: "básico", base: "GIMP" },
  "Word · intermedio": { level: "intermedio", base: "Word" },
  "Excel · básico": { level: "básico", base: "Excel" },
  "PowerPoint · básico": { level: "básico", base: "PowerPoint" },
  "Windows 7–11 · intermedio": { level: "intermedio", base: "Windows 7–11" },
  "Linux · intermedio": { level: "intermedio", base: "Linux" },
  "macOS · básico": { level: "básico", base: "macOS" },
  "Redes Cisco · básico": { level: "básico", base: "Redes Cisco" },
  "pfSense · introductorio": { level: "introductorio", base: "pfSense" },
  "Servicios en la nube · básico": { level: "básico", symbol: "cloud" },
  "Edición de foto": { symbol: "image" },
  "Edición de audio": { symbol: "audio" },
  "Edición de video": { symbol: "video" },
  "pfSense": { logo: "pfsense", color: "202020", logoColor: "FFFFFF" },
};

// Cada archivo puede ser un string o { f: "archivo.png", bg: "#000" } para fondo distinto al blanco.
const GALLERIES = [
  {
    id: "arte", title: "Arte", subtitle: "Ilustración y piezas gráficas", layout: "atelier",
    folder: "assets/art/",
    files: ["fisher of men.png", "Know who you are at every age.png", "los niños.png", "LAMB.jpeg", "loveme.png", "mcc.png", "RAMON.jpeg", "rojoflyer.png", "saulodetarso.png"],
  },
  {
    id: "caratulas", title: "Carátulas", subtitle: "Diseño de portadas", layout: "records",
    folder: "assets/caratulas/",
    files: ["CARA1.jpg", "CARA2.jpg", "CARA3.jpg", "CARA4.jpg", "CARA5.jpg", "Complejo.png"],
  },
  {
    id: "emprendimientos", title: "Emprendimientos", subtitle: "Branding y productos", layout: "boutique",
    folder: "assets/emprendimientos/",
    files: ["CUKIS.jpeg", "GARAB1.jpeg", "GARAB2.jpeg", "GARAB3.jpeg", "GARAB4.jpeg"],
  },
  {
    id: "playeras", title: "Playeras", subtitle: "Diseños estampados", layout: "printshop",
    folder: "assets/playeras/",
    files: [
      "ARTILLERIA PESADA.png", "BAILANDOCUMBIANEGRO.png", "GUITARDOG.png", "IWANTTOBELIEVE.png",
      "JUSTONEOFTHOSEDAYS.png", "LainPlayeraFONDO.png",
      "LATINMAFIAFONDONEGRO.png", // si se pierde en blanco: { f: "LATINMAFIAFONDONEGRO.png", bg: "#000" }
      "MISAMADOS.png", "OutofcontextFONDO.png", "Playerasxcf.png",
    ],
  },
  {
    id: "sistemas", title: "Sistemas", subtitle: "Interfaces y proyectos digitales",
    folder: "assets/sistemas/",
    groups: [
      { title: "Burguer", files: ["burguer1.png", "burguer2.png", "burguer3.png", "burguer4.png"] },
      { title: "Monitor", files: ["monitor1.png", "monitor2.png", "monitor3.png", "monitor4.png", "monitor5.png"] },
      { title: "Skato", files: ["skato1.png", "skato2.png"] },
      { title: "Tecno", files: ["tecno1.png", "tecno2.png", "tecno3.png", "tecno4.png"] },
    ],
  },
];