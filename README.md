# Tabs counter 🗂

This is a simple browser extension that lets you know the amount of tabs you have open.
The code is very lightweight and only runs on-demand, when you click the extension's icon.

<p align="center">
  <img src="/preview.png">
</p>

Inspired by my answer to this superuser SE question
[superuser.com/questions/967064](https://superuser.com/questions/967064/how-to-get-tab-count-in-chrome-desktop-without-app-extension/1721967?noredirect=1#comment2696550_1721967)

## License

Do with this code as you wish, as long as you don't blame me.

## Publishing

This extension supports both Manifest v2 (Firefox) and Manifest v3 (Chrome, Safari) formats.
Before releasing, duplicate/rename the appropriate manifest file to `manifest.json`. The only files
required in the final bundle are:

```shell
icons/
js/
manifest.json
```
