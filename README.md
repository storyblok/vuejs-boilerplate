<p align="center">
  <h1 align="center">vuejs-boilerplate for Storyblok</h1>
  <p align="center">A <a href="https://www.storyblok.com" target="_blank">Storyblok</a> boilerplate with vuejs to simply start your website with us.</p>
  <p align="center">Imagine you have a single page application and want some pages editable with a CMS. This is now possible with Storyblok.</p>
</p>
<br>

[![GitHub release](https://img.shields.io/github/release/storyblok/vuejs-boilerplate.svg)](https://github.com/storyblok/vuejs-boilerplate/)

## What is a storyblok boilerplate
If you want to use your server or have already an existing project in which you want to integrate Storyblok you can use one of our boilerplates.

## How can I start with a boilerplate

The most efficient way to start a storyblok project as a developer would be our [Command Line Interface](https://www.storyblok.com/docs/Guides/command-line-interface).

```
npm i storyblok -g
storyblok
```

and choose your boilerplate. You can of course simply `download` or `clone` this repository as well.

```
git clone https://github.com/storyblok/vuejs-boilerplate
```

## Configuration
In the `src/components/Index.vue` you can add your token which can be found in your space information. [What is a Space?](https://www.storyblok.com/docs/terminology/space):

```
window.storyblok.init({
  accessToken: 'Iw3XKcJb6MwkdZEwoQ9BCQtt'
})
```

## Start your local environment

Make sure [npm](https://www.npmjs.com/) is installed:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Folder structure

- `/src/`
  The place where you should put all your components, styles, assets and of course your source code. For static images there is the `static` folder in the root.
- `/src/components/`
  All your layouts and components at one space - if you add a new or change an existing [Vue](https://vuejs.org/) component (`.vue`)
  the webpack build will trigger an instant reload for you in the browser - each component is a representation of a storyblok component.
  If you create a Teaser component in storyblok - make sure to create a `Teaser.vue` as well and register it in the `main.js` - so the setup knows about the component.
- `/static/`
  The place to put your static files.


## You want to know more about storyblok?

- [Prologue - Introduction](https://www.storyblok.com/docs/Prologue/Introduction)
- [Terminology - Introduction](https://www.storyblok.com/docs/terminology/introduction)
- [Content Delivery API - Introduction](https://www.storyblok.com/docs/Delivery-Api/introduction)


<br>
<br>
<p align="center">
<img src="https://a.storyblok.com/f/39898/1c9c224705/storyblok_black.svg" alt="Storyblok Logo">
</p>
