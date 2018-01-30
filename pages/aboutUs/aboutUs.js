
var dataList = require('../../utils/api.js')
Page({
  data: {
    footer: {},
    img: ["../../images/icon/weixin.png"]
     
  },
  footer: function (e) {
    dataList.footer(e, this)
  },

  onLoad: function (options) {

  },

  // 生命周期函数--监听页面显示
  
  onShow: function () {
    // this.onLoad()
  },


  // 生命周期函数--监听页面隐藏
   
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
  previewImage: function (e) {
    wx.previewImage({
      // current: this.data.img,
      urls: this.data.img
      
    })
  },
  openMap: function () {
    var that = this
    wx.openLocation({
      latitude: 31, // 纬度，范围为-90~90，负数表示南纬
      longitude: 14, // 经度，范围为-180~180，负数表示西经
      scale: 100, // 缩放比例
      name: '成都亿享科技有限公司', 
      address: '成都市高新区天晖中街56号曙光国际2126号', 
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
    onShareAppMessage: function (e) {
      dataList.zhuanfa()
  } 
})