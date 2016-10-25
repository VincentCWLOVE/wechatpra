var app = getApp();
Page({
    data: {
        index: -1
    },
    onLoad: function(opts){
        console.log("detail页面数据加载完成");
        this.setData({
           index: opts.index
        });
    } 
       
});