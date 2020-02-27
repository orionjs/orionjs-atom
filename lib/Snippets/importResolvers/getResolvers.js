'use babel'
import getAllComponents from '../getAllComponents'
import listComponentFiles from '../listComponentFiles'
import getAllResolverGroups from './getAllResolverGroups'
import listResolverFiles from './listResolverFiles'
import getIsMutation from './getIsMutation'

export default function(file) {
  const resolvers = []

  const resolverGroups = getAllResolverGroups(file)

  for (const resolverGroup of resolverGroups) {
    const path = file.path.replace(/app\/.*$/, `app/resolvers/${resolverGroup}`)
    resolvers.push(...listResolverFiles(path, ({path}) => !path.endsWith('index.js')))
  }

  const components = getAllComponents(file)

  for (const component of components) {
    const path = file.path.replace(/app\/.*$/, `app/components/${component}/resolvers`)
    resolvers.push(...listComponentFiles(path, ({path}) => !path.endsWith('index.js')))
  }

  for (const resolver of resolvers) {
    resolver.isMutation = getIsMutation(resolver.fullPath)
    const upperFirst = resolver.name.charAt(0).toUpperCase() + resolver.name.slice(1)
    resolver.name = resolver.isMutation ? resolver.name : `get${upperFirst}`
  }

  return resolvers
}
