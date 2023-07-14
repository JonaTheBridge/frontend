import { useRoutes } from 'react-router-dom';
import ClicksContext from './pages/ClicksContext/ClicksContext.jsx';
import { ClicksProvider } from './contexts/clicksContext.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <ClicksProvider><ClicksContext /></ClicksProvider>,
        path: '/',
      },
    ]
  );
}

export default AppRouter;
