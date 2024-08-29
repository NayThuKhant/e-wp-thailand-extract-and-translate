const axios = require('axios')
const cheerio = require('cheerio')
const translate = require('@iamtraction/google-translate')
const { versions } = require('./config/workpermit')

class ExtractAndTranslateContent {
  constructor(url, to) {
    this.originalInformation = {}
    this.translatedInformation = {}
    this.to = to ?? 'en'
    this.url = url

    const { version, callback, fields } = this.validate(url)
    if (!version) {
      throw new Error('Invalid URL provided')
    }

    this.version = version
    this.callback = callback
    this.fields = fields
  }

  validate() {
    for (const [version, patternData] of Object.entries(versions)) {
      const regex = patternData.pattern.replace(/"/g, '')
      if (new RegExp(regex).test(this.url)) {
        return {
          version,
          callback: patternData.callback,
          fields: patternData.fields
        }
      }
    }

    return null
  }

  async process() {
    await this.extract()
    await this.translate()

    return {
      originalInformation: this.originalInformation,
      translatedInformation: this.translatedInformation,
      version: this.version
    }
  }

  async extract() {
    try {
      const response = await axios.get(this.url)
      const html = response.data
      const $ = cheerio.load(html)
      return this.callback($)
    } catch (error) {
      throw new Error()
    }
  }

  async translate() {
    await translate(JSON.stringify(this.originalInformation), {
      from: 'auto',
      to: this.to
    })
      .then((response) => {
        this.translatedInformation = JSON.parse(response.text)
      })
      .catch((error) => {
        console.error(error)
        process.exit(1)
      })
  }
}

module.exports = ExtractAndTranslateContent
