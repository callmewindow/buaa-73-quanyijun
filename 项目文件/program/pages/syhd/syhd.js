// pages/syhd/syhd.js
import { $wuxToast } from '../../dist/index'
var qy_num = 0;
var wy_num = 0;
var xx_num = 0;
var ty_num = 0;
var sb_num = 0;
var db_num = 0;
var buaa_num = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quanyi: 'none',
    wenyi: 'none',
    xuexi: 'none',
    tiyu: 'none',
    sbxq: 'none',
    daban: 'none',
    buaa: 'none',
    tall: '800rpx',
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


  qyshow: function () {
    if (qy_num % 2 == 0) {
      this.setData({
        quanyi: 'block'
      }),
      qy_num = 1;
    } else {
      this.setData({
        quanyi: 'none'
      }),
      qy_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  wyshow: function () {
    if (wy_num % 2 == 0) {
      this.setData({
        wenyi: 'block'
      }),
      wy_num = 1;
    } else {
      this.setData({
        wenyi: 'none'
      }),
      wy_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  xxshow: function () {
    if (xx_num % 2 == 0) {
      this.setData({
        xuexi: 'block'
      }),
      xx_num = 1;
    } else {
      this.setData({
        xuexi: 'none'
      }),
      xx_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  tyshow: function () {
    if (ty_num % 2 == 0) {
      this.setData({
        tiyu: 'block'
      }),
      ty_num = 1;
    } else {
      this.setData({
        tiyu: 'none'
      }),
      ty_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  sbshow: function () {
    if (sb_num % 2 == 0) {
      this.setData({
        sbxq: 'block'
      }),
        sb_num = 1;
    } else {
      this.setData({
        sbxq: 'none'
      }),
        sb_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  dbshow: function () {
    if (db_num % 2 == 0) {
      this.setData({
        daban: 'block'
      }),
        db_num = 1;
    } else {
      this.setData({
        daban: 'none'
      }),
        db_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  buaashow: function () {
    if (buaa_num % 2 == 0) {
      this.setData({
        buaa: 'block'
      }),
        buaa_num = 1;
    } else {
      this.setData({
        buaa: 'none'
      }),
        buaa_num = 0;
    };
    switch (qy_num + wy_num + xx_num + ty_num + sb_num + db_num + buaa_num) {
      case 0: this.setData({
        tall: '900rpx'
      }); break;
      case 1: this.setData({
        tall: '1050rpx'
      }); break;
      case 2: this.setData({
        tall: '1300rpx'
      }); break;
      case 3: this.setData({
        tall: '1450rpx'
      }); break;
      case 4: this.setData({
        tall: '1600rpx'
      }); break;
      case 5: this.setData({
        tall: '1750rpx'
      }); break;
      case 6: this.setData({
        tall: '1900rpx'
      }); break;
      case 7: this.setData({
        tall: '2050rpx'
      }); break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qy_num = 0;
    wy_num = 0;
    xx_num = 0;
    ty_num = 0;
    sb_num = 0;
    db_num = 0;
    buaa_num = 0;
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