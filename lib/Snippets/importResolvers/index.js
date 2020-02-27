'use babel'
import debounce from 'lodash/debounce'
import getResolvers from './getResolvers'
import makeImporter from '../makeImporter'

const debouncedGetResolvers = debounce(getResolvers, 3000, {
  leading: true,
  trailing: false
})

export default function({file, prefix, preText}) {
  const resolvers = debouncedGetResolvers(file)
  if (prefix.trim().length < 2) return

  return resolvers
    .filter(({name}) => name.toLowerCase().startsWith(prefix.toLowerCase()))
    .map(({name, path}) => {
      return makeImporter({
        snippet: `await ${name}({$1}, viewer)`,
        displayText: name,
        iconHTML: '<i class="icon-zap"></i>',
        description: `Complete and import resolver ${name}`,
        imports: `import ${name} from '${path}'`,
        rightLabel: `await ${name}({}, viewer)`,
        type: 'class',
        leftLabel: 'Resolver'
      })
    })
}
