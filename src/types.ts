import type { MinifierOptions } from 'html-minifier-next'

export type MinifyOptions = MinifierOptions
export type Filter = RegExp | string | ((fileName: string) => boolean)

export type UserOptions = {
  minify?: boolean | MinifyOptions
  filter?: Filter
}
