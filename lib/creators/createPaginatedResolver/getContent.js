'use babel'

export default function({path, name, isRoot}) {
  return `import {paginatedResolver} from '@orion-js/app'
import escape from 'escape-string-regexp'
import Model from 'app/models/Model'
import Models from 'app/collections/Models'

export default paginatedResolver({
  returns: Model,
  params: {
    filter: {
      type: String,
      optional: true
    }
  },
  async getCursor({filter}, viewer) {
    const query = {}

    if (filter) {
      query.name = {$regex: new RegExp(\`^\${escape(filter)}\`)}
    }

    return Models.find(query)
  }
})
`
}
