# Attila-somni

A content focused responsive theme for [Ghost](https://github.com/tryghost/ghost/). Customized for somni's own blog, [솜니.로그](https://log.somni.one).

Original repository: [zutrinken/attila](https://github.com/zutrinken/attila)

## ♥️ Support

You can [buy original author a drink](https://paypal.me/zutrinken) if you enjoy using Attila. Cheers 🍻

## 📷 Screenshot

To be added.

## ⭐️ Features
### Original features
  * Theme options
  * Responsive layout
  * Light and Dark Mode
  * Search support
  * Post reading progress
  * Code highlight including line numbers
  * Comments and Disqus (Theme option)
  * Ghost accent color
### Custom changes
  * Change default font families
    - Primary (UI): [Pretendard](https://github.com/orioncactus/pretendard)
    - Secondary (Body): [Iropke Batang (이롭게 바탕체)](https://font.iropke.com/batang/)
    - You can still redefine default font families by code injection!
  * Add redefinable `monospace` font family
    - Default is [D2Coding](https://github.com/naver/d2codingfont)
  * Korean translations
  * Make more texts translatable
  * Can add [Mastodon](https://joinmastodon.org/) link in navigation meta
    - Mastodon URL can be set in theme options
    - Backlinked using `rel="me"` by default (for verification in Mastodon profile meta)
  * More theme options
    - Date format
    - Hide author in front page post loops
    - Custom footer text
  * Custom theme pages
    - Tag list page (`/tags`)

## 🌍 Localization

Only 🇺🇸 English (US), 🇰🇷 Korean, 🇯🇵 Japanese localizations managed on this repo, directly by somni. You can consider contribute translations in your language on original Attila repo.

## 🔠 Setup custom google fonts

> To be changed!

1. Go to [fonts.google.com](https://fonts.google.com/) and choose a font.
2. Choose __Embed__ and copy the `<link>` code.
3. Go to __Code injection__.  
4. Add this to __Blog Header__:  
````html
<link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet">
<style>
  :root {
    --font-primary: 'Mukta', sans-serif;
    --font-secondary: 'Crimson Text', serif;
    --font-monospace: 'Lucida Console', monospace;
  }
</style>
````

## ⚙️ Development

Install [Grunt](https://gruntjs.com/getting-started/):
````bash
$ npm install -g grunt-cli
````
Install project dependencies:
````bash
$ yarn
````
This will clean, build, and compress at once. Compressed theme will be available at `dist/<theme-name>.zip`, which you can then upload to your site.
````bash
$ yarn dist
````
Alternatively, you can just build Grunt project by this command:
````bash
$ grunt build
````
## ⚖️ Copyright & License

Copyright (C) 2015-2022 Peter Amende  
Copyright (C) 2022 somni  
Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
