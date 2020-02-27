'use babel'
import fs from 'fs-plus'
import getAllComponents from '../getAllComponents'
import listComponentFiles from '../listComponentFiles'

export default function(file) {
  const basePath = file.path.replace(/app\/.*$/, 'app/models')
  const paths = fs.listSync(basePath)
  const models = paths
    .map(path => {
      return {
        path: path.replace(/.+app\/models/, 'app/models'),
        name: path.replace(/.*\//, '')
      }
    })
    .filter(({name}) => !name.includes('.'))

  const components = getAllComponents(file)

  for (const component of components) {
    const path = file.path.replace(/app\/.*$/, `app/components/${component}/models`)
    models.push(...listComponentFiles(path))
  }

  return models
}
