import { useRoutes } from 'react-router-dom';
import UseEffect from './pages/UseEffect/UseEffect.jsx';
import WheelOfFortune from './pages/WheelOfFortune/WheelOfFortune.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <UseEffect />,
        path: '/',
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
