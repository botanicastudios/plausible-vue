/* globals document */

export default {

  install(vue, { disable = false, domain = 'plausible.io' }) {
    if (!document || disable) return 

    const scriptEl = document.createElement('script')
    scriptEl.type = 'text/javascript'
    scriptEl.async = true
    scriptEl.src = 'https://' + domain + '/js/p.js'
    document.head.appendChild(scriptEl)
    plausible('page')
    plausible('trackPushState')
  }

}