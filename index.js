const axios = require('axios')
const cheerio = require('cheerio')
const translate = require('@iamtraction/google-translate')

class extractAndTranslate {
  information = {}
  translatedInformation = {}

  constructor(url) {
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
    }
  }

  async translate() {
    await translate(JSON.stringify(this.information), {
      from: 'auto',
      to: 'en',
    })
      .then((res) => {
        this.translatedInformation = res.text
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

const run = async () => {
  const url = process.argv[2]
  if (!url) {
    console.error('Please provide a URL as a command-line argument.')
    process.exit(1)
  }

  const translatedInformation = await new extractAndTranslate(url).process()

  console.log(JSON.stringify(translatedInformation))
}

run()
