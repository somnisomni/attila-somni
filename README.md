# Attila-somni

A content focused responsive theme for [Ghost](https://github.com/tryghost/ghost/). Customized for somni's own blog, [솜니.로그](https://log.somni.one).

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
  * Change default fontsets [`dd1c287`](https://github.com/somnisomni/attila-somni/commit/dd1c287bc841b29b328a6af4732af8ad31bf9960)
    - Primary (UI): [Pretendard](https://github.com/orioncactus/pretendard)
    - Secondary (Body): [Iropke Batang (이롭게바탕체)](https://font.iropke.com/batang/)
  * Korean translations [`dadc395`](https://github.com/somnisomni/attila-somni/commit/dadc3955a11d4ddcbb7b444353d14eafcda31530)
  * Make more texts translatable
  * Configurables
    - Date format [`1f73370`](https://github.com/somnisomni/attila-somni/commit/1f7337046304cec9f32c3afe51a80e4c4ba3af7e)
    - Hide author in homepage [`d2585e7`](https://github.com/somnisomni/attila-somni/commit/d2585e79ef27e4f3bf916c1421632493fc5c7213)

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
  }
</style>
````

## ⚙️ Development

Install [Grunt](https://gruntjs.com/getting-started/):
````bash
npm install -g grunt-cli
````
Install Grunt dependencies:
````bash
npm install
````
Build Grunt project:
````bash
grunt build
````
The compress Grunt task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.
````bash
grunt compress
````
## ⚖️ Copyright & License

Copyright (C) 2015-2022 Peter Amende  
Copyright (C) 2022 somni  
Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
