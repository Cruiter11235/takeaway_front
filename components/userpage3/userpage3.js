// components/userpage3/userpage3.js
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
    username:"",
    location_on_editing:true,
    address:"",
    phone:"",
    pn_on_editing:true,
    name:"",
    name_on_editing:true
  },

  /**
   * 组件的方法列表
   */
  attached(){
    const that = this;
    let c_id = wx.getStorageSync('c_id');

    wx.request({
      method:"POST",
      url: 'http://localhost:8080/customer/getInfo',
      data:{
        c_id:c_id
      },
      success(res){
        const data = res.data.dt;
        console.log(data);
        that.setData({
          address:data.c_address,
          name:data.c_name,
          username:data.c_username,
          password:data.c_password,
          phone:data.c_phone
        })
      }
    });
  },
  methods: {
    edit_username(){
      this.setData({
        location_on_editing:!this.data.location_on_editing
      })
      if(this.data.location_on_editing){
        // 这里发送更新请求
        this.updateData();
      }
    },
    edit_pn(){
      this.setData({
        pn_on_editing:!this.data.pn_on_editing
      })
      if(this.data.pn_on_editing){
        this.updateData();
      }
    },
    edit_name(){
      this.setData({
        name_on_editing:!this.data.name_on_editing
      })
      if(this.data.name_on_editing){
        this.updateData();
      }
    },
    updateData(){
      const that = this;
      let c_id = wx.getStorageSync('c_id');
      wx.request({
        method:'POST',
        url: 'http://localhost:8080/customer/updateInfo',
        data:{
          c_id:c_id,
          c_password:that.data.password,
          c_address:that.data.address,
          c_name:that.data.name,
          c_phone:that.data.phone
        },
        success(res){
          console.log(res);
        }
      })
    }
  }
})