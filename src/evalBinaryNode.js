// @flow strict
import { evaluate } from './evaluate'

import type { BabelNodeBinary } from '@babel/types/lib/index.js.flow'

// @see https://rollupjs.org/guide/en#avoiding-eval
const eval2 = eval

export function evalBinaryNode( node: BabelNodeBinary ) {
  return eval2(
    `${ evaluate( node.left )} ${ node.operator } ${ evaluate( node.right )}`
  )
}
