// components/stuffpage1/stuffpage1.js
import {DeliveryOrdersLoader} from "../../utils/DataLoader";
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
    dt:[]
  },

  /**
   * 组件的方法列表
   */
  attached(){
    this.getdata();
  },
  methods: {
    getdata(){
      const that = this;
      let d_id = wx.getStorageSync('d_id');
      console.log(wx.getStorageSync('d_id'));
      wx.request({
        method:'POST',
        url: 'http://localhost:8080/delivery/getOrders',
        data:{},
        success(res){
          console.log(res.data.dt);
          let data = res.data.dt;
          that.setData({
            dt:DeliveryOrdersLoader(data)
          })
        }
      })
    },
    takeOrder(e){
      const that = this;
      let o_id = "";
      let d_id = wx.getStorageSync('d_id');
      o_id=e.target.id;
      o_id = o_id.substring(2);
      console.log("订单号:"+o_id);
      wx.request({
        method:"POST",
        url: 'http://localhost:8080/delivery/updateOrder',
        data:{
          o_id:o_id,
          d_id:d_id
        },
        success(res){
          console.log(res);
          that.getdata();
        }
      })
    }
  }
})