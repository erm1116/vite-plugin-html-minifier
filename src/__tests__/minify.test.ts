import { describe, expect, test } from 'vitest'
import { minifyHtml } from '../minify'

describe('minifyHtml', () => {
  test('html is minified when minify option is true.', async () => {
    const ret = await minifyHtml(
      `<!DOCTYPE html>
<html>
</html>
`,
      true,
    )
    expect(ret).toEqual(`<!doctype html><html></html>`)
  })

  test('html is not minified when minify option is false', async () => {
    const ret = await minifyHtml(
      `<!DOCTYPE html>
<html>
</html>
`,
      false,
    )
    expect(ret).toEqual(
      `<!DOCTYPE html>
<html>
</html>
`,
    )
  })

  test('can minify css', async () => {
    const ret = await minifyHtml(
      `<!DOCTYPE html>
<html>
<style>
div {
  color: red;
}
</style>
</html>
`,
      true,
    )
    expect(ret).toEqual(
      `<!doctype html><html><style>div{color:red}</style></html>`,
    )
  })

  test('can remove comments', async () => {
    const ret = await minifyHtml(
      `<!DOCTYPE html>
<html>
<style>
/* css comment */
div {
  color: red;
}
</style>
<script>
  // script comment
</script>
<!-- html comment -->
</html>`,
      { removeComments: true, minifyCSS: true, minifyJS: true },
    )
    expect(ret).toEqual(
      `<!DOCTYPE html>
<html>
<style>div{color:red}</style>
<script></script>

</html>`,
    )
  })

  test('can receive minify options individually', async () => {
    const ret = await minifyHtml(
      `<!DOCTYPE html>
<html>
<style>
div {
  color: red;
}
</style>
</html>
`,
      { minifyCSS: true },
    )
    expect(ret).toEqual(
      `<!DOCTYPE html>
<html>
<style>div{color:red}</style>
</html>
`,
    )
  })
})
