const axios = require('axios')
const cheerio = require('cheerio')
const translate = require('@iamtraction/google-translate')

class ExtractAndTranslateContent {
  information = {}
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
      originalInformation: this.translatedInformation,
      translatedInformation: this.translatedInformation,
    }
  }

  async extract() {
    try {
      const response = await axios.get(this.url)
      const html = response.data
      const $ = cheerio.load(html)

      $('td.pe-3').each((index, element) => {
        const key = $(element).text().trim()
        const value = $(element).next('td').text().trim()
        if (key) {
          this.information[key] = value
        }
      })
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }

  async translate() {
    await translate(JSON.stringify(this.information), {
      from: 'auto',
      to: this.to,
    })
      .then((res) => {
        this.translatedInformation = res.text
      })
      .catch((err) => {
        console.error(err)
        process.exit(1)
      })
  }
}

module.exports = ExtractAndTranslateContent