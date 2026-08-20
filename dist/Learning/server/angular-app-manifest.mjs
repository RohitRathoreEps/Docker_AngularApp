
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 433, hash: '8f32a234a2e16fdc66183d2ab057b2ba2e3bd8a34285d9422661993f821da42b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '2c80c41ac25774daec1cbd9a05a30d4df72ce9370be52e9b8d5700471fe2d95e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1409, hash: 'e3dedbadc4021caea56067776f74cbd7318bf69dd927b9fd2d5fbd8800ac07de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1466, hash: '54c3f3c03c1e328124825498bd9a10701140ca7af2fcad3c67bbf6640853afac', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
