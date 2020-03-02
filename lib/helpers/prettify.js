'use babel'
import prettier from 'prettier'

export default async function(path, content) {
  const config = await prettier.resolveConfig(path)
  config.filepath = path
  console.log('git coinfig', config)
  return await prettier.format(content, config)
}
