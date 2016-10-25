var app = getApp()
Page({
  data: {
    lists : [
      {name:"view",des:"视图容器"},
      {name:"scroll-view",des:"可滚动视图容器"},
      {name:"swiper",des:"滚动视图"},
      {name:"icon",des:"小图标"},
      {name:"text",des:"用来显示文本"},
      {name:"progress",des:"进度条"},
      {name:"button",des:"按钮"},
      {name:"checkbox",des:"多选框"},
      {name:"form",des:"表单"},
      {name:"input",des:"文本输入框"},
      {name:"label",des:"用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件"},
      {name:"picker",des:"滚动选择器，现支持三种选择器，通过mode来区分，分别是普通选择器，时间选择器，日期选择器，默认是普通选择器"},
      {name:"radio",des:"单项选择器"},
      {name:"slider",des:"滑动选择器"},
      {name:"switch",des:"开关选择器"}
      ]
  },

  cellClick: function(e){
    console.log(e.currentTarget.id);
     wx.navigateTo({
       url: '../detail/detail?index=' + e.currentTarget.id
     });
   },

  onLoad: function () {
      console.log("页面数据加载完成");
  }
})
