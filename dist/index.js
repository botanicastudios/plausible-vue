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
    var scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.async = true;
    scriptEl.src = 'https://' + domain + '/js/p.js';
    document.head.appendChild(scriptEl);
    plausible('page');
    plausible('trackPushState');
  }
};

module.exports = index;
