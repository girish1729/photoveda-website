---
title: "Angular plugin docs"
date: 2022-01-08T10:41:03+06:00
subTitle: >
    Progress-up - HTML5 based multiple image upload progress indicator plugin demos
---

## [Angular](https://angular.io) docs

Angular is a framework for developing typescript apps from Google. In
order to integrate `progress-up` with your angular project please follow
the instructions in this document.

First install the plugin for Angular.

```shell
	$ npm install progress-up-angular
# or 
	$ yarn add progress-up-angular
```

- Create a new project

```shell
 $ ng new progress-up-test
 $ cd progress-up-test
 $ ng serve
```

After you get the scaffolding up you can proceed to work on integrating
the plugin into your project.

This is just an example. Your situation may be different.

This is `src/app/app.component.html`.

```html
<progress-up></progress-up>
```

This is `src/app/app.component.ts`.

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

}
```

This is `src/app/app.module.ts`.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProgressUpModule } from 'progress-up-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProgressUpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

This is `package.json`.

```json
{
  "name": "progress-up-test",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular-devkit/build-angular": "^15.1.0-next.2",
    "@angular/animations": "^15.1.0-next.2",
    "@angular/common": "^15.1.0-next.2",
    "@angular/compiler": "^15.1.0-next.2",
    "@angular/core": "^15.1.0-next.2",
    "@angular/forms": "^15.1.0-next.2",
    "@angular/platform-browser": "^15.1.0-next.2",
    "@angular/platform-browser-dynamic": "^15.1.0-next.2",
    "@npmcli/fs": "*",
    "progress-up-angular": "../../angular/dist/progress-up/",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular/compiler-cli": "^15.1.0-next.2",
    "@types/jasmine": "~4.0.0",
    "jasmine-core": "~4.3.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.8.4"
  }
}
```

The above is just a very simple use case.

In case of complex projects you may have to do some more plumbing.

But this is the broad idea.

Of course you could get in touch for help.

[Back to docs](/docs)
