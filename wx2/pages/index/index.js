//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        name: "vincent",
        description: "a developer for html5 and iOS",
        text: "待我代码编成,娶你为妻可好",
        userInfo:{}
    },
    //开始加载数据
    onLoad: function(options) {
        console.log("onLoad")
         var that = this
        //当我们创建完程序后，在app.js中就有一个getUserInfo方法，我们用app实例调用getUserInfo方法获取当前用户信息，并赋值给userInfo
        app.getUserInfo(function(cur_userInfo){
            //更新数据
            that.setData({
                //获取到当前用户信息cur_userInfo赋值给页面变量userInfo
                userInfo:cur_userInfo
            })
        })
    },
    //开始渲染
    onReady: function() {
        console.log("onReady")
    },
    
    onShow: function() {
        console.log("onShow")
    },
    onHide: function() {
        console.log("onHide")
    },
    onUnload: function() {
        console.log("onUnload")
    },
})
