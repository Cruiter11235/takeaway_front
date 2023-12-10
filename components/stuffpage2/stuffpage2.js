// components/stuffpage2/stuffpage2.js
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
    finishOrder(e){
      const that = this;
      const o_id = e.target.id.substring(2);
      console.log("完成订单:"+o_id);
      wx.request({
        method:"POST",
        url: 'http://localhost:8080/delivery/finishOrder',
        data:{
          o_id:o_id
        },
        success(res){
          console.log(res);
          that.getdata();
        }
      })
    },
    getdata(){
      const that = this;
      let d_id = wx.getStorageSync('d_id');
      wx.request({
        method:"POST",
        url: 'http://localhost:8080/delivery/getMyOrders',
        data:{
          d_id:d_id
        },
        success(res){
          console.log(res.data.dt);
          let data = res.data.dt;
          that.setData({
            dt:DeliveryOrdersLoader(data)
          });
        }
      })
    }
  }
})