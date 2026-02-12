export interface Project {
  name: string;
  slug: string;
  description: string;
  url: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    name: "Rain Simulator",
    slug: "rain-simulator",
    description: "Simulador de lluvia interactivo con efectos visuales realistas.",
    url: "https://rain-simulator.thiagososenke.com",
    logo: "/logo-rain-simulator.png",
  },
  {
    name: "Mad Games",
    slug: "mad-games",
    description: "Coleccion de juegos web divertidos y desafiantes.",
    url: "https://mad-games.thiagososenke.com",
    logo: "/logo-mad-games.png",
  },
  {
    name: "Echoes of Silence",
    slug: "echoes-of-silence",
    description: "Experiencia narrativa inmersiva con sonido y visuales.",
    url: "https://echoes-of-silence.thiagososenke.com",
    logo: "/logo-echoes-of-silence.png",
  },
  {
    name: "Clicker Game",
    slug: "clicker-game",
    description: "Juego clicker adictivo con mecanicas de progresion.",
    url: "https://clicker-game.thiagososenke.com",
    logo: "/logo-clicker-game.svg",
  },
];
