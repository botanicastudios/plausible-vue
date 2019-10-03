# Plausible Vue plugin

## Install


```
npm install plausible-vue
```

## How to use

Import the plugin and initiate it with `Vue.use`:

```js
import Plausible from "plausible-vue"
import Vue from "vue"

Vue.use(Plausible)
```

You can conditionally disable analytics using the `disable` option:

```js
Vue.use(Plausible, { disable: process.env.NODE_ENV !== "production" })
```