'use babel'
import fs from 'fs-plus'

export default function(path, filter) {
  const paths = fs.listSync(path)

  const items = paths
    .map(path => {
      const isDir = fs.lstatSync(path).isDirectory()
      return {
        fullPath: isDir ? path + '/index.js' : path,
        path: path.replace(/.+app\/resolvers/, 'app/resolvers').replace('.js', ''),
        name: path.replace(/.*\//, '').replace('.js', '')
      }
    })
    .filter(filter || (({name}) => !name.includes('.')))

  return items
}
