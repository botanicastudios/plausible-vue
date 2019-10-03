/*!
 * plausible-vue v0.0.1
 * (c) 
 */
'use strict';

/* globals document */
var index = {
  install: function install(vue, _ref) {
    var _ref$disable = _ref.disable,
        disable = _ref$disable === void 0 ? false : _ref$disable,
        _ref$domain = _ref.domain,
        domain = _ref$domain === void 0 ? 'plausible.io' : _ref$domain;
    if (!document || disable) return;

    (function (w, d, s, o, f, js, fjs) {
      w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments);
      };

      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, 'script', 'plausible', 'https://' + domain + '/js/p.js');

    window.plausible('page');
    window.plausible('trackPushState');
  }
};

module.exports = index;
