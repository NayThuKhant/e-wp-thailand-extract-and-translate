#!/usr/bin/env node

const { program } = require('commander')
const ExtractAndTranslateContent = require('./ExtractAndTranslateContent')

program
  .option('-s, --string', 'Output as a string')
  .argument(
    '<url>',
    'URL of e-workpermit, e.g. https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=xxxxxx '
  )
  .argument('<to>', 'Language code for translation, e.g. en')
  .description(
    'CLI to extract & translate employee information from Thailand Workpermit Website (https://alien13febrenewal.doe.go.th)'
  )
  .action(async (url, to) => {
    try {
      const options = program.opts()
      const { string: askingForStringOutput } = options
      const information = await new ExtractAndTranslateContent(
        url,
        to
      ).process()

      if (askingForStringOutput) {
        console.log(JSON.stringify(information))
      } else {
        console.log(information)
      }
    } catch (error) {
      console.error('Error:', error.message)
      process.exit(1)
    }
  })

program.parse(process.argv)
