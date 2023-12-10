// pages/welcome/welcome.js
import Notify from '@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: "customer",
    username: "",
    password: ""
  },
  // 缓存数据
  saveData(k, v) {
    wx.setStorageSync(k, v);
  },
  login() {
    if (this.data.username === "" || this.data.password === "") {
      Notify("输入不合法");
      return;
    }
    const that = this;
    // 测试，获取顾客信息
    wx.request({
      method: 'POST',
      url: 'http://localhost:8080/login',
      data: {
        username: this.data.username,
        password: this.data.password,
        role: this.data.role
      },
      success(res) {
        console.log(res.data);
        if (res.data.c_id != undefined) {
          that.saveData("c_id", res.data.c_id);
        }
        if (res.data.d_id != undefined) {
          that.saveData("d_id", res.data.d_id);
        }
        if (res.data.status == 0) {
          switch (that.data.role) {
            case "customer":
              wx.navigateTo({
                url: '/userpages/pages/userindex/userindex',
              });
            case "delivery":
              wx.navigateTo({
                url: '/stuffpages/pages/stuffindex/stuffindex',
              });
          }
        }else{
          Notify("登陆失败!");
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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