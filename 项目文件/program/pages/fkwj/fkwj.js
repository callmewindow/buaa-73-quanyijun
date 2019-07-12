Page({
  data: {

    accounts: ["外观方面",  "功能方面",  "数据错误", "其他"],
    accountIndex: 0,

  },

  bindAccountChange: function (e) {

    this.setData({
      accountIndex: e.detail.value
    })
  },

  alikadou: function () {
    wx.redirectTo({
      url: '../fkcg/fkcg'
    })
  },

  formSubmit: function (e) {
    console.log('有人反馈了！具体内容为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
  },

});