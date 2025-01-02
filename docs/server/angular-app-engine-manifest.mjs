
export default {
  basePath: '/minileet/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
