import { useRoutes } from 'react-router-dom';
import App from './pages/App/App.jsx';
import Flags from './pages/Flags/Flags.jsx';
import URLParams from './pages/URLParams/URLParams.jsx';
import Bookings from './pages/Bookings/Bookings.jsx';
import UseState from './pages/UseState/UseState.jsx';
import BookingDetail from './pages/BookingDetail/BookingDetail.jsx';
import Calc from './pages/Calc/Calc.jsx';
import UseEffect from './pages/UseEffect/UseEffect.jsx';
import WheelOfFortune from './pages/WheelOfFortune/WheelOfFortune.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <App />,
        path: '/',
      },
      {
        element: <Flags />,
        path: '/flags',
      },
      {
        element: <URLParams />,
        path: '/url-params/:param',
      },
      {
        element: <Bookings />,
        path: '/bookings',
      },
      {
        element: <BookingDetail />,
        path: '/bookingDetail/:id',
      },
      {
        element: <UseState />,
        path: '/useState',
      },
      {
        element: <Calc />,
        path: '/calc',
      },
      {
        element: <UseEffect />,
        path: '/useEffect',
      },
      {
        element: <WheelOfFortune />,
        path: '/wheelOfFortune',
      },
    ]
  );
}

export default AppRouter;
