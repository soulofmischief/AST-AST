// @flow strict
import { evalBinaryNode } from './evalBinaryNode'
import { throwInvalidExpressionError } from './throwInvalidExpressionError'

import type { BabelNodeExpression } from '@babel/types/lib/index.js.flow'


/**
 * Recursively evaluate a Babel AST node
 */
export function evaluate( node: BabelNodeExpression ) {
  switch ( node.type ) {
    case 'BinaryExpression':
      return evalBinaryNode( node )

    case 'BooleanLiteral':
    case 'NumericLiteral':
    case 'StringLiteral':
      return node.value

    default: throwInvalidExpressionError( node )
  }
}
