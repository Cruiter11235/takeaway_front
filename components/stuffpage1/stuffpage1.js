// components/stuffpage1/stuffpage1.js
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
      console.log(wx.getStorageSync('d_id'));
      wx.request({
        url: 'http://localhost:3000/aor',
        success(res){
          console.log(res.data);
          that.setData({
            dt:res.data
          })
        }
      })
    },
    takeOrder(e){
      let otag = "";
      otag=e.target.id;
      otag = otag.substring(2);
      console.log("订单号:"+otag);
    }
  }
})