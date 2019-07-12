
var util = require('../../utils/util.js');
Page({
  data: {

  },
  onLoad: function getNowTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var today = now.getDate();
    var tomorrow = now.getDate() + 1;
    if (month < 10) {
      month = '0' + month;
    };
    if (today < 10) {
      today = '0' + today;
    };
    if (tomorrow < 10) {
      tomorrow = '0' + tomorrow;
    };
    //  如果需要时分秒，就放开
    // var h = now.getHours();
    // var m = now.getMinutes();
    // var s = now.getSeconds();
    var today = year + '-' + month + '-' + today;
    var tomorrow = year + '-' + month + '-' + tomorrow;
    this.setData({
      today: today,
      tomorrow: tomorrow
    });
  }

})