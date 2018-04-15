// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leaveType: ["事假","病假","年假","婚假","产假","丧假","调休"],
    index: 0,
    startDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
    _startDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
    endDate: "",
    _endDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载中')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面第一次加载')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
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
   * 用户点击tab页时触发
   */
  onTabItemTap: function (item) {
    console.log(item.text)
    console.log(item.index)
    console.log(item.pagePath)
  },

  /**
   * 转发事件
   */
  onShareAppMessage: function () {
    console.log(this.route)
    console.log('开始转发')
    return {
      // titie: '转发标题',
      path:  '/pages/home/home',
      success: function () {
        console.log('转发成功')
      },
      fail: function () {
        console.log('取消转发')
      }
    }
  },

  viewEvent: function () {
    console.log(getCurrentPages())
    console.log('click me')
    console.log(this.data)
    this.setData({
      tap: '数据已改变'
    },function () {
      console.log('数据改变完成的回调函数')
    })
  },
  video: function () {
    wx.request({
      url: 'https://op.juhe.cn/onebox/movie/video',
      method: 'get',
      data: {
        key: '3f5b810cbc8592915cc489a21a1cc3de',
        q: '康熙王朝'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  bindPickerChange (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindSDateChange (e) {
    this.setData({
      _startDate: e.detail.value
    })
  },
  bindEDateChange(e) {
    this.setData({
      _endDate: e.detail.value
    })
  }
})