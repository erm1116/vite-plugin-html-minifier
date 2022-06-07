import { minify as minifyFn } from 'html-minifier-terser'
import { MinifyOptions } from './types'

function getOptions(minify: boolean | MinifyOptions): MinifyOptions {
  if (typeof minify === 'boolean') {
    return {
      collapseWhitespace: minify,
      keepClosingSlash: minify,
      removeComments: minify,
      removeRedundantAttributes: minify,
      removeScriptTypeAttributes: minify,
      removeStyleLinkTypeAttributes: minify,
      removeEmptyAttributes: minify,
      useShortDoctype: minify,
      minifyCSS: minify,
      minifyJS: minify,
      minifyURLs: minify,
    }
  }
  return minify
}

export async function minifyHtml(
  html: string,
  minifyFlag: boolean | MinifyOptions,
) {
  if (typeof minifyFlag === 'boolean' && !minifyFlag) return html

  const minifyOptions = getOptions(minifyFlag)
  return await minifyFn(html, minifyOptions)
}
