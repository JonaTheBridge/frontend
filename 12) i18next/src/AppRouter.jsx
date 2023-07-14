import { useRoutes } from 'react-router-dom';
import Translates from './pages/Translates/Translates.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Translates />,
        path: '/',
      },
    ]
  );
}

export default AppRouter;
