'use babel'
import makeCreator from '../makeCreator'
import addToIndex from './addToIndex'
import getContent from './getContent'

export default makeCreator(
  function({path, name, createFile, createFolder, openFile}) {
    name = name.replace('.js', '')
    const content = getContent({path, name})
    createFile(`${name}/jobs/index.js`, content)
    createFile(`${name}/resolvers/index.js`, content)
    createFolder(`${name}/models`)
    createFolder(`${name}/collections`)
    addToIndex({path, name})
  },
  {
    basePath: 'app/components/',
    dialogTitle: 'Enter the name of the Component'
  }
)
