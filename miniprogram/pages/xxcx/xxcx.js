Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeimg: '../../icon/home.png',
    alertimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',

    officialLinks:[{name:'loading'}],
    officialAccounts:[{name:'loading'}],

  },
  
  tohome2: function () {
    wx.reLaunch({
      url: '../first/first',
    })
  },
  toqyj2: function () {
    wx.reLaunch({
      url: '../intro/intro',
    })
  },
  tome2: function () {
    wx.reLaunch({
      url: '../me/me',
    })
  },
  showbdc(){
    wx.showToast({
      duration: 5000,
      icon: 'none',
      title: '进入“页面顶部”的入口后，点击“校车服务”便可进入实时更新页面进行信息查看',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据并检查是否合法
    if (!wx.cloud) {
      wx.showToast({
        title: '网络未连接',
      })
      return
    }
    var that = this
    wx.cloud.callFunction({
      name: 'getOfficialLink',
      data: {},
      success: res => {
        for(let i = 0;i<res.result.officialLink.data.length;i++)
        {
          //当前页面仅显示名称，因此对名称依次检查是否合法
          wx.cloud.callFunction({
            //名称判断
            name: 'openapi', data: { msg: res.result.officialLink.data[i].name },
            success(res2) {
              if (res2.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '链接标题出错，暂不显示' }); return }
              //全部正确则进行传值
              if (i + 1 == res.result.officialLink.data.length) {
                that.setData({
                  officialLinks: res.result.officialLink.data
                })
              }
            }
          })
        }
      },
      fail: err => {
        console.error('[云函数] 调用失败', err)
      }
    })

    wx.cloud.callFunction({
      name: 'getOfficialAccount',
      data: {},
      success: res => {
        for (let i = 0; i < res.result.officialAccount.data.length; i++) {
          //本页面显示公众号图片及名称，依次检查是否合法
          wx.cloud.callFunction({
            //名称判断
            name: 'openapi', data: { msg: res.result.officialAccount.data[i].name },
            success(res2) {
              if (res2.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '公众号标题出错，暂不显示' }); return }
              wx.cloud.callFunction({
                //图片判断
                name: 'openapi', data: { img: res.result.officialAccount.data[i].image },
                success(res3) {
                  if (res3.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '公众号图片出错，暂不显示' }); return }
              //全部正确则进行传值
                  if (i + 1 == res.result.officialAccount.data.length) {
                    that.setData({
                      officialAccounts: res.result.officialAccount.data
                    })
                  }
                }
              })
            }
          })
        }
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