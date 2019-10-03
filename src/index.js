/* globals document */

export default {

  install(vue, { disable = false, domain = 'plausible.io' }) {
    if (!document || disable) return 

    (function(w, d, s, o, f, js, fjs) {
      w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments)
      };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', 'plausible', 'https://' + domain + '/js/p.js'))

    window.plausible('page')
    window.plausible('trackPushState')
  }

}

