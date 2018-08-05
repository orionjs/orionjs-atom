'use babel'

export default function({path, name, isRoot}) {
  return `import Models from 'app/collections/Models'
import {resolver} from '@orion-js/app'

export default resolver({
  params: {
    itemId: {
      type: 'ID'
    }
  },
  returns: Boolean,
  mutation: true,
  async resolve({itemId}, viewer) {
    await Models.remove(itemId)
    return true
  }
})
`
}
