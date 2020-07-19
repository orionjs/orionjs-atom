'use babel'
import makeCreator from '../makeCreator'
import addToIndex from './addToIndex'
import getContent from './getContent'

export default makeCreator(
  function({path, name, createFile, openFile}) {
    name = name.replace('.js', '')
    const content = getContent({path, name})
    createFile(`${name}/index.js`, content)
    addToIndex({path, name})
  },
  {
    basePath: 'app/resolvers/',
    dialogTitle: 'Enter the name of the Resolvers Group'
  }
)
