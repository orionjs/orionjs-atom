'use babel'

export default function({path, name, isRoot}) {
  return `import {resolver} from '@orion-js/app'
import Models from 'app/collections/Models'
import Model from 'app/models/Model'

export default resolver({
  params: Model.clone({omitFields: ['_id', 'createdAt']}),
  returns: Model,
  mutation: true,
  async resolve(params, viewer) {
    const item = {
      ...params,
      createdAt: new Date()
    }
    item._id = await Models.insert(item)
    return item
  }
})
`
}
