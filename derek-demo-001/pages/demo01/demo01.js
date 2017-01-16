var util = require('../../utils/util.js')
Page({
  data: {
    sex : "man",
    myData: {}
  },
  onLoad: function () {
    this.setData({
      myData: {"name":"derek chen", "age" : 28}
    });
    console.log(this.data.myData)
  }
})