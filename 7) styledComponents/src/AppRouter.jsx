import { useRoutes } from 'react-router-dom';
import StyledComponents from './pages/StyledComponents/StyledComponents.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <StyledComponents />,
        path: '/',
      },
    ]
  );
}

export default AppRouter;
