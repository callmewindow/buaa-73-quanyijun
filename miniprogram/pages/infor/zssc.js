// pages/jxyy/lsyy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://i.loli.net/2019/10/31/XwRMGSzjnq2P6r9.png']
  },	/** 	 * 预览图片	 */

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接		  	
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  },
  
})