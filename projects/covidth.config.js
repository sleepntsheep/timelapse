module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 1080, height: 1920 })
    await page.goto('https://covidth.netlify.app')
    await page.waitForTimeout(4000)
    await capture(page, 'home')
  },
})
