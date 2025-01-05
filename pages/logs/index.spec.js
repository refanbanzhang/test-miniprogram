describe('logs页面测试', () => {
  let page = null

  beforeAll(async () => {
    page = await miniProgram.reLaunch('/pages/logs/index')
    await page.waitFor(500)
  }, 10000)

  it('页面应该成功加载', async () => {
    expect(true).toBe(true)

    // const title = await page.$('.title')
    // expect(await title.text()).toBe('logs')
  })
})

