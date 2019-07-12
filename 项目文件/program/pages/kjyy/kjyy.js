// pages/kjyy/kjyy.js
import { $wuxToast } from '../../dist/index'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    extraData: {
      id: '39056',  // 来源为吐个槽上申请的产品ID ，查看路径：tucao.qq.com ->产品管理->ID
    },
    homeimg: '../../icon/home.png',
    alertimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',
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