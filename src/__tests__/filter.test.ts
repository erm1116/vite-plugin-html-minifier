import { describe, expect, test } from 'vitest'
import { filterFileName } from '../filter'

describe('filterFileName', () => {
  test('filter with string', () => {
    expect(filterFileName('index.html', 'index.html')).toBe(true)
    expect(filterFileName('index.htm', 'index.html')).toBe(false)
    expect(filterFileName('other.html', 'index.html')).toBe(false)
    expect(filterFileName('index.html', 'index')).toBe(false)
  })

  test('filter with regex', () => {
    expect(filterFileName('index.html', /index.html/)).toBe(true)
    expect(filterFileName('index.htm', /index.html/)).toBe(false)
    expect(filterFileName('other.html', /index.html/)).toBe(false)

    expect(filterFileName('index.html', /\.html/)).toBe(true)
    expect(filterFileName('index.html', /\.html$/)).toBe(true)
    expect(filterFileName('index.html', /\.html?$/)).toBe(true)
    expect(filterFileName('index.htm', /\.html?$/)).toBe(true)
  })

  test('filter with function', () => {
    expect(filterFileName('index.html', () => true)).toBe(true)
    expect(filterFileName('index.html', () => false)).toBe(false)

    expect(filterFileName('index.html', (name) => name.includes('html'))).toBe(
      true,
    )
    expect(filterFileName('index.htm', (name) => name.includes('html'))).toBe(
      false,
    )
  })

  test('filter is undefined', () => {
    expect(filterFileName('index.html', undefined)).toBe(true)
    expect(filterFileName('index.htm', undefined)).toBe(true)
    expect(filterFileName('other.html', undefined)).toBe(true)
  })
})
