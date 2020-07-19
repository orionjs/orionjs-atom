'use babel'
import makeCreator from '../makeCreator'
import getModel from './getModel'
import getSchema from './getSchema'
import getResolvers from './getResolvers'

export default makeCreator(
  function({path, name, createFile, openFile}) {
    name = name.replace('.js', '')
    createFile(`${name}/index.js`, getModel({path, name}))
    createFile(`${name}/schema.js`, getSchema({path, name}))
    createFile(`${name}/resolvers/index.js`, getResolvers({path, name}))
    openFile(`${name}/schema.js`)
  },
  {
    basePath: 'app/models/',
    dialogTitle: 'Enter the name of the Model'
  }
)
