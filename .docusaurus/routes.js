import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/badgeuse/__docusaurus/debug',
    component: ComponentCreator('/badgeuse/__docusaurus/debug', 'a6b'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/config',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/config', '54c'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/content',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/content', 'c48'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/globalData',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/globalData', '1ff'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/metadata',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/metadata', '227'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/registry',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/registry', '5ef'),
    exact: true
  },
  {
    path: '/badgeuse/__docusaurus/debug/routes',
    component: ComponentCreator('/badgeuse/__docusaurus/debug/routes', '259'),
    exact: true
  },
  {
    path: '/badgeuse/blog',
    component: ComponentCreator('/badgeuse/blog', '34c'),
    exact: true
  },
  {
    path: '/badgeuse/blog/archive',
    component: ComponentCreator('/badgeuse/blog/archive', '364'),
    exact: true
  },
  {
    path: '/badgeuse/blog/first-blog-post',
    component: ComponentCreator('/badgeuse/blog/first-blog-post', 'fb1'),
    exact: true
  },
  {
    path: '/badgeuse/blog/long-blog-post',
    component: ComponentCreator('/badgeuse/blog/long-blog-post', '47c'),
    exact: true
  },
  {
    path: '/badgeuse/blog/mdx-blog-post',
    component: ComponentCreator('/badgeuse/blog/mdx-blog-post', 'edc'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags',
    component: ComponentCreator('/badgeuse/blog/tags', 'd91'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/docusaurus',
    component: ComponentCreator('/badgeuse/blog/tags/docusaurus', '14f'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/facebook',
    component: ComponentCreator('/badgeuse/blog/tags/facebook', 'c8f'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/hello',
    component: ComponentCreator('/badgeuse/blog/tags/hello', 'af7'),
    exact: true
  },
  {
    path: '/badgeuse/blog/tags/hola',
    component: ComponentCreator('/badgeuse/blog/tags/hola', 'f98'),
    exact: true
  },
  {
    path: '/badgeuse/blog/welcome',
    component: ComponentCreator('/badgeuse/blog/welcome', 'c73'),
    exact: true
  },
  {
    path: '/badgeuse/markdown-page',
    component: ComponentCreator('/badgeuse/markdown-page', '12d'),
    exact: true
  },
  {
    path: '/badgeuse/docs',
    component: ComponentCreator('/badgeuse/docs', 'a37'),
    routes: [
      {
        path: '/badgeuse/docs/category/tutorial---basics',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---basics', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/category/tutorial---extras',
        component: ComponentCreator('/badgeuse/docs/category/tutorial---extras', 'f74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/intro',
        component: ComponentCreator('/badgeuse/docs/intro', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/congratulations', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-blog-post', 'a18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-document', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/badgeuse/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/badgeuse/docs/tutorial-basics/create-a-page', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
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
    component: ComponentCreator('/badgeuse/', 'c80'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
