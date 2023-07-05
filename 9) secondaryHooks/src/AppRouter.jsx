import { useRoutes } from 'react-router-dom';
import App from './pages/App/App.jsx';
import UseRef from './pages/UseRef/UseRef.jsx';
import UseMemo from './pages/UseMemo/UseMemo.jsx';
import UseCallback from './pages/UseCallback/UseCallback.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <App />,
        path: '/',
      },
      {
        element: <UseRef />,
        path: '/useRef',
      },
      {
        element: <UseMemo />,
        path: '/useMemo',
      },
      {
        element: <UseCallback />,
        path: '/useCallback',
      },
    ]
  );
}

export default AppRouter;
