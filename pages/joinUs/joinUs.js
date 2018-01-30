var dataList = require('../../utils/api.js')
Page({
  data: {
    footer: {}
  },
  footer: function (e) {
    dataList.footer(e, this)
  },
  onLoad: function (options) {

  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var cData = this.data.footer
    cData.flag = 0
    this.setData({
      footer: cData
    })
  },
  bodyNone: function () {
    var cData = this.data.footer
    cData.flag = 0
    this.setData({
      footer: cData
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  // 转发
  onShareAppMessage: function (e) {
    dataList.zhuanfa()
    }
})