// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0,
    _5xian: 0,
    spceificSum: 0,
    tax: 0
  },

  handleOriginMoney(e){
    var input = e.detail.value
    this.setData({
      money: input
    })
  },

  handle5Xian1Jin(e) {
    this.setData({
      _5xian: e.detail.value
    })
  },

  handleSpecificSum(e) {
    this.setData({
      spceificSum: e.detail.value
    })
  },

  get5Xian1Jin: function(e){
    
  },

  getTax: function(e){
    var money = this.data.money
    var _5xian = this.data._5xian
    var specificSum = this.data.spceificSum
    console.log("money: " + money + "   _5xian: " + _5xian + "   specificSum: " + specificSum);
    var base = money - _5xian - specificSum - 5000;
    console.log("base: " + base)
    var taxValue = 0
    if (money < 5000) {
      taxValue = base * 0.05;
    } else if (money < 10000) {
      taxValue = (base - 5000) * 0.1 + (5000 * 0.05);
    } else if (money < 30000) {
      taxValue =  base * 0.2 + (5000 * 0.05) + (5000 * 0.1);
    } else if (money < 50000) {
      taxValue = base * 0.3 + (5000 * 0.05) + (5000 * 0.1) + (20000 * 0.2);
    } else {
      taxValue = base * 0.35 + (5000 * 0.05) + (5000 * 0.1) + (20000 * 0.2) + (20000 * 0.3);
    }
    console.log("tax: " + taxValue)
    this.setData({
      tax: taxValue
    })
  },

  handleCalculate(e) {
    this.getTax()
  },

  goto5xian(e){
    wx.navigateTo({
      url: '../five/five',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})