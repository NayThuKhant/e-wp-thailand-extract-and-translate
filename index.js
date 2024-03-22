const puppeteer = require('puppeteer')
const translate = require('@iamtraction/google-translate')

async function extractAndTranslate(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url)

  const elements = await page.evaluate(() => {
    const elements = []
    const nodeList = document.querySelectorAll('[style="padding-left:100px;"]')
    nodeList.forEach((node) => {
      elements.push(node.textContent.trim())
    })
    return elements
  })

  const translatedElements = []
  for (const element of elements) {
    await translate(element, { to: 'en' })
      .then((res) => {
        translatedElements.push(res.text)
      })
      .catch((err) => {
        translatedElements.push(element)
      })
  }

  await browser.close()

  return translatedElements
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
