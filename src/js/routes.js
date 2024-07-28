
import HomePage from '../pages/home.f7';
import NotFoundPage from '../pages/404.f7';
import AddFlightPage from "../pages/add-flight.f7";
import FlightPage from "../pages/flight.f7";
import BoardingPassesPage from "../pages/boardingpasses.f7";
import AddPassPage from '../pages/addpass.f7';
import BagsPage from '../pages/bags.f7';
import LoginPage from '../pages/login.f7';
import SettingsPage from '../pages/settings.f7';
import AddTripPage from '../pages/add-trip.f7';
import TripPage from '../pages/trip.f7';
import SeatsPage from '../pages/seats.f7';

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
    path: '/add-flight/:tripId',
    component: AddFlightPage,
  },
  {
    path: '/add-pass/:flightId',
    component: AddPassPage,
  },
  {
    path: '/settings',
    component: SettingsPage,
  },
  {
    path: '/add-trip',
    component: AddTripPage,
  },
  {
    path: '/trip/:tripId',
    component: TripPage,
  },
  {
    path: '/trip/edit/:tripId',
    component: AddTripPage,
  },
  {
    path: '/seats/:flightId',
    component: SeatsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;