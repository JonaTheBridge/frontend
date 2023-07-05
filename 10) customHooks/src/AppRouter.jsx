import { useRoutes } from 'react-router-dom';
import UseClicks from './pages/UseClicks/UseClicks.jsx';
import UseAPIRequest from './pages/UseAPIRequest/UseAPIRequest.jsx';
import UseGetData from './pages/UseGetData/UseGetData.jsx';
import UseSort from './pages/UseSort/UseSort.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <UseClicks />,
        path: '/',
      },
      {
        element: <UseClicks />,
        path: '/useClicks',
      },
      {
        element: <UseAPIRequest />,
        path: '/useAPIRequest',
      },
    ]
  );
}

export default AppRouter;
