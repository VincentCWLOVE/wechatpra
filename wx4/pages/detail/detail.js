var app = getApp();
Page({
    data: {
        // 用于标记是哪个控件的详情页，默认为 -1，表示为空
        index: -1,
        imgs:[]
    },
    onLoad: function(opts){
        console.log("detail页面数据加载完成，传入过来的index为"+opts.index);
        this.setData({
            // 改变index的值
           index: opts.index,
           imgs: [
               'https://mmbiz.qlogo.cn/mmbiz_png/aib892t1XIsBGSY41xo7xGCnicTj6xib51uY1ibL0ZEET5MiautpPbE54YaFTx8TAuonFztM1aDic8m1KBGKicwy9X3gg/0?wx_fmt=gif',
               'https://mmbiz.qlogo.cn/mmbiz_jpg/aib892t1XIsBGSY41xo7xGCnicTj6xib51ut8ia8Xj4MZmTaLmVpTZDjUfGRz8RbM0bcAkKqIaPWSbsbm21ibDrFmcA/0?wx_fmt=jpeg',
               'https://mmbiz.qlogo.cn/mmbiz_png/aib892t1XIsBGSY41xo7xGCnicTj6xib51uxCInX16JvsDhSYJDN2jZggicyQRSicT0niccW92mWic6HqOw013LmkbicyQ/0?wx_fmt=png',
               'https://mmbiz.qlogo.cn/mmbiz_jpg/aib892t1XIsBGSY41xo7xGCnicTj6xib51u4SKQYSLm3Fu409cpNsFuCoEe6w50XUrnib266shk1RdMbCIQI57w8Qw/0?wx_fmt=jpeg'
           ],
           //是否自动切换   
           autoplay: true,
           //是否显示面板指示点
           indicatorDots: true,
           //自动切换时间间隔
           interval: 5000,
           //滑动动画时长
           duration: 1000,
           //icon
            iconSize: [20, 30, 40, 50, 60, 70],
            iconColor: [
            'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
            ],
            iconType: [
            'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
            'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
            'info_circle', 'cancel', 'search', 'clear'
            ]
        });
    },
    
    //当页面改变是会触发
    bindchangeTag:function(e){
        console.log("页面切换");
    }, 
       
});