'use babel'

export default function({path, name}) {
  return `import {job} from '@orion-js/jobs'

export default job({
  type: 'event',
  async run(params) {

  }
})
`
}
