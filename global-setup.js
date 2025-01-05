const automator = require('miniprogram-automator')

module.exports = async () => {
  const miniProgram = await automator.launch({
    projectPath: 'C:/Users/refanbanzhang/WeChatProjects/miniprogram-3'
  })
  global.miniProgram = miniProgram
}
