---
title: "Svelte plugin docs"
date: 2022-01-08T10:41:03+06:00
subTitle: >
    Progress-up - HTML5 based multiple image upload progress indicator plugin demos
---


## [sveltejs.org](https://www.svelte.dev)  docs

Svelte is a framework used for javascript/typescript projects and has
excellent packaging built into its base tooling.

Here is how you would integrate `progress-up` with svelte.

First install the plugin for svelte.

```shell
	$ npm install progress-up-svelte
# or 
	$ yarn add progress-up-svelte
```



This is `src/main.ts`.

```ts
import {ProgressUp} from 'progress-up-svelte';

const app = new ProgressUp({
  target: document.getElementById('app')
})

export default app
```

This is `package.json`.

```json
{
  "name": "progress-up-svelte-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "dependencies": {
    "progress-up-svelte": "file:../../svelte/package"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^1.1.0",
    "@tsconfig/svelte": "^3.0.0",
    "svelte": "^3.52.0",
    "svelte-check": "^2.9.2",
    "svelte-preprocess": "^4.10.7",
    "tslib": "^2.4.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.3"
  }
}
```

Svelte packaging is very similar to that of Angular is very neatly
defined and easy to get going.

Should you get trouble getting the progress-up svelte plugin going you
could get in touch with us and we will help.


[Back to docs](/docs)
