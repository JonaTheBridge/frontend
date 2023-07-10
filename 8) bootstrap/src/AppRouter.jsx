import { useRoutes } from 'react-router-dom';
import Bootstrap from './pages/Bootstrap/Bootstrap.jsx';
import TicTacToe from './pages/TicTacToe/TicTacToe.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Bootstrap />,
        path: '/',
      },
      {
        element: <TicTacToe />,
        path: '/ticTacToe',
      },
    ]
  );
}

export default AppRouter;
