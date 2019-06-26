# Slater Base

## What is this?

This is a base template based heavily on [Slater](https://github.com/the-couch/slater), an excellent Shopify development toolkit inspired by [Slate](https://github.com/Shopify/slate).

## Getting started

### Install dependencies

```
npm i
```

### Edit configuration file

1. **Duplicate** `sample.slater.config.js`
2. **Rename** to `slater.config.js`
3. Change the `id`, `password` and `store` values to point to your Shopify environment

### Allow https locally

In order for livereload to work properly, you have to allow https to run locally on port `4000`. To do so:

-   Run `npm run start` on the command line and then navigate to https://localhost:4000.
-   Then authorize the browser to view page despite the lack of an SSL certificate.
-   You should see the message "Slater running" on the subsequent screen.

### Setup your IDE

We recommend that you use VS Code but most modern IDE's should do the job. This template comes configured with [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

In order take full advantage of these plugins, you should install the Prettier extension and update your preferences to auto format on save.

## Commands

### `npm run start`

Watches for changes and auto uploads changed files to Shopify. When running this, the command line should print out the preview URL. Click on this to view your changes as your develop.

### `npm run deploy:development`

Builds and compiles all assets and then uploads entire theme to Shopify environment specified in the configuration file. Use this if you would like to push up changes that were made prior to running `npm run start`.

## Shopify Theme Basics

I would highly recommend reading the [Shopify Theme development documentation](https://help.shopify.com/en/themes/development) before diving into any Shopify project. Having a strong understanding of this system will save you a lot of time and confusion in the long run. The following is only intended to be a brief summary:

### Layouts

A special type of template that wraps the entire site. A shopify site needs to have at least one of these. The layout typically contains the header, footer and main content area.

### Templates

Think of templates like pages. There are templates for product pages, blog posts, blog listing pages etc.

### Sections

Sections are pieces of content that need to be editable in the Shopify CMS. There are **dynamic** sections and **static** sections.

#### Dynamic sections

These are sections that can only exist on the homepage. The homepage is the only Shopify page that allows for an unlimited amount of sections that can be in whatever order the user wants. This allows the homepage to basically be completely editable in the CMS.

#### Static sections

Static sections are very similar to dynamic sections except they cannot be included on the homepage. There can only ever be on instance of these sections. A good example of a static section might be a hero that goes on the products listing page. This would allow a hero to be editable on the product listing pages but it cannot be used on any other pages. Adding to another page is technically possible but note that editing it's content in the CMS will result in updating the content for all instances of that section.

### Snippets

Little re-usable bits of liquid.

## Working with JavaScript

This base template utilizes of a small library called [PicoApp](https://github.com/estrattonbailey/picoapp) to help organize your JS into components and easily maintain a global state. Please read through PicoApp's documentation before startig to work with the JavaScript.

### Working with SCSS

This base template uses SCSS rather than plain CSS. The main css file is appropriately called main.scss. It is imported into the index.js so that livereload can function properly. Feel free to add as many SCSS files as you like. Just import them into main.scss so that they get compiled correctly.

## Feedback

We appreciate all feedback. Please contribute by creating pull requets or submitting issues.

---

By [Use All Five](https://useallfive.com)
