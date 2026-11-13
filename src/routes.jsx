import React from 'react';
import { RootLayout } from './components/templates/RootLayout.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Services } from './pages/Services.jsx';
import { ServiceDetail } from './pages/ServiceDetail.jsx';
import { Journal } from './pages/Journal.jsx';
import { JournalDetail } from './pages/JournalDetail.jsx';
import { Contact } from './pages/Contact.jsx';
import { NotFound } from './pages/NotFound.jsx';

import { services } from './data/services.js';
import { journalPosts } from './data/journal.js';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
        Component: Home,
      },
      {
        path: 'about',
        element: <About />,
        Component: About,
      },
      {
        path: 'services',
        element: <Services />,
        Component: Services,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
        Component: ServiceDetail,
        getStaticPaths: () => services.map((s) => `/services/${s.slug}`),
      },
      {
        path: 'journal',
        element: <Journal />,
        Component: Journal,
      },
      {
        path: 'journal/:slug',
        element: <JournalDetail />,
        Component: JournalDetail,
        getStaticPaths: () => journalPosts.map((j) => `/journal/${j.slug}`),
      },
      {
        path: 'contact',
        element: <Contact />,
        Component: Contact,
      },
      {
        path: '404',
        element: <NotFound />,
        Component: NotFound,
      },
      {
        path: '*',
        element: <NotFound />,
        Component: NotFound,
      },
    ],
  },
];
