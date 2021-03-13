'use babel'
import makeImporter from '../makeImporter'
import addImport from '../../helpers/addImport'

export default function({file, prefix, beforeText, scopeDescriptor}) {
  const types = ['info', 'warn', 'error', 'debug']
  if (prefix.trim().length < 2) return
  return types
    .filter(name => name.toLowerCase().startsWith(prefix.toLowerCase()))
    .map(name => {
      return makeImporter({
        displayText: `log.${name}()`,
        snippet: `log.${name}($1)`,
        description: `Make a new log of type ${name}`,
        iconHTML: '<i class="icon-terminal"></i>',
        type: 'import',
        leftLabel: 'Logger',
        onDidInsertSuggestion: function({fileContent, editor}) {
          const importString = `import logger from 'app/helpers/logger'`
          if (fileContent.includes(importString)) return

          const bufferPosition = editor.getCursorBufferPosition()

          const newPosition = {
            row: bufferPosition.row + 3,
            column: bufferPosition.column
          }

          let newContent = addImport(fileContent, importString)
          newContent = newContent.replace(
            importString,
            `${importString}\n\nconst log = logger.addContext(module)`
          )
          editor.setText(newContent)
          editor.setCursorBufferPosition(newPosition)
        }
      })
    })
}
