import fetch from 'isomorphic-unfetch'

global.fetch = fetch;

global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};
