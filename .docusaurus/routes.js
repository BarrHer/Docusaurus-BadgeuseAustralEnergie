import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/badgeuse/blog',
    component: ComponentCreator('/badgeuse/blog', 'c26'),
    exact: true
  },
  {
    path: '/badgeuse/blog/archive',
    component: ComponentCreator('/badgeuse/blog/archive', 'fcf'),
    exact: true
  },
  {
    path: '/badgeuse/blog/first-blog-post',
    component: ComponentCreator('/badgeuse/blog/first-blog-post', '742'),
    exact: true
  },
  {
    path: '/badgeuse/blog/long-blog-post',
    component: ComponentCreator('/badgeuse/blog/long-blog-post', '436'),
    exact: true
  },
  {
    path: '/badgeuse/blog/mdx-blog-post',
    component: ComponentCreator('/badgeuse/blog/mdx-blog-post', '379'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags',
    component: ComponentCreator('/badgeuse/blog/tags', '92f'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/docusaurus',
    component: ComponentCreator('/badgeuse/blog/tags/docusaurus', 'db3'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/facebook',
    component: ComponentCreator('/badgeuse/blog/tags/facebook', '55f'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/hello',
    component: ComponentCreator('/badgeuse/blog/tags/hello', '7e5'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/hola',
    component: ComponentCreator('/badgeuse/blog/tags/hola', '1eb'),
    exact: true
  },
  {
    path: '/badgeuse/blog/welcome',
    component: ComponentCreator('/badgeuse/blog/welcome', '8d6'),
    exact: true
  },
  {
    path: '/badgeuse/markdown-page',
    component: ComponentCreator('/badgeuse/markdown-page', 'dd1'),
    exact: true
  },
  {
    path: '/badgeuse/docs',
    component: ComponentCreator('/badgeuse/docs', '895'),
    routes: [
      {
        path: '/badgeuse/docs/category/tutorial---basics',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---basics', '4f8'),
        path: '/badgeuse/docs/category/tutorial---basics',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---basics', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/category/tutorial---extras',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---extras', 'f74'),
        path: '/badgeuse/docs/category/tutorial---extras',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---extras', 'f74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/intro',
        component: ComponentCreator('/badgeuse/docs/intro', '3a4'),
        path: '/badgeuse/docs/intro',
        component: ComponentCreator('/badgeuse/docs/intro', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/congratulations', '4a8'),
        path: '/badgeuse/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/congratulations', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-blog-post', 'a18'),
        path: '/badgeuse/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-blog-post', 'a18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-document', 'abe'),
        path: '/badgeuse/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-document', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-page', '336'),
        path: '/badgeuse/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-page', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/deploy-your-site', 'ace'),
        path: '/badgeuse/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/deploy-your-site', 'ace'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/markdown-features', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/badgeuse/docs/tutorial-extras/manage-docs-versions', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/badgeuse/docs/tutorial-extras/translate-your-site', '1a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/badgeuse/',
    component: ComponentCreator('/badgeuse/', '133'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
