'use babel'
import makeCreator from '../makeCreator'
import addToIndex from './addToIndex'
import getContent from './getContent'

export default makeCreator(
  function({path, name, createFile, openFile}) {
    name = name.replace('.js', '')
    const isRoot = !path.includes('app/models/')
    const content = getContent({path, name, isRoot})
    createFile(`${name}/index.js`, content)
    addToIndex({path, name})
    openFile(`${name}/index.js`)
  },
  {
    dialogTitle: 'Enter the name of the Paginated Resolver'
  }
)
