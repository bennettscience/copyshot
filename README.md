## Code screenshot you can copy later

Code screenshots are popular, especially in social media. This is a proof-of-concept toy project that allows you to enter a code snippet and get a screenshot. You're also given a base64-encoded URL string which can be shared. When someone visits the URL, the page decodes the querystring and appends plaintext at the bottom of the page for copying.

## Why

I was tired of typing stuff into my console to try it out. It would be easier to copy it. I also needed to learn some modern web tooling, so I'm starting that here. 

## Install

It's self hosted, all you need is a server. There is no database as everything happens in the browser.

Clone the repo and build the source with `npm run build`.

You can run the development server with `npm run serve` or deploy to your host to get started.

## To do

- ~~Refactor the page layout~~
- Run some checks on URL encode/decode
- Restyle the editor (bad colors right now)
- Allow user-defined language
- Allow user-defined color scheme

  
