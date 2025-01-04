const automator = require('miniprogram-automator')
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')

const getMiniProgram = async () =>
  automator.launch({
    projectPath: 'C:/Users/refanbanzhang/WeChatProjects/miniprogram-3'
  })

describe('index页面测试', () => {
  let page = null
  let miniProgram = null

  beforeAll(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    miniProgram = await getMiniProgram()
    page = await miniProgram.reLaunch('/pages/index/index')
    await page.waitFor(500)
  }, 100 * 1000)

  afterAll(async () => {
    console.log('index afterAll')
    await miniProgram.close()
  })

  it('页面应该成功加载', async () => {
    expect(true).toBe(true)
  })
})

