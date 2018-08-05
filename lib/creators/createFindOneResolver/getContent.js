'use babel'

export default function({path, name, isRoot}) {
  return `import {resolver} from '@orion-js/app'
import Model from 'app/models/Model'
import Models from 'app/collections/Models'

export default resolver({
  params: {
    itemId: {
      type: 'ID'
    }
  },
  returns: Model,
  async resolve({itemId}, viewer) {
    return await Models.findOne(itemId)
  }
})
`
}
