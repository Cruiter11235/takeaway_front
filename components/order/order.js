// components/order/order.js
import {OrderMealsLoader} from "../../utils/DataLoader";
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    dt:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    folded:true,
    foldedclass:"foldedclass",
    unfoldedclass:"unfoldedclass"
  },

  /**
   * 组件的方法列表
   */
  attached(){
    let o_id = this.data.dt.o_id;
    console.log(this.data.dt.o_id);
    let dt = this.data.dt;
    const that = this;
    wx.request({
      method:"POST",
      url: 'http://localhost:8080/delivery/getOrderMeals',
      data:{
        o_id:o_id
      },
      success(res){
        console.log(res.data);
        let data = res.data.dt;
        dt.foodlist = OrderMealsLoader(data);
        console.log(dt.foodlist);
        that.setData({
          dt:dt
        })
      }
    })
  },
  methods: {
    changeState(){
      this.setData({
        folded:!this.data.folded
      })
    }
  }
})