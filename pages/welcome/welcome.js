// pages/welcome/welcome.js
import Notify from '@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ""
  },
  saveData(k,v){
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
      url: 'http://localhost:3000/userinfo',
      success(res){
        console.log(res.data);
        that.saveData("c_id",res.data.c_id);
      }
    })
    //测试，获取外卖员信息
    wx.request({
      url: 'http://localhost:3000/deliveryinfo',
      success(res){
        console.log(res.data);
        that.saveData("d_id",res.data.d_id);
      }
    })
    // 角色分支跳转逻辑
    if (this.data.username != "stuff") {
      wx.navigateTo({
        url: '/userpages/pages/userindex/userindex',
      })
    }else{
      wx.navigateTo({
        url: '/stuffpages/pages/stuffindex/stuffindex',
      })
    }

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