// components/ordercard/ordercard.js
import {OrderMealsLoader} from "../../utils/DataLoader";
Component({
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
    show: false,
    radio: 1,
    content:"",
    score:0
  },

  /**
   * 组件的方法列表
   */
  attached(){
    const that =this;
    console.log(this.data.dt.o_id);
    let dt = this.data.dt;
    let o_id = this.data.dt.o_id;
    wx.request({
      method:"post",
      url: 'http://localhost:8080/customer/getOrderMeals',
      data:{
        o_id:o_id
      },
      success(res){
        console.log(res.data.dt);
        let data = res.data.dt;
        dt.food_list = OrderMealsLoader(data);
        that.setData({
          dt:dt
        })
      }
    })
  },
  methods: {
    toMerchant(){
      const m_id = this.data.dt.m_id;
      wx.navigateTo({
        url: '/mainpages/pages/marketinfo/marketinfo?m_id='+m_id,
      })
    },
    createComment(){
      console.log("show");
      this.setData({ show: true });
    },
    onClickHide() {
      this.setData({ show: false });
    },
    noop() {},
    onChangeRadio(event) {
      this.setData({
        radio: event.detail,
      });     
    },
    onChangeContent(e){
      this.setData({
        content:e.detail
      })
    },
    changeScore(e){
      this.setData({
        score:e.detail
      })
    },
    submitComment(){
      let score = this.data.score;
      let f_id = this.data.radio;
      let content = this.data.content;
      console.log(this.data.score,this.data.radio,this.data.content)
      this.setData({
        show:false
      })
      wx.request({
        method:'POST',
        url: 'http://localhost:8080/customer/createComment',
        data:{
          f_id:f_id,
          content:content,
          score:score
        },
        success(res){
          console.log(res);
        }
      })
    }
  },
})