// pages/chatbot/chatbot.js
var plugin = requirePlugin("chatbot");
var templist = [];
// var chat = plugin.getChatComponent(); 没有作用

Page({
  /**
   * 页面的初始数据
   */
  data: {
    voice: "ios-volume-high",
    functionShow: false,
    refreshSize: 23,
  },

  showFunction() {
    if (this.data.functionShow == true) {
      this.setData({
        functionShow: false
      })
    }
    else {
      this.setData({
        functionShow: true
      })
    }
  },
  changeVoice() {
    if (this.data.voice == "ios-volume-high") {
      this.setData({
        voice: "ios-volume-off"
      });
      plugin.setTextToSpeech(false);
    }
    else {
      this.setData({
        voice: "ios-volume-high"
      });
      plugin.setTextToSpeech(true);
    }
  },
  clearWindow() {
    plugin.getChatComponent().clearChatRecord();
  },
  backToNow() {
    plugin.getChatComponent().scrollToBottom();
  },
  // goBackHome回调 返回上一级页面
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  // getQueryCallback回调, 返回数据
  getQueryCallback: function (e) {
    plugin.getChatComponent().setGuideList(templist);
  },
  // 点击机器人回答里的链接跳转webview,需要开发者自己配置一个承载webview的页面,url字段对应的小程序页面需要开发者自己创建
  // 开发者需要在小程序后台配置相应的域名
  // 1.1.7版本开始支持
  openWebview: function (e) {
    let url = e.detail.weburl
    wx.navigateTo({
      url: `/pages/webviewPage/webviewPage?url=${url}`
    })
  },
  // 点击机器人回答中的小程序，需要在开发者自己的小程序内做跳转
  // 开发者需要在小程序配置中指定跳转小程序的appId
  // 1.1.7版本开始支持
  openMiniProgram(e) {
    let { appid, pagepath } = e.detail
    wx.navigateToMiniProgram({
      appId: appid,
      path: pagepath,
      extraData: {
      },
      envVersion: '',
      success(res) {
        // 打开成功
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.cloud) {
      wx.showToast({
        title: '网络未连接',
      })
      return
    }
    var that = this
    wx.cloud.callFunction({
      name: 'getGuideList',
      data: {

      },
      success: res => {
        console.log(res)
        templist = res.result.guidelist.data[0].data;
        plugin.getChatComponent().setGuideList(templist);
      },
      fail: err => {
        console.error('[云函数] 调用失败', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    plugin.getChatComponent().setGuideList(templist);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    plugin.getChatComponent().setGuideList(templist);
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