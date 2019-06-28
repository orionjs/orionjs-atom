'use babel'
import getIndexContent from './getIndexContent'
import getResolveContent from './getResolveContent'
import getParamsContent from './getParamsContent'
import addToIndex from './addToIndex'

export default function({path, name, createFile, openFile, ...options}) {
  name = name.replace('.js', '')

  const isRoot = !path.includes('app/models/')
  const index = getIndexContent({path, name, isRoot, ...options})
  const params = getParamsContent({path, name, isRoot, ...options})
  const resolve = getResolveContent({path, name, isRoot, ...options})
  createFile(`${name}/index.js`, index)
  createFile(`${name}/params.js`, params)
  createFile(`${name}/resolve.js`, resolve)
  addToIndex({path, name})

  openFile(`${name}/resolve.js`)
}
