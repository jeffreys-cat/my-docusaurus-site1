import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ded'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd5f'),
    exact: true
  },
  {
    path: '/blog/doris',
    component: ComponentCreator('/blog/doris', '007'),
    exact: true
  },
  {
    path: '/blog/doris',
    component: ComponentCreator('/blog/doris', '2bb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '3f9'),
    exact: true
  },
  {
    path: '/blog/Image',
    component: ComponentCreator('/blog/Image', '97a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '362'),
    exact: true
  },
  {
    path: '/blog/tags/bar',
    component: ComponentCreator('/blog/tags/bar', 'eba'),
    exact: true
  },
  {
    path: '/blog/tags/doris',
    component: ComponentCreator('/blog/tags/doris', 'f08'),
    exact: true
  },
  {
    path: '/blog/tags/foo',
    component: ComponentCreator('/blog/tags/foo', '615'),
    exact: true
  },
  {
    path: '/blog/tags/image',
    component: ComponentCreator('/blog/tags/image', '35b'),
    exact: true
  },
  {
    path: '/blog/分享',
    component: ComponentCreator('/blog/分享', '997'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '410'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '79f'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6ff'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
