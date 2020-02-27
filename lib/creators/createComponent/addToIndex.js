'use babel'
import addImport from '../../helpers/addImport'
import fs from 'fs-plus'
import prettify from '../../helpers/prettify'

export default async function({path, name}) {
  const files = ['jobs', 'resolvers']

  for (const file of files) {
    let content = fs.readFileSync(`${path}/${file}.js`).toString()
    content = addImport(content, `import ${name} from './${name}/${file}'`)
    content = content.replace('export default {', `export default {\n  ...${name},`)
    fs.writeFileSync(`${path}/${file}.js`, await prettify(`${path}/${file}.js`, content))
  }
}
