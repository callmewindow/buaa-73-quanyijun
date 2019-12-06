// miniprogram/pages/officialLink/officialLink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountId: '',
    name: 'loading',
    images: '',
    num: 'loading',
    intro: 'loading',
  },

  copy: function(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.content,
      success(res) {
        wx.showToast({
          title: '复制成功：' + e.currentTarget.dataset.content,
          icon: 'none',
          image: '',
          duration: 2000,
          mask: true,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    this.accountId = options.id
    const db = wx.cloud.database({})

    db.collection('official_account').where({
      _id: this.accountId
    }).get({
      success(res) {
        //获取数据后检查是否违规
        wx.cloud.callFunction({
          //名字
          name: 'openapi', data: { msg: res.data[0].name },
          success(res2) {
            if (res2.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
            wx.cloud.callFunction({
              //简介
              name: 'openapi', data: { msg: res.data[0].intro },
              success(res3) {
                if (res3.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
                wx.cloud.callFunction({
                  //号码
                  name: 'openapi', data: { msg: res.data[0].num },
                  success(res4) {
                    if (res4.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
                    wx.cloud.callFunction({
                      //图片
                      name: 'openapi', data: { img: res.data[0].image },
                      success(res5) {
                        if (res5.result.msgR.errCode == 87014) { wx.showToast({ icon: 'none', title: '内容出错，暂不显示——404' }); return }
                        //全部正确则进行传值展示
                        that.setData({
                          name: res.data[0].name,
                          intro: res.data[0].intro,
                          num: res.data[0].num,
                          image: res.data[0].image,
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })

      }
    })

  },

  checkMsg: function(e) {
    console.log(this.temp);
    return true;
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