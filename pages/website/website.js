var dataList = require('../../utils/api.js')
Page({
  data: {
    footer: {},
    imgList: {
      dataList: {},
      http: dataList.http,
      title: true,
      title1: false
    }
  },
  footer: function (e) {
    dataList.footer(e, this)
  },
  onLoad: function (options) {
    dataList.ajax(this, { page: 1, rows: 4 })
  },
  bodyNone: function () {
    var cData = this.data.footer
    cData.flag = 0
    this.setData({
      footer: cData
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})