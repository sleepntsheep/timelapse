module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 406, height: 1000 })
    await page.goto('https://covidth.netlify.app')
    await capture(page, 'home')
  },
})
