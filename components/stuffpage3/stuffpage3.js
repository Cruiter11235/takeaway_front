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
    ordercount:0,
    username:"",
    phone:"",
    pn_on_editing:true,
  },

  /**
   * 组件的方法列表
   */
  attached(){
    const that = this;
    console.log(wx.getStorageSync('d_id'));
    wx.request({
      url: 'http://localhost:3000/deliveryinfo',
      success(res){
        console.log(res.data);
        const dt = res.data;
        that.setData({
          username:dt.username,
          phone:dt.phone,
          ordercount:dt.finishedOrderCount
        })
      }
    });
  },
  methods: {
    edit_pn(){
      this.setData({
        pn_on_editing:!this.data.pn_on_editing
      })
      if(this.data.pn_on_editing){
        console.log(this.data.phone);
      }
    },
  }
})