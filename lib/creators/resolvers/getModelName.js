'use babel'
import fs from 'fs-plus'

export default function(path) {
  const filePath = path.replace(/\/resolvers$/, '/index.js')
  const modelDefinition = fs.readFileSync(filePath).toString()
  const modelName = modelDefinition.split("name: '")[1].split("',")[0]
  if (modelName.includes(' ')) return 'parent'
  return modelName.charAt(0).toLowerCase() + modelName.slice(1)
}
