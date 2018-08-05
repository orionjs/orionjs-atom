'use babel'

export default function({path, name, isRoot}) {
  return `import {resolver} from '@orion-js/app'
import Models from 'app/collections/Models'
import Model from 'app/models/Model'

export default resolver({
  params: {
    itemId: {
      type: 'ID'
    },
    item: {
      type: Model.clone({
        name: 'UpdateModel',
        omitFields: ['_id']
      })
    }
  },
  returns: Model,
  mutation: true,
  async resolve({itemId, item: itemData}, viewer) {
    const item = await Models.findOne(itemId)
    await item.update({$set: itemData})
    return item
  }
})
`
}
