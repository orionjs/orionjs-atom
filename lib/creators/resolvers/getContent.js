'use babel'
import getModelName from './getModelName'

export default function({mutation, path}) {
  const isRoot = !path.includes('/models/')
  const parent = isRoot ? '' : getModelName(path) + ', '

  return `import {resolver} from '@orion-js/app'

export default resolver({
  params: {},
  returns: String${mutation ? ',\n  mutation: true' : ''},
  async resolve(${parent}params, viewer) {

  }
})
`
}
