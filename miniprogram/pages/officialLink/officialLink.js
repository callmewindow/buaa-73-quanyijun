// miniprogram/pages/officialLink/officialLink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linkId:'',
    name:"loading",
    link:"loading",
  },

  copy: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.content,
      success(res) {
        wx.showToast({
          title: '复制成功：' + e.currentTarget.dataset.content,
          icon: 'none',
          image: '',
          duration: 2000,
          mask: true,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    this.linkId = options.id

    const db = wx.cloud.database({})

    db.collection('official_link').where({
      _id: this.linkId
    }).get({
      success(res) {
        //获取数据后检查是否违规
        wx.cloud.callFunction({
          //名字
          name: 'openapi', data: { msg: res.data[0].name },
          success(res2) {
            if (res2.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
            wx.cloud.callFunction({
              //链接
              name: 'openapi', data: { msg: res.data[0].link },
              success(res3) {
                if (res3.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
                //全部正确则进行传值展示
                that.setData({
                  name: res.data[0].name,
                  link: res.data[0].link
                })
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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