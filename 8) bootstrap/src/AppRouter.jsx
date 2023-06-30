import { useRoutes } from 'react-router-dom';
import Bootstrap from './pages/Bootstrap/Bootstrap.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Bootstrap />,
        path: '/',
      },
    ]
  );
}

export default AppRouter;
