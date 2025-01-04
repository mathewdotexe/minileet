
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
    'index.csr.html': {size: 1058, hash: '9a5fc486cdeade15a27c951fda3374fbdbd61d9e408fb501034b88581b9c6051', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '1510f05354233daef80828329b7ec112363872a7d0fd40ee301da589e853fafc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14020, hash: '8d3d496f325b8cb08e59bbf4ce49a87e642f6cbda3fb24e630c549fc8954d880', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-VM3B5ZFY.css': {size: 1987, hash: '2JWrccpXdZE', text: () => import('./assets-chunks/main-VM3B5ZFY_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1987, hash: '2JWrccpXdZE', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-B5WVONNE.css': {size: 728, hash: 'OuzkcSKOQf8', text: () => import('./assets-chunks/styles-B5WVONNE_css.mjs').then(m => m.default)}
  },
};
