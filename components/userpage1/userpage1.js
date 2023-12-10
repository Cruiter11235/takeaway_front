// components/userpage1/userpage1.js
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
    searchvalue:"",
    classlist:[],
    marketlist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search(){
      console.log(this.data.searchvalue);
    },
    // 拉取商家数据
    getdata(){
      let that = this;
      wx.request({
        url: 'http://localhost:3000/classimage',
        success(res){
          let data = res.data;
          that.setData({
            classlist:data
          });
        }
      });
      wx.request({
        url: 'http://localhost:3000/marketlist',
        success(res){
          let data = res.data;
          console.log(data);
          that.setData({
            marketlist:data
          })
        }
      })
    }
  },
  attached(){
    this.getdata();
  }
})