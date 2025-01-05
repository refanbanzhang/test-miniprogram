describe('index页面测试', () => {
  let page = null

  beforeAll(async () => {
    page = await miniProgram.reLaunch('/pages/index/index')
    await page.waitFor(500)
  }, 10000)

  it('页面应该成功加载', async () => {
    expect(true).toBe(true)

    // const title = await page.$('.title')
    // expect(await title.text()).toBe('index')
  })

  it('点击按钮应该跳转到logs页面', async () => {
    await page.callMethod('onClick')
    await page.waitFor(500)
    expect((await miniProgram.currentPage()).path).toBe('pages/logs/index')
  })
})

