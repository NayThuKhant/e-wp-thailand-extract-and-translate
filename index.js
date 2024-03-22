const puppeteer = require('puppeteer')
const translate = require('@iamtraction/google-translate')

async function extractAndTranslate(url) {
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

  const translatedInformation = {}
  for (const key in information) {
    let translatedKey = key
    let translatedValue = information[key]

    /*Note
		Translating key via google translate may result in different responses and applicatin relying on this key will be brokens

		await translate(key, { to: 'en' })
		.then((res) => {
			translatedKey = res.text
		})
		.catch((err) => {
			console.error(err)
		})
	*/

    await translate(information[key], { to: 'en' })
      .then((res) => {
        translatedValue = res.text
      })
      .catch((err) => {
        console.error(err)
      })

    translatedInformation[translatedKey] = translatedValue
  }

  await browser.close()
  return translatedInformation
}

async function run() {
  const url = process.argv[2]
  if (!url) {
    console.error('Please provide a URL as a command-line argument.')
    process.exit(1)
  }

  const result = await extractAndTranslate(url)
  console.log(JSON.stringify(result))
}

run()
