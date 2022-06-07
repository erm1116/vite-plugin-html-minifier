import type { Options } from 'html-minifier-terser'

export type MinifyOptions = Options
export type Filter = RegExp | string | ((fileName: string) => boolean)

export type UserOptions = {
  minify?: boolean | MinifyOptions
  filter?: Filter
}
