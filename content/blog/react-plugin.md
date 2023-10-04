---
title: "React plugin details"
date: "2023-02-16T15:21:54+05:30"
featureImage: "blog/react-plugin.jpg"
draft: false
weight: 3
---

# React plugin development

React is a very popular web development framework from Facebook.

It is used for highly responsive web applications that use JSX code for
efficiency and fewer DOM updates.

In developing a plugin or REACT I faced some challenges in the beginning
when my learning was not adequate.

But over time I could fall in love and finish this work.

## Plugin architecture

In react the file `ProgressUp.tsx` is the source for all the template
and the typescript code that does the file upload.

Each image is included as part of assets packaging.

## How it works?

The plugin works in the standard react methodology of combining JSX
syntax with typescript to get things done.

I used the `function component` approach for this plugin.

## How do you use it?

{{<rawhtml>}}
<div class="flex justify-center">
<a href="https://react-ts-iscadj.stackblitz.io" class="bg-blue-200 rounded shadow-md text-black px-4 py-3 no-underline">Stackblitz </a>
</div>
{{</rawhtml>}}


This is how you install and use.
The stackblitz link has the instructions and help needed.

In short, just installing using npm or yarn like this will get you
started.

```shell
	$ yarn install progress-up-react
```

or

```shell
	$ npm install progress-up-react
```

Then just put this inside the HTML source the tags needed and you are
done.

```html
	<progress-up></progress-up>
```


## Challenges

The rendering issues I had with the file preview was pretty challenging
which was finally solved by changing the algorithm.

[Back to blog](/blog)
