module.exports = async () => {
  await globalThis.miniProgram.close()
  globalThis.miniProgram = null
}
