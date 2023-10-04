---
title: "React plugin docs"
date: 2022-01-08T10:41:03+06:00
subTitle: >
    Progress-up - HTML5 based multiple image upload progress indicator plugin demos
---

## [React TS](https://reactjs.org) docs

React is a very popular web development framework from Facebook.

And progress-up can very easily be used in concert with react projects.

This document will help you going within minutes.

This is just a sample and for complex integrations you will have to do
more work.

First install the plugin for react.

```shell
	$ npm install progress-up-react
# or 
	$ yarn add progress-up-react
```

This is `src/main.tsx`.

```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import ProgressUp from 'progress-up-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <ProgressUp  />
  </div>
)
```


This is `package.json`.

```json
{
  "name": "progress-up-react-demo",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "progress-up-react": "file:../../react",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.22",
    "@types/react-dom": "^18.0.7",
    "@vitejs/plugin-react": "^2.2.0",
    "typescript": "^4.6.4",
    "vite": "^3.2.0"
  }
}
```

Should you get stuck do not hesitate to contact us and we can help you
get started.


[Back to docs](/docs)
