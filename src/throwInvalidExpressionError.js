// @flow strict
const { MacroError } = require( 'babel-plugin-macros' )


export function throwInvalidExpressionError( node: * ) {
  throw new MacroError(
      `Invalid expression ${ node.type } ` +
      `at { ${ node.loc?.start.line } : ${ node.loc?.start.column } }`
  )
}
