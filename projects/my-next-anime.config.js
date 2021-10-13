module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture, css }) {
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto('https://sleepntsheep.github.io/my-next-anime')
    await capture(page, 'home')
  },
})
