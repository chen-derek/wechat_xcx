// This is our App Service.
// This is our data.
var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    this.setData({
      name: 'MINA'
    })
  }
})