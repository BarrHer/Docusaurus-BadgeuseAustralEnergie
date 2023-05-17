import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog', '28b'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/archive',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/archive', '75a'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/first-blog-post', '49e'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/long-blog-post', '8a6'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/mdx-blog-post', '079'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/tags',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/tags', 'c48'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/tags/docusaurus', '6b7'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/tags/facebook', '75e'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/tags/hello',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/tags/hello', '1be'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/tags/hola',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/tags/hola', 'ee4'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/blog/welcome',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/blog/welcome', 'd12'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/markdown-page',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/markdown-page', '2cd'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/docs',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs', '256'),
    routes: [
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Alertes/anomalies',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Alertes/anomalies', 'fb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Alertes/overtime',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Alertes/overtime', 'a9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/heures-sup',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/heures-sup', '198'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/solde',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/solde', 'f60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/temps-de-travail',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Calculs/temps-de-travail', '5c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/category/alertes',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/category/alertes', '903'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/category/calculs-de-base',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/category/calculs-de-base', '73d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/category/tutorial---basics',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/category/tutorial---basics', '9c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/category/tutorial---extras',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/category/tutorial---extras', '04d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Features/calcul-overtime',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Features/calcul-overtime', 'dff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Features/gestion-abscences',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Features/gestion-abscences', '158'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/Features/pointage',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/Features/pointage', '599'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/intro',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/intro', '19e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/congratulations', '410'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-blog-post', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-document', '000'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/create-a-page', '5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/deploy-your-site', 'f4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-basics/markdown-features', 'a38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-extras/manage-docs-versions', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/docs/tutorial-extras/translate-your-site', 'a66'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/', '964'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
