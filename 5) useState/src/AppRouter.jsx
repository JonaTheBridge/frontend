import { useRoutes } from 'react-router-dom';
import UseState from './pages/UseState/UseState.jsx';
import Calc from './pages/Calc/Calc.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <UseState />,
        path: '/',
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
