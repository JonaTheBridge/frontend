import { useRoutes } from 'react-router-dom';
import App from './pages/App/App.jsx';
import Flags from './pages/Flags/Flags.jsx';
import URLParams from './pages/URLParams/URLParams.jsx';
import Bookings from './pages/Bookings/Bookings.jsx';
import BookingDetail from './pages/BookingDetail/BookingDetail.jsx';
import UseState from './pages/UseState/UseState.jsx';
import Calc from './pages/Calc/Calc.jsx';

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
    ]
  );
}

export default AppRouter;
