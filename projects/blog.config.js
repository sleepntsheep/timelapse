module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 1080, height: 1920 })
    await page.goto('https://home.papangkorn.com/blog')
    await capture(page, 'home')
  },
})
