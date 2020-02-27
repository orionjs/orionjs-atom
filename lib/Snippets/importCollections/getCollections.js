'use babel'
import fs from 'fs-plus'
import getAllComponents from '../getAllComponents'
import listComponentFiles from '../listComponentFiles'

export default function(file) {
  const basePath = file.path.replace(/app\/.*$/, 'app/collections')
  const paths = fs.listSync(basePath)
  const collections = paths
    .map(path => {
      return {
        path: path.replace(/.+app\/collections/, 'app/collections'),
        name: path.replace(/.*\//, '')
      }
    })
    .filter(({name}) => !name.includes('.'))

  const components = getAllComponents(file)

  for (const component of components) {
    const path = file.path.replace(/app\/.*$/, `app/components/${component}/collections`)
    collections.push(...listComponentFiles(path))
  }

  return collections
}
