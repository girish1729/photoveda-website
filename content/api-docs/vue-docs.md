---
title: "Vue plugin docs"
date: 2022-01-08T10:41:03+06:00
subTitle: >
    Progress-up - HTML5 based multiple image upload progress indicator plugin demos
---


## [Vue.js](https://www.vuejs.org)  docs

Vue.js is a javascript framework by Evan You, ex Googler. It has gotten
very popular for quick prototyping and serious projects.

This page details how you can integrate progress-up with vue
applications.

First install the plugin for vue.


```shell
	$ npm install progress-up-vue
# or 
	$ yarn add progress-up-vue
```

This is `src/main.ts`.

```js
import { createApp } from 'vue';
import ProgressUp from 'progress-up-vue';
createApp(ProgressUp).mount('#app')
```

This is `src/App.vue`.
```js
import { createApp } from 'vue';
import ProgressUp from 'progress-up-vue';
createApp(ProgressUp).mount('#app')
```
This is `package.json`.

```json
{
  "name": "progress-up-vue-demo",
  "version": "0.0.3",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "progress-up-vue": "0.0.8",
    "pdfobject": "*",
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.2.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.0",
    "vue-tsc": "^1.0.9"
  }
}
```

Should you get stuck you can always contact us for help.


[Back to docs](/docs)
