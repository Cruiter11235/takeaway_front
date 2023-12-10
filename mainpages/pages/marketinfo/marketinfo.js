// pages/marketinfo/marketinfo.js
import {foodlistLoader,commentlistLoader} from "../../../utils/DataLoader";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ReportContent:"",
    m_id:"",
    pricesum: 0,
    activekey: 0,
    foodlist: [],
    commentlist:[],
    show:false
  },
onClickHide(){
  this.setData({
    show:false
  });
},
noop() {},
// 点菜评论切换
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
  // 拉取菜品数据和评论
  getdata(m_id){
    console.log(m_id);
    let that = this;
    wx.request({
      method:"POST",
      url: 'http://localhost:8080/customer/getMeals',
      data:{
        m_id:m_id
      },
      success(res){
        console.log(res.data.dt);
        let data = res.data.dt;
        that.setData({
          foodlist:foodlistLoader(data)
        });
      }
    });
    wx.request({
      method:"POST",
      url: 'http://localhost:8080/customer/getComments',
      data:{
        m_id:m_id
      },
      success(res){
        console.log(res.data);
        let data = res.data.dt;
        that.setData({
          commentlist:commentlistLoader(data)
        });
      }
    });
  },
  onSubmit(){
    let c_id = wx.getStorageSync('c_id');
    let m_id = this.data.m_id;
    let submitlist = [];
    // 提交订单
    console.log(`总价格${this.data.pricesum/100}`);
    const comps = this.selectAllComponents(".f-class");
    comps.forEach((el)=>{
      submitlist.push({
        "f_id":el.data.info.id,
        "f_count":el.data.count
      })
    });
    console.log(submitlist,this.data.m_id,wx.getStorageSync('c_id'));
    wx.request({
      method:"POST",
      url: 'http://localhost:8080/customer/createOrder',
      data:{
        c_id:c_id,
        m_id:m_id,
        food_list:submitlist
      },
      success(res){
        console.log(res);
      }
    })
  },
  createReport(){
    this.setData({
      show:true
    });
  },
  submitReport(){
    let m_id = this.data.m_id;
    let c_id = wx.getStorageSync('c_id');
    let content = this.data.ReportContent;
    console.log("已提交举报",this.data.m_id,wx.getStorageSync('c_id'));
    this.setData({
      ReportContent:""
    });
    wx.request({
      method:'POST',
      url: 'http://localhost:8080/customer/createReport',
      data:{
        c_id:c_id,
        m_id:m_id,
        content:content
      },
      success(res){
        console.log(res);
      }
    })
  },
  // 加载生命周期
  onLoad(options) {
    this.setData({
      m_id:options.m_id
    });
    this.getdata(options.m_id);
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