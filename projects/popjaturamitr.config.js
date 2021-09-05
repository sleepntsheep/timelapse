module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://pophq.net')
    await capture(page, 'home')
  },
})

