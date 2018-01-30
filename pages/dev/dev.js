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
    if (e.currentTarget.dataset.id == 1) {
      wx.redirectTo({
        url: '../index/index'
      })
    }
    if (e.currentTarget.dataset.id == this.data.footer.flag) {
      var cData = this.data.footer
      cData.flag = 0
      this.setData({
        footer: cData
      })
    } else {
      var cData = this.data.footer
      cData.flag = e.currentTarget.dataset.id
      this.setData({
        footer: cData
      })
    }
  },
  onLoad: function (options) {
    dataList.ajax(this, { page: 1, rows: 4 })
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
  // 转发
  onShareAppMessage: function (e) {
    return {
      title: '成都亿享科技有限公司',
      desc: '亿享科技是智能信息化解决方案提供商。业务范围涵盖互联网 +、平台设计与构建、IT应用开发维护、IT系统建设规划与咨询、软件服务外包、APP开发、微信相关研发、大型数据中心运维管理、智慧城市及产品增值服务等。',
      path: "pages/index/index",
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    }
  }
})