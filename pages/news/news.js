var dataList = require('../../utils/api.js')
Page({
  data: {
    select: false,
    img: '',
    footer: {},
    wxParseData: "",
    http: dataList.http,
    company: dataList.news
  },
  footer: function (e) {
    dataList.footer(e, this)
  },
  product: function () {
    wx.showNavigationBarLoading()
    this.news(42, this)
    this.setData({
      select: false
    })
  },
  theCompany: function () {
    this.news(29, this)
    wx.showNavigationBarLoading()
    this.setData({
      select: true
    })
  },

  onLoad: function (options) {
    wx.showNavigationBarLoading()
    this.news(42, this)
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
  },
  error: function (object, error) {
    console.log(object)
  },
  news: function (num, thit) {
    wx.request({
      url: `${dataList.http}/api/newsdetail`,
      data: {
        newsId: num,
        page: 1,
        rows: 100
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          wx.hideNavigationBarLoading()
          console.log(res.data)
          thit.setData({
            company: res.data.rows
          })
        }

      }
    })
  }
})