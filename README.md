<h1 align="center">React Web Extension Boilerplate</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> This project aims to provide a simple boilerplate for writing browser extensions for the most popular browsers, such as Chrome, Firefox, Opera, new Edge and other Chromium-based browsers.

![React Web Extension Boilerplate](logo.png)

## 🎉 Features

- **Preact X or React** (you can switch them easily in webpack config)
- **Shadow DOM** for injected content
- **Styled-Components**
- **Auto reloading** (there's no need to manually reload extension)
- Ready-to-go setup with **internationalization**

## 👨‍💻 Examples

You can look at:

- [Framer](https://github.com/ElForastero/framer): a todo list extension as an example of using this boilerplate.
- [Good Block](https://github.com/LucasAndrad/block-sites-react-extension): an extension to block websites, also using this boilerplate.
- [ScreenplaySubs](https://github.com/SMASH-CUT/extension): an extension to watch movies in Netflix with screenplays, in sync. Also using this boilerplate.

There are no straight restrictions on how to use it, or any limitations on tools and technologies. Think of it as a regular react application with some special properties.

## 📝 Description

It's built with `preact` and `preact-compat` which allows you to switch between `react` and `preact`.

Content and styles which are injected directly to the page, are isolated inside Shadow DOM.

## 🏁 Install

```sh
git clone git@github.com:ElForastero/react-browser-extension-boilerplate.git <YOUR_PROJECT_NAME>
```

## 🚀 Usage

```sh
yarn watch
```

Runs webpack in watch mode. Automatically reloads the page after changes in files. Thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader).

```sh
yarn build
```

Builds the extension in production mode. This version can be shipped to the store.

## How to increment version

Use [npm version](https://docs.npmjs.com/cli/version) cli command to bump a version of your package.json. The version of manifest will stay in sync with version specified in package.json.

For example:

```sh
npm version patch
```

This will increase your patch package.json version. During the next build output manifest file will have the same version.

## ⚠️ Content Security Policy (CSP)
"unsafe-eval" in directive "script-src" and "connect-src" are needed for auto reloading, and should be removed from production manifest.json.

## 💻 Useful links

- [Manifest File Format](https://developer.chrome.com/apps/manifest)
- [Content Security Policy (CSP)](https://developer.chrome.com/extensions/contentSecurityPolicy)
- [Chrome i18n](https://developer.chrome.com/extensions/i18n)
- [Porting a Google Chrome extension to Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
- [Firefox add-ons examples](https://github.com/mdn/webextensions-examples)
- [exthouse - tool for performance testing](https://github.com/treosh/exthouse)
- [webext-redux - a set o utilities to use redux in web extensions](https://github.com/tshaddix/webext-redux)
- [webpack-manifest-version-sync-plugin](https://github.com/ElForastero/webpack-manifest-version-sync-plugin)

## 🤝 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Eugene Dzhumak](https://github.com/ElForastero).<br />
This project is [MIT](https://github.com/ElForastero/react-browser-extension-boilerplate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
