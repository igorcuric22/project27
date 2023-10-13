const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // launch a new chrome instance
  const browser = await puppeteer.launch({
    headless: true
  })

  // create a new page
  const page = await browser.newPage()

  // set your html as the pages content
  const html = fs.readFileSync(`${__dirname}/html-pdf.html`, 'utf8')
  await page.setContent(html, {
    waitUntil: 'domcontentloaded'
  })

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: 'Letter'
  })

  // or a .pdf file
  await page.pdf({
    format: 'Letter',
    path: `${__dirname}/my-fance-invoice.pdf`
  })

  // close the browser
  await browser.close()
})();