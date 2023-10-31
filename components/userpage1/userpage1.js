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
    marketlist:[{id:1},{id:2},{id:3},{id:4},{id:5}],
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