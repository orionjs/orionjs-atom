'use babel'

import createResolver from './createResolver'
import createMutation from './createMutation'
import createCollection from './createCollection'
import createModel from './createModel'
import createResolversGroup from './createResolversGroup'
import createEventJob from './createEventJob'
import createPaginatedResolver from './createPaginatedResolver'
import createFindOneResolver from './createFindOneResolver'
import createUpdateMutation from './createUpdateMutation'
import createDeleteMutation from './createDeleteMutation'
import createCreateMutation from './createCreateMutation'

export default {
  'orionjs:create-resolver': createResolver,
  'orionjs:create-mutation': createMutation,
  'orionjs:create-collection': createCollection,
  'orionjs:create-model': createModel,
  'orionjs:create-resolvers-group': createResolversGroup,
  'orionjs:create-event-job': createEventJob,
  'orionjs:create-paginated-resolver': createPaginatedResolver,
  'orionjs:create-find-one-resolver': createFindOneResolver,
  'orionjs:create-update-mutation': createUpdateMutation,
  'orionjs:create-delete-mutation': createDeleteMutation,
  'orionjs:create-create-mutation': createCreateMutation
}
