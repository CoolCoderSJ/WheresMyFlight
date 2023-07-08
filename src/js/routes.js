
import HomePage from '../pages/home.f7';
import NotFoundPage from '../pages/404.f7';
import AddFlightPage from "../pages/add-flight.f7";
import FlightPage from "../pages/flight.f7";
import BoardingPassesPage from "../pages/boardingpasses.f7";
import AddPassPage from '../pages/addpass.f7';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: "/flight/:flightId",
    component: FlightPage,
  },
  {
    path: "/flight/:flightId/passes",
    component: BoardingPassesPage,
  },
  {
    path: '/add-flight',
    component: AddFlightPage,
  },
  {
    path: '/add-pass',
    component: AddPassPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;