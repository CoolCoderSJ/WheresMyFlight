
import HomePage from '../pages/home.f7';
import NotFoundPage from '../pages/404.f7';
import AddFlightPage from "../pages/add-flight.f7";
import FlightPage from "../pages/flight.f7";
import BoardingPassesPage from "../pages/boardingpasses.f7";
import AddPassPage from '../pages/addpass.f7';
import BagsPage from '../pages/bags.f7';
import LoginPage from '../pages/login.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
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
    path: "/flight/:flightId/bags",
    component: BagsPage,
  },
  {
    path: '/add-flight',
    component: AddFlightPage,
  },
  {
    path: '/add-pass/:flightId',
    component: AddPassPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;