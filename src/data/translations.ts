const translations = {
  es: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "Sobre mi",
    },
    home: {
      description1:
        "Soy un emprendedor digital enfocado en crear y lanzar productos propios desde cero. Me apasiona convertir ideas en experiencias reales, combinando desarrollo de software, diseño y experimentación constante. Disfruto construir proyectos de manera independiente, probar conceptos nuevos, iterar rápido y aprender de cada error y acierto.",
      description2:
        "Trabajo con una mentalidad de largo plazo, priorizando la simplicidad, la calidad y la escalabilidad. Mis proyectos incluyen juegos, simuladores y aplicaciones web, todos desarrollados con un enfoque práctico y creativo. En este sitio muestro lo que estoy construyendo, los proyectos que ya están en marcha y las ideas que sigo explorando como emprendedor.",
      featuredTitle: "Mis primeros proyectos",
      viewAll: "Ver todos",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una coleccion de proyectos web en los que estuve trabajando.",
      descriptions: {
        "rain-simulator":
          "Simulador de lluvia interactivo con efectos visuales realistas.",
        "mad-games":
          "Coleccion de juegos web divertidos y desafiantes.",
        "echoes-of-silence":
          "Experiencia narrativa inmersiva con sonido y visuales.",
        "clicker-game":
          "Juego clicker adictivo con mecanicas de progresion.",
      },
    },
    about: {
      title: "Sobre mi",
      sections: [
        {
          id: "quien-soy",
          title: "Quién soy",
          subtitle: "Conocé mis características y mi historia",
          content:
            "Soy Thiago Sosenke, un emprendedor digital enfocado en crear y lanzar productos propios desde cero. Me apasiona convertir ideas en experiencias reales, combinando desarrollo de software, diseño y experimentación constante.",
        },
        {
          id: "que-hago",
          title: "Qué hago",
          subtitle: "Los proyectos y productos que construyo",
          content:
            "Diseño y desarrollo proyectos web de forma independiente: juegos, simuladores y aplicaciones interactivas. Cada proyecto nace de una idea que quiero explorar, probar y llevar a producción.",
        },
        {
          id: "tecnologias",
          title: "Tecnologías y herramientas",
          subtitle: "El stack con el que trabajo día a día",
          content:
            "Trabajo con tecnologías modernas como Next.js, React, TypeScript y Tailwind CSS. Elijo las herramientas que me permiten iterar rápido sin sacrificar calidad ni escalabilidad.",
        },
        {
          id: "diseno-ux",
          title: "Diseño & Experiencia de Usuario",
          subtitle: "Cómo pienso las interfaces y la experiencia",
          content:
            "Creo interfaces limpias, intuitivas y atractivas. Priorizo la experiencia del usuario en cada decisión de diseño, buscando que cada interacción sea fluida y memorable.",
        },
        {
          id: "mi-enfoque",
          title: "Mi enfoque",
          subtitle: "La mentalidad detrás de cada proyecto",
          content:
            "Trabajo con una mentalidad de largo plazo, priorizando la simplicidad, la calidad y la escalabilidad. Disfruto construir proyectos de manera independiente, probar conceptos nuevos, iterar rápido y aprender de cada error y acierto.",
        },
        {
          id: "mi-objetivo",
          title: "Mi objetivo",
          subtitle: "Hacia dónde voy y qué quiero lograr",
          content:
            "Construir productos digitales que generen valor real. Quiero seguir creando, experimentando y lanzando proyectos que desafíen lo convencional y dejen una marca en la web.",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About me",
    },
    home: {
      description1:
        "I'm a digital entrepreneur focused on creating and launching my own products from scratch. I'm passionate about turning ideas into real experiences, combining software development, design and constant experimentation. I enjoy building projects independently, testing new concepts, iterating fast and learning from every mistake and success.",
      description2:
        "I work with a long-term mindset, prioritizing simplicity, quality and scalability. My projects include games, simulators and web applications, all developed with a practical and creative approach. On this site I showcase what I'm building, the projects already underway and the ideas I keep exploring as an entrepreneur.",
      featuredTitle: "My first projects",
      viewAll: "View all",
    },
    projects: {
      title: "Projects",
      subtitle: "A collection of web projects I've been working on.",
      descriptions: {
        "rain-simulator":
          "Interactive rain simulator with realistic visual effects.",
        "mad-games":
          "Collection of fun and challenging web games.",
        "echoes-of-silence":
          "Immersive narrative experience with sound and visuals.",
        "clicker-game":
          "Addictive clicker game with progression mechanics.",
      },
    },
    about: {
      title: "About me",
      sections: [
        {
          id: "quien-soy",
          title: "Who I am",
          subtitle: "Learn about my background and traits",
          content:
            "I'm Thiago Sosenke, a digital entrepreneur focused on creating and launching my own products from scratch. I'm passionate about turning ideas into real experiences, combining software development, design and constant experimentation.",
        },
        {
          id: "que-hago",
          title: "What I do",
          subtitle: "The projects and products I build",
          content:
            "I design and develop web projects independently: games, simulators and interactive applications. Each project comes from an idea I want to explore, test and ship to production.",
        },
        {
          id: "tecnologias",
          title: "Tech & Tools",
          subtitle: "The stack I work with every day",
          content:
            "I work with modern technologies like Next.js, React, TypeScript and Tailwind CSS. I choose tools that let me iterate fast without sacrificing quality or scalability.",
        },
        {
          id: "diseno-ux",
          title: "Design & User Experience",
          subtitle: "How I think about interfaces and experience",
          content:
            "I create clean, intuitive and attractive interfaces. I prioritize user experience in every design decision, aiming for every interaction to be smooth and memorable.",
        },
        {
          id: "mi-enfoque",
          title: "My approach",
          subtitle: "The mindset behind every project",
          content:
            "I work with a long-term mindset, prioritizing simplicity, quality and scalability. I enjoy building projects independently, testing new concepts, iterating fast and learning from every mistake and success.",
        },
        {
          id: "mi-objetivo",
          title: "My goal",
          subtitle: "Where I'm headed and what I want to achieve",
          content:
            "Build digital products that generate real value. I want to keep creating, experimenting and launching projects that challenge the conventional and leave a mark on the web.",
        },
      ],
    },
  },
} as const;

export type Lang = "es" | "en";
export default translations;
