'use babel'
import fs from 'fs-plus'
import last from 'lodash/last'

export default function(file) {
  const basePath = file.path.replace(/app\/.*$/, 'app/resolvers')
  const paths = fs.listSync(basePath)

  return paths.map(path => last(path.split('/'))).filter(path => !path.includes('.'))
}
