import {useRoutes } from 'react-router-dom';
import App from './pages/App/App.jsx';
import Flags from './pages/Flags/Flags.jsx';
import Bookings from './pages/Bookings/Bookings.jsx'; 
import BookingDetail from './pages/BookingDetail/BookingDetail.jsx'; 
import Calc from './pages/Calc/Calc.jsx';
import URLParams from './pages/UrlParams/URLParams.jsx';
import WheelOffortune from './pages/WheelOffortune/WheelOffortune.jsx';
import Bootstrap from './pages/Bootstrap/Bootstrap.jsx';
import Tictactoe from './pages/TicTacToe/TicTacToe.jsx';
import UseSort from './pages/UseSort/UseSort.jsx';


function AppRouter() {
  return useRoutes(
    [
      {
        element: <App/>,
        path: '/',
      },
      {
        element: <Flags/>,
        path: '/flags',
      },
      {
        element: <Bookings/>,
        path: '/bookings',
      },
      {
        element: <BookingDetail/>,
        path: '/bookingsdetail',
      },
      {
        element: <Calc/>,
        path: '/calc',
      },
      {
        element: <WheelOffortune/>,
        path: '/wheeloffortune',
      },
      {
        element: <URLParams/>,
        path: '/url-params/:param',
      },
      {
        element: <Bootstrap/>,
        path: '/bootstrap',
      },
      {
        element: <Tictactoe/>,
        path: '/tictactoe',
      },
      {
        element: <UseSort/>,
        path: '/useSort',
      },
    ]
  );
}

export default AppRouter;