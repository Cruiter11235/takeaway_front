// components/userpage1/userpage1.js
import {classimg,marketlistLoader} from "../../utils/DataLoader.js";
Component({

  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    searchvalue: "",
    classlist:classimg,
    marketlist: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search() {
      console.log(this.data.searchvalue);
    },
    // 拉取商家数据
    getdata() {
      let that = this;
      wx.request({
        method:'POST',
        url: 'http://localhost:8080/customer/getMerchants',
        data:{},
        success(res) {
          let data = res.data.dt;
          that.setData({
            marketlist:marketlistLoader(data)
          })
        }
      })
    }
  },
  attached() {
    this.getdata();
  }
})