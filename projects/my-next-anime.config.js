module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 720, height: 1280 })
    await page.goto('https://sleepntsheep.github.io/my-next-anime')
    await page.waitForTimeout(7000)
    await capture(page, 'home')
  },
})
