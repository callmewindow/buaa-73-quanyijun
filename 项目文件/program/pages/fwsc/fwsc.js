// pages/fwsc/fwsc.js
import { $wuxToast } from '../../dist/index'
var num1 = 1;
var num2 = 1;
var num3 = 1;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    dis1:'block',
    dis2:'none',
    dis3:'none',
    con1:'none',
    con2:'none',
    con3:'none',
    image: ['https://i.loli.net/2018/10/04/5bb5dc086fb04.png']
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接		  	
      urls: this.data.image // 需要预览的图片http链接列表
    })
  },

  disable() {
    $wuxToast().show({
      type: 'default',
      duration: 1000,
      color: '#fff',
      icon: 'ios-close-circle-outline',
      text: '小程序内部阅读暂时关闭，请下载查看',
      success: () => console.log('部分阅读')
    })
  },

  find1(){
    this.setData({
      dis1: 'block',
      dis2: 'none',
      dis3: 'none'
    })
  },

  find2() {
    this.setData({
      dis1: 'none',
      dis2: 'block',
      dis3: 'none'
    })
  },

  find3() {
    this.setData({
      dis1: 'none',
      dis2: 'none',
      dis3: 'block'
    })
  },
  out1() {
    if(num1 % 2 == 1){
      this.setData({
        con1: 'block'
      })
    }
    else{
      this.setData({
        con1: 'none'
      })
    }
    num1 = num1 + 1
  },

  out2() {
    if (num2 % 2 == 1) {
      this.setData({
        con2: 'block'
      })
    }
    else {
      this.setData({
        con2: 'none'
      })
    }
    num2 = num2 + 1
  },

  out3() {
    if (num3 % 2 == 1) {
      this.setData({
        con3: 'block'
      })
    }
    else {
      this.setData({
        con3: 'none'
      })
    }
    num3 = num3 + 1
  },

  onChange(e) {
    this.setData({
      current: e.detail.key,
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