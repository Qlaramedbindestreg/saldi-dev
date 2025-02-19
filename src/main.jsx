import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Forside from './pages/Forside/Forside.jsx';
import Løsninger from './pages/Løsninger/Løsninger.jsx';
import Revisor from './pages/Revisor/Revisor.jsx';
import Kontakt from './pages/Kontakt/Kontakt.jsx';
import Om from './pages/Om/Om.jsx';
import Økonomistyring from './pages/Økonomistyring/Økonomistyring.jsx';
import Lagerstyring from './pages/Lagerstyring/Lagerstyring.jsx';
import Sagsstyring from './pages/Sagsstyring/Sagsstyring.jsx';
import ButikWebshop from './pages/ButikWebshop/ButikWebshop.jsx';
import Vejledninger from './pages/Vejledninger/Vejledninger.jsx';
import Blog from './pages/Blog/Blog.jsx';
import CRM from './pages/CRM/CRM';
import POSsystem from './pages/POS-system/POSsystem';
import Styklister from './pages/Styklister/Styklister';


import './main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Forside />,
      },
      {
        path: '/Løsninger',
        element: <Løsninger />,
      },
      {
        path: '/Løsninger/Økonomistyring',
        element: <Økonomistyring category="Økonomistyring" />,
      },
      {
        path: '/Løsninger/Lagerstyring',
        element: <Lagerstyring category="Lagerstyring" />,
      },
      {
        path: '/Løsninger/Sagsstyring',
        element: <Sagsstyring category="Sagsstyring" />,
      },
      {
        path: '/Løsninger/ButikWebshop',
        element: <ButikWebshop category="Butik & Webshop" />,
      },
      {
        path: '/CRM',
        element: <CRM />,
      },
      {
        path: '/POSsystem',
        element: <POSsystem />,
      },
      {
        path: '/Styklister',
        element: <Styklister />,
      },
      {
        path: '/Vejledninger',
        element: <Vejledninger type="Vejledninger" />,
      },
      {
        path: '/Blog',
        element: <Blog type="Blog" />,
      },
      {
        path: '/Revisor',
        element: <Revisor />,
      },
      {
        path: '/Om',
        element: <Om />,
      },
      {
        path: '/Kontakt',
        element: <Kontakt />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
