import apiImg from "@/assets/project-api.jpg";
import esteticaImg from "@/assets/project-estetica.jpg";
import lixeiraImg from "@/assets/project-lixeira.jpg";
import notasImg from "@/assets/project-notas.png";
import hackathonImg from "@/assets/project-hackathon.jpg";
import checklistImg from "@/assets/project-checklist.png";

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imageScale?: number;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Hackathon Segurança",
    description:
      "Projeto desenvolvido na Campus Party Brasília 2025, focado em segurança da informação.",
    longDescription:
      "Solução criada em equipe durante o hackathon da Campus Party Brasília 2025, com foco em conscientização e prevenção de ameaças de segurança da informação para usuários finais.",
    image: hackathonImg,
    imageFit: "cover",
    imagePosition: "center",
    imageScale: 1.13,
    tags: ["HTML", "JavaScript", "Hackathon"],
    github: "https://github.com/anac-roline/hackathon_seguranca",
    category: "Hackathon",
    highlights: [
      "Desenvolvido em 48h",
      "Trabalho em equipe",
      "Tema: cibersegurança",
      "Prototipagem rápida",
    ],
  },
  {
    title: "Checklist de Produtividade",
    description:
      "Planilha de organização pessoal com tema lúdico, agrupando tarefas diárias por contexto.",
    longDescription:
      "Checklist de produtividade pessoal montado em planilha com hierarquia de tarefas e plano de ação. Agrupa rotinas de casa, estudo e cuidado com pets em blocos colapsáveis para facilitar o foco diário.",
    image: checklistImg,
    imageFit: "contain",
    tags: ["Produtividade", "Organização", "Planilha"],
    category: "Pessoal",
    highlights: [
      "Tarefas agrupadas por contexto",
      "Hierarquia tarefa → plano de ação",
      "Tema visual personalizado",
      "Rotina diária estruturada",
    ],
  },
  {
    title: "Site Estética",
    description:
      "Site institucional responsivo para negócio de estética, com galeria e contato.",
    longDescription:
      "Site institucional desenvolvido com HTML, CSS e JavaScript puro. Layout responsivo, galeria de serviços, formulário de contato e integração com WhatsApp para conversão direta de clientes.",
    image: esteticaImg,
    imageFit: "contain",
    imagePosition: "center",
    imageScale: 0.9,
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    github: "https://github.com/anac-roline/Site",
    category: "Web Dev",
    highlights: [
      "Layout 100% responsivo",
      "Galeria de serviços",
      "Integração WhatsApp",
      "Performance otimizada",
    ],
  },
  {
    title: "API do Zero",
    description:
      "API REST completa para manipulação de dados e integração com aplicações externas.",
    longDescription:
      "Construção de uma API REST do zero usando Node.js e Express, com rotas modulares, middlewares de autenticação e padrão MVC. Pensada como projeto-base para entender o ciclo completo de uma API.",
    image: apiImg,
    tags: ["Node.js", "Express", "JavaScript"],
    github: "https://github.com/anac-roline/minha-api",
    category: "Web Dev",
    highlights: [
      "Rotas RESTful organizadas",
      "Middleware de autenticação",
      "Validação de entrada",
      "Documentação clara",
    ],
  },
  {
    title: "Interface Sistema de Notas",
    description:
      "Interface gráfica em Tkinter para gestão de notas acadêmicas, com persistência.",
    longDescription:
      "Aplicação desktop em Python/Tkinter para cadastro e cálculo de médias acadêmicas. Foco em usabilidade, persistência local de dados e organização modular do código.",
    image: notasImg,
    imageScale: 1.25,
    tags: ["Python", "Tkinter", "UX"],
    github: "https://github.com/anac-roline/interface_sistem_de_notas",
    category: "Desktop",
    highlights: [
      "GUI nativa em Tkinter",
      "Persistência em arquivo",
      "Cálculo automático de médias",
      "Validação de formulários",
    ],
  },
  {
    title: "Lixeira Automática",
    description:
      "Sistema IoT com Arduino que detecta aproximação e abre a tampa automaticamente.",
    longDescription:
      "Projeto de automação com Arduino usando sensor ultrassônico HC-SR04 e servo motor. Detecta a aproximação do usuário e abre a tampa da lixeira sem contato, ideal para ambientes que exigem higiene.",
    image: lixeiraImg,
    imageFit: "cover",
    imagePosition: "center",
    tags: ["Arduino", "C++", "IoT", "Sensores"],
    github: "https://github.com/anac-roline/lixeira-automatica",
    category: "Embarcados",
    highlights: [
      "Sensor ultrassônico HC-SR04",
      "Servo motor controlado",
      "Lógica de debounce",
      "Prototipagem em protoboard",
    ],
  },
];
