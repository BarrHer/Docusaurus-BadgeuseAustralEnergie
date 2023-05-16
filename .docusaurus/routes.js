import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog', '6e7'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/archive',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/archive', 'a54'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/first-blog-post', '96e'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/long-blog-post', 'bf3'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/mdx-blog-post', 'c40'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags', '672'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/docusaurus', '7d8'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/facebook', '521'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/hello',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/hello', '1fe'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/hola',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/tags/hola', 'd30'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/welcome',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/blog/welcome', '1eb'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/markdown-page',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/markdown-page', '06f'),
    exact: true
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs', 'b5e'),
    routes: [
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/category/tutorial---basics',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/category/tutorial---basics', '54e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/category/tutorial---extras',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/category/tutorial---extras', '34d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/intro',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/intro', 'de5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/congratulations', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-blog-post', '27b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-document', 'ed7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/create-a-page', '4be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/deploy-your-site', '751'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-basics/markdown-features', 'e6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-extras/manage-docs-versions', 'a2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/docs/tutorial-extras/translate-your-site', '611'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Docusaurus-BadgeuseAustralEnergie/badgeuse/',
    component: ComponentCreator('/Docusaurus-BadgeuseAustralEnergie/badgeuse/', '29c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
