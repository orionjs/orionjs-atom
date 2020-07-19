'use babel'
import makeCreator from '../makeCreator'
import createFiles from '../resolvers/createFiles'

export default makeCreator(
  function(params) {
    createFiles({
      ...params,
      mutation: false
    })
  },
  {
    dialogTitle: 'Enter the name of the Resolver'
  }
)
