'use babel'
import fs from 'fs-plus'

export default function(path) {
  const paths = fs.listSync(path)

  const items = paths
    .map(path => {
      return {
        path: path.replace(/.+app\/components/, 'app/components'),
        name: path.replace(/.*\//, '')
      }
    })
    .filter(({name}) => !name.includes('.'))

  return items
}
