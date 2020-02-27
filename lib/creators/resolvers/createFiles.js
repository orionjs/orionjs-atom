'use babel'
import getContent from './getContent'
import addToIndex from './addToIndex'

export default function({path, name, createFile, openFile, ...options}) {
  name = name.replace('.js', '')

  const content = getContent({path, ...options})
  createFile(`${name}/index.js`, content)
  addToIndex({path, name})

  openFile(`${name}/index.js`)
}
