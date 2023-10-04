## What is Progress-up?

 {{< figure src="/screenshots/progress-uploading.gif" caption="Uploading gif" >}}

A HTML5 multiple files Upload plugin with progress bar indicator and
file preview.

It uses the [HTTP File API](https://www.w3.org/TR/FileAPI/) to show continuous progress.

Now available for 

- Angular 
- Vue 
- Svelte 
- React

in addition to vanilla Javascript.

A sample screenshot of the preview function.

 {{< figure src="/screenshots/progress-up-beforeupload.png" caption="More stats" >}}
 
## Detailed instructions

- [Developer docs](https://progress-up.live/docs)
- [Live demo](https://progress-up.live/demo)
- [Vue.js](https://progress-up.live/docs/vue)
- [Angular](https://progress-up.live/docs/angular)
- [React](https://progress-up.live/docs/react)
- [Svelte](https://progress-up.live/docs/svelte)
 
## Why should you care?

If you allow multiple large files upload then a progress indicator is a
cool way to give user feedback.

Nowadays HTML5 File API based progress is the best way to achieve your
goal.


## How to build and run as plain js

```shell
$ git clone https://github.com/girish1729/progress.up
$ cd progress.up/backend
$ yarn install
```

Or

```shell
$ npm install

$ mkdir uploads

$ npm start
```
Now head to [http://localhost:2324](http://localhost:2324)

to try uploading files.

The uploaded files are present in `backend/uploads` folder.

{{<rawhtml>}}
<div class="flex justify-center">
   <a target="_blank" href="/progress-up-html5" class="text-lg
 px-3 py-3 shadow-md text-black no-underline bg-transparent
hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Live demo</a>

</div>
{{</rawhtml>}}



## Backend

This backend is [Node.js HTTP server express.js](https://expressjs.com) with [multer middleware](http://expressjs.com/en/resources/middleware/multer.html)

> This ensures that this code is platform agnostic.
> Most issues with file upload plugins extant today hover around
> not specifying backend correctly. Not making it easy to use.
> Not explaining what should be the input file name attribute etc.

We require a backend that accepts `multipart/form-data` as upload
protocol.

Please also ensure the file names array in input field matches the
backend configuration.

There is also a test upload feature to check if upload protocol works.
