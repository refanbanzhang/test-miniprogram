const closeMiniProgram = async () => {
  try {
    if (global.__miniProgram__) {
      await global.__miniProgram__.close()
      console.log('小程序已关闭')
    }
  } catch (error) {
    console.error('关闭小程序失败:', error)
    throw error
  }
}

module.exports = async () => {
  await closeMiniProgram()
}
