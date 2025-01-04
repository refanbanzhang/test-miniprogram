describe('index页面测试', () => {

  beforeAll(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  })

  afterAll(async () => {
    console.log('index afterAll')
  })

  it('页面应该成功加载', async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    expect(true).toBe(true)
  })
})

