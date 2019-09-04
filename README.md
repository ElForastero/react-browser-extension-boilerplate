<h1 align="center">React (Preact) Browser Extension Boilerplate</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ElForastero/react-browser-extension-boilerplate/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/el4astero">
    <img alt="Twitter: el4astero" src="https://img.shields.io/twitter/follow/el4astero.svg?style=social" target="_blank" />
  </a>
</p>

> This project aims to provide a simple boilerplate for writing browser extensions for the most popular browsers, such as Chrome, Firefox, Opera, new Edge and other Chromium-based browsers.

## 🎉 Features

- **Preact X or React** (by default Preact - lightweight React alternative)
- **Shadow DOM** for injected content
- **CSS Modules**
- **PostCSS** (preset-env and custom-properties)
- **Auto reloading**
- Ready-to-go setup with **internationalization**

## 📝 Description

It's built with `preact` and `preact-compat` which allows you to switch between `react` and `preact`.

Content and styles which are injected directly to the page, are isolated inside Shadow DOM. CSS modules are used to avoid class names collision.

![Example](screenshot.png)

## 🏁 Install

```sh
git clone git@github.com:ElForastero/react-browser-extension-boilerplate.git <YOUR_PROJECT_NAME>
```

## 🚀 Usage

```sh
yarn watch
```

Runs webpack in watch mode. Automatically reloads the page after changes in files.

```sh
yarn build
```

Builds the extension in production mode.

## ⚠️ Note on Content Security Policy (CSP)
"unsafe-eval" in directive 'script-src' is needed for auto reloading, and should be removed from production manifest.json.

## 💻 Useful links

- [Manifest File Format](https://developer.chrome.com/apps/manifest)
- [Content Security Policy (CSP)](https://developer.chrome.com/extensions/contentSecurityPolicy)
- [Chrome i18n](https://developer.chrome.com/extensions/i18n)
- [Porting a Google Chrome extension to Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
- [Firefox add-ons examples](https://github.com/mdn/webextensions-examples)
- [exthouse - tool for performance testing](https://github.com/treosh/exthouse)

## 👨‍💻 Author

👤 **Eugene Dzhumak**

* Twitter: [@el4astero](https://twitter.com/el4astero)
* Github: [@ElForastero](https://github.com/ElForastero)

## 🤝 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Eugene Dzhumak](https://github.com/ElForastero).<br />
This project is [MIT](https://github.com/ElForastero/react-browser-extension-boilerplate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
