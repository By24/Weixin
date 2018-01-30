
const footer = function (e, thts, num) {
  console.log(e, thts)
  if (e.currentTarget.dataset.id == thts.data.footer.flag) {
    var cData = thts.data.footer
    cData.flag = 0
    thts.setData({
      footer: cData
    })
  } else {
    var cData = thts.data.footer
    cData.flag = e.currentTarget.dataset.id
    thts.setData({
      footer: cData
    })
  }
  if (num) {
    return
  }
  if (e.currentTarget.dataset.id == 1) {
    // wx.navigateBack()
    wx.redirectTo({
      url: '../index/index'
    })
  }
}

const http = "http://49.4.0.233:8080/meeting"


const ajax = function (thts, data) {
  wx.request({
    url: `${http}/api/casedetails`,
    data: data,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      let arr = 'imgList.dataList'
      thts.setData({
        [arr]: res.data.rows
      })
    }
  })
}
const zhuanfa = {
  title: '成都亿享科技有限公司',
  desc: '亿享科技是智能信息化解决方案提供商。业务范围涵盖互联网 +、平台设计与构建、IT应用开发维护、IT系统建设规划与咨询、软件服务外包、APP开发、微信相关研发、大型数据中心运维管理、智慧城市及产品增值服务等。',
}
const text = "<p style= 'box-sizing: border-box; margin: 0px; padding: 0px;' > 当下，几乎每个App开发商，都可以通过微信小程序分享内容给朋友，于是有大量的流量，停留在了微信平台制作。那么如何才能让这部分流量高效的回流到App内呢？所以我们今天来聊聊【微信分享页面跳回App的小按钮】的那些小事。</p>"
module.exports = { footer, http, ajax, zhuanfa, text }