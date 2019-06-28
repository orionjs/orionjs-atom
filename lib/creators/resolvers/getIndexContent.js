'use babel'

export default function({path, name, isRoot, mutation}) {
  return `import {resolver} from '@orion-js/app'
import resolve from './resolve'
import params from './params'

export default resolver({
  params,
  resolve,
  returns: String${mutation ? ',\n  mutation: true' : ''}
})
`
}
