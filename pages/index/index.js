
var dataList = require('../../utils/api.js')
Page({
  data: {
    footer: {},
    imgList: {
      dataList: {},
      http: dataList.http,
      title: false,
      title1: true
    }
  },
  footer: function (e) {
    var num = true
    dataList.footer(e, this, num)
  },

  onLoad: function (options) {
    dataList.ajax(this,{page:1,rows:4})
    wx.showNavigationBarLoading()
  },
  onReady: function () {
    wx.hideNavigationBarLoading()
  },
  onHide: function () {
    var cData = this.data.footer
    cData.flag = 0
    this.setData({
      footer: cData
    })
  },
  viewTap: function () {
    console.log(33333333)
  },
  bodyNone: function () {
    var cData = this.data.footer
    cData.flag = 0
    this.setData({
      footer: cData
    })
  },
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
