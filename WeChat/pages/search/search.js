// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchHistory: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(_this)
        _this.setData({latitude:res.latitude}) // 经度
        _this.setData({longitude:res.longitude}) // 纬度
      }
    })
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
    this.getSearchHistory()
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
  
  },

  /**
   * 扫一扫
   */
  swipeFun: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  getSearchHistory: function () {
    var _this = this
    wx.getStorage({
      key: 'searchHistory',
      success: function(res) {
        console.log(res.data)
        _this.setData({
          searchHistory: res.data
        })
      },
    })
  },

  /**
   * 搜索触发事件
   */
  searchFun: function (e) {
    const app = getApp()
    wx.request({
      url: 'http://op.juhe.cn/onebox/movie/video?key=' + app.globalData.vieoKey + '&q=',
    })
    wx.setStorage({
      key: 'searchHistory',
      data: [{}]
    })
    console.log(e.detail.value)
  }
})