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
    console.log(wx.getStorageSync('c_id'));
    wx.request({
      url: 'http://localhost:3000/userinfo',
      success(res){
        const dt = res.data;
        console.log(res.data);
        that.setData({
          address:dt.address,
          name:dt.name,
          username:dt.username,
          password:dt.password,
          phone:dt.phone
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
        console.log(this.data.address);
      }
    },
    edit_pn(){
      this.setData({
        pn_on_editing:!this.data.pn_on_editing
      })
      if(this.data.pn_on_editing){
        console.log(this.data.phone);
      }
    },
    edit_name(){
      this.setData({
        name_on_editing:!this.data.name_on_editing
      })
      if(this.data.name_on_editing){
        console.log(this.data.name);
      }
    }
  }
})