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
    let d_id = wx.getStorageSync('d_id');
    console.log(wx.getStorageSync('d_id'));
    wx.request({
      method:"POST",
      url: 'http://localhost:8080/delivery/getInfo',
      data:{
        d_id:d_id
      },
      success(res){
        console.log(res.data.dt);
        const dt = res.data.dt;
        that.setData({
          username:dt.d_username,
          phone:dt.d_phone,
          password:dt.d_password,
          ordercount:dt.finishedOrderCount
        })
      }
    });
  },
  methods: {
    edit_pn(){
      let d_id = wx.getStorageSync('d_id');
      this.setData({
        pn_on_editing:!this.data.pn_on_editing
      })
      if(this.data.pn_on_editing){
        wx.request({
          method:"POST",
          url: 'http://localhost:8080/delivery/updateInfo',
          data:{
            d_id:d_id,
            d_password:this.data.password,
            d_phone:this.data.phone
          },
          success(res){
            console.log(res);
          }
        })
      }
    },
  }
})