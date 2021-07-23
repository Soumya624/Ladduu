const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/services"],
    exact: true,
    component: "Services",
  },
  {
    path: ["/team"],
    exact: true,
    component: "Team",
  },
  {
    path: ["/privacy"],
    exact: true,
    component: "Privacy",
  },
  {
    path: ["/terms"],
    exact: true,
    component: "Terms",
  },
];

export default routes;
