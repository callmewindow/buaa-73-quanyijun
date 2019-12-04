//app.js
var plugin = requirePlugin("chatbot");

App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    plugin.init({
      appid: "0DKfbySvcgo0rcivessf1nShOmwQPI",
      success: () => { },
      fail: error => { },
      // guideList: [
      //   "未连接网络"
      //   ],
      textToSpeech: true, //默认为ture打开状态
      // welcomeImage: "http://i1.fuimg.com/704904/c3f1e13bf72bb68f.png", 和welcome只能显示一个，因此作为结束图片使用
      welcome: "你好，我叫权益君，是你的私人生活助手，我觉察到你需要一些帮助",
      background: "rgba(251, 254, 255, 1)",
      guideCardHeight: 40,
      operateCardHeight: 145,
      history: true,
      historySize: 60,
      navHeight: 0
    });

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})