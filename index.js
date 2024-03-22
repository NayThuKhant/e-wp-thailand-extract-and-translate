const puppeteer = require('puppeteer')
const translate = require('@iamtraction/google-translate')

async function extractInformation(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url)

  const information = await page.evaluate(() => {
    const keyList = document.querySelectorAll('td.pe-3')

    const information = {}

    keyList.forEach((key) => {
      if (key.textContent) {
        information[key.textContent.trim().replace(/[:\s]/g, '')] =
          key.nextElementSibling?.textContent.trim()
      }
    })

    return information
  })

  await browser.close()
  return information
}

async function run() {
  const url = process.argv[2]
  if (!url) {
    console.error('Please provide a URL as a command-line argument.')
    process.exit(1)
  }

  const extractedInformation = await extractInformation(url)

  translate(JSON.stringify(extractedInformation), { to: 'en' })
    .then((res) => {
      console.debug(res.text)
    })
    .catch((err) => {
      console.error(err)
    })
}

run()
