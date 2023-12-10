// components/userpage2/userpage2.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    OrderList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getdata(){
      let that = this;
      wx.request({
        url: 'http://localhost:3000/orderlist',
        success(res){
          console.log(res.data);
          that.setData({
            OrderList:res.data
          })
        }
      })
    }
  },
  attached(){
    // 拉取用户订单
    console.log(wx.getStorageSync('c_id'));
    this.getdata();
  }
})