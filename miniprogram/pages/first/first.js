// pages/wxml/index.js
import { $wuxToast } from '../../dist/index'

//index.js
//获取应用实例
var app = getApp()
var pan = 0
Page({
  data: {
    extraData: {
      id: '39056',  // 来源为吐个槽上申请的产品ID ，查看路径：tucao.qq.com ->产品管理->ID
    },
    current: 'tab1',
    navigate_ad: 'toad1',
    allf: 'none',
    cenf: 'block',
    // 图片地址
    datalist: [
      // { id: 4, img: '../../image/syjz.jpg', to: 'toad4' },
      { id: 1, img: '../../image/dys.png', to: 'toad1' },
      { id: 2, img: '../../image/tzb.jpg', to: 'toad2' },
      { id: 3, img: '../../image/sezs.jpg', to: 'toad3' },
    ],
    homeimg: '../../icon/homen.png',
    alertimg: '../../icon/alert.png',
    identityimg: '../../icon/identity.png',
    //是否显示面板指示点
    indicatordots: false,
    //自动播放
    autoplay: true,
    //切换时间间隔
    interval: 3000,
    //滑动时长
    duration: 1000,
    //存放滑动视图的current
    current: 0,
    //分页标签class条件判断的值
    tabArr: {
      tabCurrentIndex: 0
    }
  },

  changeui: function() {
    if(pan == 0){
      pan = 1;
      this.setData({
        allf: 'block',
        cenf: 'none',
      })
    }else{
      pan = 0;
      this.setData({
        allf: 'none',
        cenf: 'block',
      })
    }
    wx.showToast({
      title: '我和我最后的倔强',
      icon: 'none',
      image: '',
      duration: 700,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  onChange(e) {
    this.setData({
      current: e.detail.key,
    })
  },

  toad1: function () {
    wx.navigateTo({
      url: '../yjhd/dys',
    })
  },
  toad2: function () {
    wx.navigateTo({
      url: '../bhhd/tzb',
    })
  },
  toad3: function () {
    wx.navigateTo({
      url: '../yjhd/sezs',
    })
  },
  toad4: function () {
    wx.navigateTo({
      url: '../bhhd/syjz',
    })
  },
  tohome() {
    wx.redirectTo({
      url: '../first/first',
    })
  },
  torobot() {
    wx.navigateTo({
      url: '../chatbot/chatbot',
    })
  },
  toqyj() {
    wx.redirectTo({
      url: '../intro/intro',
    })
  },
  tome() {
    wx.redirectTo({
      url: '../me/me',
    })
  },

  showToastjj() {
    $wuxToast().show({
      type: 'default',
      duration: 1000,
      color: '#fff',
      icon: 'ios-cloud-upload',
      text: '数据库未连接，请使用其他功能',
      success: () => console.log('有人催你整理数据')
    })
  },

  //事件处理函数
  //触摸分页标签触发事件
  veHandle: function (e) {
    //每个分页标签都设置了data-index,触摸触发事件获取此数值
    //用此数值替换滑动视图的current
    //用此数值替换分页标签class判断的值
    var currentIndex = e.target.dataset.index
    this.setData({
      current: currentIndex,
      "tabArr.tabCurrentIndex": currentIndex
    })
  },
  //通过滑块视图的current改变触发事件
  swiperChange: function (e) {
    //获取视图滑块当前的current
    //用此数值替换分页标签的current的值
    var swiperCurrent = e.detail.current;
    this.setData({
      'tabArr.tabCurrentIndex': swiperCurrent
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    pan = 0;
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