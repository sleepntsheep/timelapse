module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 720, height: 1280 })
    await page.goto('https://sheepchanboard.netlify.app')
    await capture(page, 'home')
  },
})
