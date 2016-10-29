var app = getApp();
Page({
    data: {
        // 用于标记是哪个控件的详情页，默认为 -1，表示为空
        index: -1
    },
    onLoad: function(opts){
        console.log("detail页面数据加载完成，传入过来的index为"+opts.index);
        this.setData({
            // 改变index的值
           index: opts.index
        });
    } 
       
});