const axios = require('axios')
const cheerio = require('cheerio')
const translate = require('@iamtraction/google-translate')

class ExtractAndTranslateContent {
  originalInformation = {}
  translatedInformation = {}

  constructor(url, to) {
    const urlRegex =
      /^https:\/\/alien13febrenewal\.doe\.go\.th\/workpermit_dopa\?alien_key=[a-zA-Z0-9]+$/

    if (!urlRegex.test(url)) {
      console.error(
        'Error: Invalid URL provided, make sure the URL is https://alien13febrenewal.doe.go.th/workpermit_dopa?alien_key=xxxxxx'
      )
      process.exit(1)
    }

    this.to = to ?? 'en'
    this.url = url
  }

  async process() {
    await this.extract()
    await this.translate()

    return {
      originalInformation: this.originalInformation,
      translatedInformation: this.translatedInformation
    }
  }

  async extract() {
    try {
      const response = await axios.get(this.url)
      const html = response.data
      const $ = cheerio.load(html)

      $('td.pe-3').each((_index, element) => {
        const key = $(element).text().trim()
        const value = $(element).next('td').text().trim()
        if (key) {
          this.originalInformation[key.replace(/:/g, '')] = value
        }
      })
    } catch (error) {
      console.error(error)
      process.exit(1)
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
