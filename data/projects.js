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

  getAllStatus() {
    let allStatus = [];
    Object.keys(Status).forEach((key) => {
      allStatus.append(Status[key]);
    });
    return allStatus;
  }
}

export const projects = [
  {
    name: "BuyCryptoCuba",
    logo: "",
    description: "",
    startDate: "",
    endDate: "",
    status: Status.CLOSED,
  },
  {
    name: "APIMania Bot",
    logo: "",
    description:
      "This bot saves web captures as images, PDF, or JSON. It also converts text messages to images and HTML tables to JSON.",
    startDate: "",
    endDate: "",
    status: Status.LAUNCHED,
  },
  {
    name: "CubablogBot",
    logo: "",
    description: "",
    startDate: "",
    endDate: "",
    status: Status.LAUNCHED,
  },
  {
    name: "Threadly App",
    logo: "",
    description: "",
    startDate: "",
    endDate: "",
    status: Status.LAUNCHED,
  },
];
