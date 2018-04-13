// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curDate: "" 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.curDate = this.methods.getDate().curDate
    console.log(this.methods.getDate().curDate)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      'curDate':this.methods.getDate().curDate
    })
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
        curDate: curDate.getFullYear() + '年' + (curDate.getMonth() + 1) + '月' + curDate.getDate() + '日',
        curDateYear: curDate.getFullYear(),
        curDateMonth: curDate.getMonth(),
        curDateDay: curDate.getDate(),
        curDateHour: curDate.getHours(),
        curDateMinute: curDate.getMinutes(),
        curDateSecond: curDate.getSeconds()
      }
    }
  }
})