
Page({
  data: {
    title: 'Hello World',
  },

  onClick() {
    wx.navigateTo({
      url: '/pages/logs/index',
    })
  },
})
