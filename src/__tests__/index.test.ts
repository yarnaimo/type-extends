import { expectType } from 'tsd'
import { typeExtends } from '..'

test('typeExtends', () => {
  const result = typeExtends<{ a: string; c?: null }>()({ a: 'foo', b: 0 })
  expectType<{ a: string; b: number }>(result)
})
