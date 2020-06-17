import Login from '../views/Login';
import Home from '../views/Home';
import About from '../views/About';
import Link from '../views/Link';
import Other from '../views/Other';

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '',
    component: Other,
    routes: [
      {
        path: '/about',
        component: About
      },
      {
        path: '/link',
        component: Link
      }
    ]
  }
];

export default routes;
