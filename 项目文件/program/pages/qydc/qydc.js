// pages/qydc/qydc.js
import { $wuxToast } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  home: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  showToastjl() {
    $wuxToast().show({
      type: 'default',
      duration: 1500,
      color: '#fff',
      icon: 'ios-build',
      text: '后台数据整理中',
      success: () => console.log('zhengli')
    })
  },

  showToastme() {
    $wuxToast().show({
      type: 'default',
      duration: 1500,
      color: '#fff',
      icon: 'ios-hand',
      text: '莫挨老子',
      success: () => console.log('bmw')
    })
  },

  showToastmeme() {
    $wuxToast().show({
      type: 'default',
      duration: 1500,
      color: '#fff',
      icon: 'logo-ionitron',
      text: '嘤嘤嘤，都说了不要碰人家',
      success: () => console.log('yyy')
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