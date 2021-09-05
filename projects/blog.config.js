module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 1080, height: 1920 })
    await page.goto('https://sleepntsheep.github.io')
    await capture(page, 'home')
  },
})