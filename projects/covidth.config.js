module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 365, height: 677 })
    await page.goto('https://covidth.netlify.app')
    await capture(page, 'home')
  },
})