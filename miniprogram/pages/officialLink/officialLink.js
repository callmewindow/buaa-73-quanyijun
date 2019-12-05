// miniprogram/pages/officialLink/officialLink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linkId:'',
    name:"",
    link:"",
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
        that.setData({
          name: res.data[0].name,
          link: res.data[0].link
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