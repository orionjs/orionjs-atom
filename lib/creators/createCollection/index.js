'use babel'
import makeCreator from '../makeCreator'
import getContent from './getContent'

export default makeCreator(
  function({path, name, createFile, openFile}) {
    name = name.replace('.js', '')
    const content = getContent({path, name})
    createFile(`${name}/index.js`, content)
    openFile(`${name}/index.js`)
  },
  {
    basePath: 'app/collections/',
    dialogTitle: 'Enter the name of the Collection'
  }
)
