//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Demo1 测试',
    userInfo: {}
  },
  //事件处理函数
  gotoLogs: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoDemo01: function() {
    wx.navigateTo({
      url: '../demo01/demo01'
    })
  },
  gotoDemo02: function() {
    wx.navigateTo({
      url: '../demo02/demo02'
    })
  },
  gotoMap: function() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
