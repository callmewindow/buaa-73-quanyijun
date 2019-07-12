var num = 1;
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    toView: '',
    ml: 'none',
  },
  mulu: function () {
    if (num % 2 == 1) {
      this.setData({
        ml: 'block'
      })
    } else {
      this.setData({
        ml: 'none'
      })
    }
    num = num + 1
  },

  jumpto: function (e) {

    // 获取标签元素上自定义的 data-opt 属性的值
    let target = e.currentTarget.dataset.opt;

    this.setData({
      toView: target
    })

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

});