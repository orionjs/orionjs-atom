'use babel'

export default function({path, name, isRoot}) {
  return `import {resolver} from '@orion-js/app'
import Models from 'app/collections/Models'
import Model from 'app/models/Model'

export default resolver({
  params: {
    name: {
      type: String,
      label: 'Name'
    }
  },
  returns: Model,
  mutation: true,
  async resolve({name}, viewer) {
    const item = {
      name,
      createdAt: new Date()
    }
    item._id = await Models.insert(item)
    return item
  }
})
`
}
