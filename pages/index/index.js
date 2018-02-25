//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
  },
  toList: function() {
    wx.navigateTo({
      url: '../list/list',
      success: function (){
        console.log("---+--")
      },
      fail:function(){
        console.log("---fail--")
      }
    })
    console.log("-----")
  },
  toVideo: function () {
    wx.navigateTo({
      url: '../video/video',
      success: function () {
        console.log("---+--")
      },
      fail: function () {
        console.log("---fail--")
      }
    })
    console.log("-----")
  },

  toC: function () {
    wx.navigateTo({
      url: '../shares/shares',
      success: function () {
        console.log("---+--")
      },
      fail: function () {
        console.log("---fail--")
      }
    })
    console.log("-----")
  }
  
})
