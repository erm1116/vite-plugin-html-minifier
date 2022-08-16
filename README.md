# vite-plugin-html-minifier

HTML minifier plugin for Vite

## Usage

```sh
npm install -D vite-plugin-html-minifier
```

```ts
// vite.config.ts
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
  plugins: [
    htmlMinifier({
      minify: true,
    }),
  ],
})
```

## Options

| Parameter | Type                                               | Default | Description        |
| --------- | -------------------------------------------------- | ------- | ------------------ |
| minify    | `boolean｜MinifyOptions`                           | `true`  | html minify option |
| filter    | ` RegExp｜string｜((fileName: string) => boolean)` | -       | target file filter |

### `minify`

- Type: `boolean | MinifyOptions`
- Default: `true`

  ```js
  {
      collapseWhitespace: true,
      keepClosingSlash: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
  }
  ```

  `MinifierOptions` is same as [html-minifier-terser options](https://github.com/terser/html-minifier-terser#options-quick-reference).

### `filter`

- Type: `RegExp | string | ((fileName: string) => boolean)`
- Default: None (All entry point files will be matched)
