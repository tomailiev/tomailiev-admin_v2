import Home from '../../components/Home/Home';
import ErrorPage from '../../components/Common/ErrorPage';
import Index from '../../components/Index/Index';
import LogIn from '../../components/LogIn/LogIn';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../../components/Register/Register';
import VerifyReset from '../../components/VerifyReset/VerifyReset';
import signInAction from '../../actions/signInAction';
import registerAction from '../../actions/registerAction';
import signOutAction from '../../actions/signOutAction';
import verifyResetAction from '../../actions/verifyResetAction';
import FetchError from '../../components/Common/FetchError';
import LoggedOut from '../../components/AuthGuard/LoggedOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'login',
        element: <LoggedOut component={<LogIn />} />,
        action: signInAction
      },
      {
        path: 'register',
        element: <LoggedOut component={<Register />} />,
        action: registerAction
      },
      {
        path: 'logout',
        element: <FetchError />,
        action: signOutAction
      },
      {
        path: 'verify',
        element: <LoggedOut component={<VerifyReset />} />,
        action: verifyResetAction
      },
      {
        path: 'reset',
        element: <LoggedOut component={<VerifyReset />} />,
        action: verifyResetAction
      },
    ]
  },
]);


export default router;