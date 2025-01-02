
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
    'index.csr.html': {size: 969, hash: '1fe8cc7f84e2dbcc37a4c0783c6b27ec446b97e2b2a8a4f9b53262b4ce13610f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '6dd05d2460b9505f2805964a39f69b0a80e78ab40b5f9de3de4c03bc350c75a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6889, hash: '539f25e6d46d47e730d10e9c37975133c822e83e72402dce0ab44841b3c74928', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NXBXHMPL.css': {size: 538, hash: 'q/HD1p72eSU', text: () => import('./assets-chunks/styles-NXBXHMPL_css.mjs').then(m => m.default)}
  },
};
