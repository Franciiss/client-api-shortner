
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/api-shortner',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ApiShortner.vue') }
    ]
  },
  {
    path: '/api-shortner/:alias',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UrlMasterDetail.vue') }
    ]
  },
  {
    path: '/top10',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Top10.vue') }
    ]
  },
  {
    path: '/pesquisar-alias',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PesquisarAlias.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
