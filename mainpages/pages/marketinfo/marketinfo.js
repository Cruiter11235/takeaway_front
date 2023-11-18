// pages/marketinfo/marketinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pricesum: 0,
    activekey: 0,
    foodlist: [],
    commentlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(e) {
    this.setData({
      activekey: e.detail.index
    })
  },
  changeprice(e){
    let new_sum = this.data.pricesum+e.detail*100;
    this.setData({
      pricesum:new_sum>=0?new_sum:0
    });
  },
  getdata(){
    let that = this;
    wx.request({
      url: 'http://localhost:3000/foodlist',
      success(res){
        that.setData({
          foodlist:res.data
        })
      }
    });
    wx.request({
      url: 'http://localhost:3000/commentlist',
      success(res){
        that.setData({
          commentlist:res.data
        });
      }
    });
  },
  onSubmit(){
    console.log(`总价格${this.data.pricesum/100}`)
  },
  onLoad(options) {
    this.getdata();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})