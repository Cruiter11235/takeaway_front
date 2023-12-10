// components/stuffpage2/stuffpage2.js
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
      const o_id = e.target.id.substring(2);
      console.log("完成订单:"+o_id);
    },
    getdata(){
      const that = this;
      wx.request({
        url: 'http://localhost:3000/dor',
        success(res){
          console.log(res.data);
          that.setData({
            dt:res.data
          })
        }
      })
    }
  }
})