// pages/sign/sign.js
var bmap = require('../../libs/bmap_wx.js');
var wxMarkerData = []; 
const app = getApp();
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
    signout: false,
    markers: [], 
    latitude: '',
    longitude: '',
    rgcData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.methods.getUserInfo(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let _this = this;
    /**页面刷新更新数据 */
    this.setData({
      'curDate': this.methods.getDate().curDate,
      'curDateWeek': app.globalData.weeks[this.methods.getDate("String").curWeek]
    });
    /**电子表 */
    setInterval(function(){
      _this.setData({
        'curDateTime': _this.methods.getDate().curTime
      })
    },1000)
    /**获取地址调用 */
    _this.methods.getPos(this);
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
    /**
     * 获取日期，时间点，星期
     */
    getDate () {
      let _this = this;
      let curDate = new Date();
      var curDateYear = curDate.getFullYear();
      var curDateMonth = _this.numCover((curDate.getMonth() + 1),2);
      var curDateDay = _this.numCover(curDate.getDate(), 2);
      var curDateHour = _this.numCover(curDate.getHours(), 2);
      var curDateMinute = _this.numCover(curDate.getMinutes(), 2);
      var curDateSecond = _this.numCover(curDate.getSeconds(), 2);
      var curDateWeek = curDate.getDay();
      return {
        curDate: curDateYear + '.' + curDateMonth + '.' + curDateDay,
        curTime: curDateHour + ':' + curDateMinute + ':' + curDateSecond,
        curWeek: curDateWeek
      }
    },
    /**
     * 将个位的数字转换成两位的字符串，第一位添加0
     */
    numCover (num, len) {
      var num = new String(num);
      if(num.length < len) {
        var str = '';
        for(let i = 0; i < len - num.length; i++) {
          str+='0';
        }
        return str+num;
      }
      return num;
    },
    /**获取用户信息 */
    getUserInfo (that) {
      var page = that; 
      if(app.globalData.userInfo) {
        page.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (page.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          page.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            page.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    /**
     * 获取地理位置的经纬度，返回经纬度及具体地址信息
     */
    getPos (that) {
      wx.getLocation({
        success (res) {
          console.log(that)
          // 新建百度地图对象 
          
          var BMap = new bmap.BMapWX({
            ak: 'CZzzQh5byDYjiExBcKEPoehTfzZmGf15'
          });
          var fail = function (data) {
            console.log(data)
          };
          var success = function (data) {
            console.log(data.wxMarkerData)
            wxMarkerData = data.wxMarkerData;
            console.log(that)
            that.setData({
              markers: wxMarkerData,
              latitude: wxMarkerData[0].latitude,
              longitude: wxMarkerData[0].longitude
            });
          }
          // 发起regeocoding检索请求 
          BMap.regeocoding({
            fail: fail,
            success: success
          }); 
        }
      })
    },
    sign () {
      console.log("签到成功")
    }
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      rgcData: {
        address: '地址：' + data[i].address + '\n',
        desc: '描述：' + data[i].desc + '\n',
        business: '商圈：' + data[i].business
      }
    });
  },
  /**签到函数 */
  sign () {
    var _this = this;
    wx.showToast({
      title: '签到成功',
      icon: "success",
      success () {
        _this.setData({
          signin: true
        })
      }
    })
  }
})