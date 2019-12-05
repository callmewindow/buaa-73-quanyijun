// miniprogram/pages/officialLink/officialLink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountId: '',
    name: '',
    images: '',
    num: '',
    intro: '',
  },

  copy: function(e) {
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
    this.accountId = options.id

    const db = wx.cloud.database({})

    db.collection('official_account').where({
      _id: this.accountId
    }).get({
      success(res) {
        that.setData({
          name: res.data[0].name,
          intro: res.data[0].intro,
          num: res.data[0].num,
          image: res.data[0].image,
        })
      }
    })

    console.log(that.data.name)
    if(this.name == "北航官方")
    {
      this.setData({
        name: "北京航空航天大学"
      })
    }
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