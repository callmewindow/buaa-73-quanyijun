Page({
  data: {
    animationData: {}
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation
    // animation.scale(2, 2).rotate(45).step()
    this.setData({
      animationData: animation.export()
    })
    var n = 0;
    //连续动画需要添加定时器,所传参数每次+1就行
    setInterval(function () {
      // animation.translateY(-60).step()
      n = n + 1;
      this.animation.rotate(40 * (n)).step()
      this.setData({
        animationData: this.animation.export()
      })
    }.bind(this), 120)
  },

  onLoad: function() {
    setTimeout(function () {
      wx.redirectTo({
        url: '../first/first',
      })
    }, 1500
    )
  }

})