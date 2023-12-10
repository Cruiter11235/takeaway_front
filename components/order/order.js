// components/order/order.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    dt:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    folded:true,
    foldedclass:"foldedclass",
    unfoldedclass:"unfoldedclass"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeState(){
      this.setData({
        folded:!this.data.folded
      })
    }
  }
})