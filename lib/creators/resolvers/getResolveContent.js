'use babel'
import getModelName from './getModelName'

export default function({path, name, isRoot}) {
  const parent = `${isRoot ? '' : `${getModelName(path)}, `}`

  return `
export default async function ${name}(${parent}params, viewer) {

}
`
}
