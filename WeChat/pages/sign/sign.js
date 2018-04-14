// pages/sign/sign.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curDate: "",
    curDateWeek: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    signin: false,
    signout: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this;
    this.setData({
      'curDate':this.methods.getDate().curDate,
      'curDateWeek': app.globalData.weeks[this.methods.getDate().curDateWeek]
    });
    setInterval(function(){
      _this.setData({
        'curDateTime': _this.methods.getDate().curDateHour + ':' + _this.methods.getDate().curDateMinute + ':' + _this.methods.getDate().curDateSecond
      })
    },1000)
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
  
  },

  /**
   * 本页自定义函数
   */
  methods: {
    getDate () {
      let curDate = new Date();
      return {
        curDate: curDate.getFullYear() + '.' + (curDate.getMonth() + 1) + '.' + curDate.getDate() + '.',
        curDateYear: curDate.getFullYear(),
        curDateMonth: curDate.getMonth(),
        curDateDay: curDate.getDate(),
        curDateHour: curDate.getHours(),
        curDateMinute: curDate.getMinutes(),
        curDateSecond: curDate.getSeconds(),
        curDateWeek: curDate.getDay()
      }
    }
  }
})