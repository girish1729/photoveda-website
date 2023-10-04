---
title: "Getting started with Progress-up uploader"
---

Progress-up is a simple file uploader easy to setup. It fetches files from local disk, and uploads them to the final destination. 

It’s very simple to integrate with your existing application 
and lets you think about more important
problems than building a file uploader. :smile:

Progress-up has various plugins for web development frameworks for easy
integration and quick setup.

It can also be used standalone. Check the demos below.

Here’s the simplest example html page with Progress-up (it uses a CDN bundle, while we recommend to use a bundler, see Installation):

{{<rawhtml>}}
<div class="flex justify-center">
   <a target="_blank" href="/progress-up-html5" class="text-lg
 px-3 py-3 shadow-md text-black no-underline bg-transparent
hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Live demo</a>

</div>
{{</rawhtml>}}


Drag and drop, preview for most file types, simple filters based on size
and MIME type are all available.

## Installation

Progress-up can be setup by including it in a script tag with some CSS
and HTML templating.

### Angular 

```shell
	$ npm install progress-up-angular
# or 
	$ yarn add progress-up-angular
```
### Vue 3

```shell
	$ npm install progress-up-vue
# or 
	$ yarn add progress-up-vue
```
### React.js

```shell
	$ npm install progress-up-react
# or 
	$ yarn add progress-up-react
```
### Svelte

```shell
	$ npm install progress-up-svelte
# or 
	$ yarn add progress-up-svelte
```


## Banned files

Once you determine the MIME filters and size limitations by configuring
in the setup tab then the files that are chosen for upload that do not
match the criterion are marked as unavailable for upload by marking them
in red. Please check screenshots below for an idea how they
look.

 {{< figure src="/screenshots/progress-up-banned.png"  caption="Banned files" >}}


These files are left out whilst uploading but the previews are shown just
like a normal file scheduled for upload.

## The tabs in progress-up UI

### The Upload tab

This is just a drag and drop and upload area. Underneath a line shows
the vital parameters that are needed for upload with two buttons.

- Begin uploading
- Reset form

The items shown in the line are the progress indicator(one of the 10
choices) and the upload URL and files array name.

 {{< figure src="/screenshots/progress-up-maintab.png" caption="Main tab" >}}

### The Setup tab

The setup tab is the most important tab for configuring progress-up.

You can setup the MIME and size filter along side the upload URL, the
files array and progress indicator.


 {{< figure src="/screenshots/progress-up-setup.png" caption="Setup tab" >}}

### The Stats tab

The stats tab is used for showing the statistics of an upload session.

These do not go away when you click at the reset form in the upload tab.

The statistics are collected for each session to tell you the details of
each upload operation.

The number of files successfully sent, the time taken and other details.

 {{< figure src="/screenshots/progress-up-statstab2.png" caption="Stats tab" >}}

### The Help tab

The help tab serves as a quick reference for those new to progress-up.

 {{< figure src="/screenshots/progress-up-help.png" caption="Help tab" >}}

## Documentation

- [Angular plugin setup and usage](/docs/angular-docs)
- [Vue.js plugin setup and usage](/docs/vue-docs)
- [React plugin setup and usage ](/docs/react-docs)
- [Svelte plugin setup and usage](/docs/svelte-docs)

## Browser Support

We aim to support recent versions of Chrome, Firefox, Safari and Edge.

