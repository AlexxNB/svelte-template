# Svelte 3 app template

This is a project template for [Svelte](https://svelte.technology) apps. It lives at https://github.com/AlexxNB/svelte-template.

## Features

This is enchansed version of the official [Svelte template](https://github.com/sveltejs/template/tree/v3):

* Using last avialable Svelte3 compiler
* Livereload support when files changed(for dev server)
* Clear project structure
* Support SCSS in components and as importing
* VSCode friendly (with installed [Svelte plugin](https://github.com/UnwrittenFun/svelte-vscode))

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit AlexxNB/svelte-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

## Developing

You can start local development server by run this:

```bash
npm run dev
```

Then navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit any file in `src`, save it, and you should see that the page was reloaded with changes.

>Files served by development server are situated in `__SVELTE__/.dev` directory. Don't use them in production! Instead, read below about *building* your app

## Build

Just run this...

```bash
npm run build
```
... and yours builded app will be in `__SVELTE__/build` directory. 