// components/marketcard/marketcard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    info:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goshop(){
      // 跳转到菜品详情，发送商家id
      wx.navigateTo({
        url: '/mainpages/pages/marketinfo/marketinfo?m_id='+this.data.info.id,
      })
    }
  }
})