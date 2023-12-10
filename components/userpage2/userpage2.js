// components/userpage2/userpage2.js
import {orderDataLoader} from "../../utils/DataLoader";
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
      let c_id = wx.getStorageSync('c_id');
      wx.request({
        method:"POST",
        url: 'http://localhost:8080/customer/getMyOrders',
        data:{
          c_id:c_id
        },
        success(res){
          let data = res.data.dt;
          console.log(data);
          that.setData({
            OrderList:orderDataLoader(data)
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