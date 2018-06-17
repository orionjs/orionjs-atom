'use babel'

import createResolver from './createResolver'
import createMutation from './createMutation'
import createCollection from './createCollection'
import createModel from './createModel'
import createResolversGroup from './createResolversGroup'
import createEventJob from './createEventJob'

export default {
  'orionjs:create-resolver': createResolver,
  'orionjs:create-mutation': createMutation,
  'orionjs:create-collection': createCollection,
  'orionjs:create-model': createModel,
  'orionjs:create-resolvers-group': createResolversGroup,
  'orionjs:create-event-job': createEventJob
}
