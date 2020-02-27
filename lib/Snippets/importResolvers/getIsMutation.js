'use babel'
import fs from 'fs-plus'

const cache = {}

export default function(path) {
  if (cache[path]) return cache[path]

  const content = fs.readFileSync(path).toString()
  cache[path] = content.includes('mutation: true')

  return cache[path]
}
