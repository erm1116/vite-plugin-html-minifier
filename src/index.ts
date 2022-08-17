import { type Plugin } from 'vite'
import { filterFileName } from './filter'
import { minifyHtml } from './minify'
import { UserOptions } from './types'

function htmlMinifier(options: UserOptions = {}): Plugin {
  const { minify = true, filter } = options

  return {
    name: 'vite:html-minifier',
    enforce: 'post',
    apply: 'build',
    async transformIndexHtml(html, { filename }) {
      if (!filterFileName(filename, filter)) return

      return minifyHtml(html, minify)
    },
  }
}

export default htmlMinifier
