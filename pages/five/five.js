// pages/five/five.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0,
    old: 0,
    medicine: 0,
    lost: 0,
    home: 0,
    _5xian: 0
  },

  handleMoney(e){
    this.setData({
      money: e.detail.value
    })
  },

  handleOldInput(e){
    this.setData({
      old: e.detail.value
    })
  },

  handleMedicineInput(e) {
    this.setData({
      medicine: e.detail.value
    })
  },

  handleLostInput(e) {
    this.setData({
      lost: e.detail.value
    })
  },

  handleHomeInput(e) {
    this.setData({
      home: e.detail.value
    })
  },

  calResult(e){
    var money = this.data.money
    var old = this.data.old
    var medicine = this.data.medicine
    var lost = this.data.lost
    var home = this.data.home
    var result = money * (old + medcine + lost + home)
    this.setData({
      _5xian: result
    })
    console.log("_5xian: "+ result)
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