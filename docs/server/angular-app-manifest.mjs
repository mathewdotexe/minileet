
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/minileet/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/minileet"
  }
],
  assets: {
    'index.csr.html': {size: 1061, hash: 'a3cd96cb9b4ffaaed4adf7dc3d57e84c118e65ea64a83143cd05865991ce5f44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '49b8591fc5ab86819ee5345b6f92fdddc1593f7295611ac38ea08d229acfa704', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11905, hash: 'ea3e8ee3f04f97db62a4b8f9404bcf11311c3db71ade0fd57174be5b23de698f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B5WVONNE.css': {size: 728, hash: 'OuzkcSKOQf8', text: () => import('./assets-chunks/styles-B5WVONNE_css.mjs').then(m => m.default)}
  },
};
