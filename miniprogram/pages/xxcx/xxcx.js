// pages/yjfk/yjfk.js
import { $wuxToast } from '../../dist/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeimg: '../../icon/home.png',
    alertimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',

    officialLinks:[],
    officialAccounts:[],

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
  showToastjl() {
    $wuxToast().show({
      type: 'default',
      duration: 1000,
      color: '#fff',
      icon: 'ios-cloud-upload',
      text: '数据库未连接，请使用其他功能',
      success: () => console.log('有人催你整理数据')
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
      name: 'getOfficialLink',
      data: {},
      success: res => {
        that.setData({
          officialLinks: res.result.officialLink.data
        })
      },
      fail: err => {
        console.error('[云函数] 调用失败', err)
      }
    })
    wx.cloud.callFunction({
      name: 'getOfficialAccount',
      data: {},
      success: res => {
        that.setData({
          officialAccounts: res.result.officialAccount.data
        })
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