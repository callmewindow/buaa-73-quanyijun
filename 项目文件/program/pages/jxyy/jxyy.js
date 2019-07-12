Page({
  data: {
    checkboxItems: [
      { name: '18:00-19:00', value: '0', checked: true },
      { name: '19:00-20:00', value: '1', checked: true },
      { name: '20:00-21:00', value: '2' },
      { name: '21:00-22:00', value: '3' }
    ],
  },
  submitnb: function () {
    wx.navigateTo({
      url: '../yycg/yycg',
    })
  },

  formSubmit: function (e) {
    console.log('有人预约了！具体内容为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
  },

/*
  formSubmit: function(e) {
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'wo de fu wu qi',
      data: formData,
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.modalTap();
      }
    })
  },
*/

  checkboxChange: function (e) {

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
});