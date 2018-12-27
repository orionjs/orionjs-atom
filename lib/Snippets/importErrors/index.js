'use babel'
import makeImporter from '../makeImporter'
import getErrors from './getErrors'

export default function({file, prefix, beforeText, scopeDescriptor}) {
  const errors = getErrors(file)
  if (prefix.trim().length < 2) return
  return errors.filter(name => name.toLowerCase().startsWith(prefix.toLowerCase())).map(name => {
    return makeImporter({
      snippet: `${name}(\${1:code}, \${2:message})`,
      description: `Completes and imports ${name}`,
      imports: `import ${name} from '@orion-js/app/lib/Errors/${name}'`,
      iconHTML: '<i class="icon-error"></i>',
      type: 'import',
      leftLabel: 'Error'
    })
  })
}
