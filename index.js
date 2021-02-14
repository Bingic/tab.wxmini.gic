

Page({


  data: {

    tabIndex: 0,
    tabBars: ['橙子','苹果','梨子'],

  },

  tabClick(e) {
    let index = e.target.dataset.current || e.currentTarget.dataset.current;
    console.log(index)
    this.switchTab(index);
  },
  tabChange(e) {
    let index = e.target.current || e.detail.current;
    console.log("选择列表序号", index)

    this.switchTab(index);
  },
  switchTab(index) {

    this.setData({
      tabIndex: index,
    })

  },


  onLoad: function (options) {


  },

  onShow: function () {
    console.log("⭐️⭐️⭐️作者：吉克长安（WeChat: suagic）")
    console.log("⭐️⭐️⭐️github：https://github.com/Bingic/wx.tab.gic")
    console.log("⭐️⭐️⭐️Light a star for me, thank you~")

  },

})