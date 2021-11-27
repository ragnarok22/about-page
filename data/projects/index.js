import bccImage from './images/buycryptocuba.svg'
import apimaniaImage from './images/apimania.jpg'
import cubablogbotImage from './images/cubablogbot.jpg'
import threadlyImage from './images/threadly.png'

class Status {
  BUILDING = Status("building");
  LAUNCHED = Status("launched");
  CLOSED = Status("closed");

  constructor(status) {
    this.status = status.uppercase();
  }
  getStatus() {
    return this.status;
  }

  static getAllStatus() {
    let allStatus = [];
    Object.keys(Status).forEach((key) => {
      allStatus.append(Status[key]);
    });
    return allStatus;
  }

  static toString() {
    return this.getStatus();
  }
}

export const projects = [
  {
    name: "BuyCryptoCuba",
    url: "https://buycryptocuba.com",
    logo: bccImage,
    description: "Exchange para el intercambio de criptoactivos.",
    startDate: "noviembre de 2019",
    endDate: "julio de 2020",
    status: Status.CLOSED,
  },
  {
    name: "APIMania Bot",
    url: "https://t.me/apimaniaBot",
    logo: apimaniaImage,
    description:
      "Este bot guarda capturas de páginas web como imágenes, PDF o JSON. Además convierte texto en imágenes y tablas HTML a JSON.",
    startDate: "9 de Julio  de 2021",
    endDate: null,
    status: Status.LAUNCHED,
  },
  {
    name: "CubablogBot",
    url: "https://t.me/cubablog_bot",
    logo: cubablogbotImage,
    description: "",
    startDate: "18 de agosto de 2021",
    endDate: null,
    status: Status.LAUNCHED,
  },
  {
    name: "Threadly App",
    url: "https://threadly.app",
    logo: threadlyImage,
    description: "",
    startDate: "2 de noviembre de 2021",
    endDate: null,
    status: Status.LAUNCHED,
  },
];
