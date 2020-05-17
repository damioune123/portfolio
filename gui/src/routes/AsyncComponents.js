import React from 'react';
import Loadable from 'react-loadable';

export const AsyncPageHome = Loadable({
  loader: () => import(/* webpackChunkName: "PageDefault" */ '../pages/PageHome'),
  loading: () => <div>loading...</div>,
  modules: ['PageHome'],
});


export const AsyncPageOther = Loadable({
  loader: () => import(/* webpackChunkName: "PageOther" */ '../pages/PageOther'),
  loading: () => <div>loading...</div>,
  modules: ['PageOther'],
});

