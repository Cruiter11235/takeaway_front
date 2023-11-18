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
    username:"NXA436604174",
    location_on_editing:true,
    location:"四川大学",
    phone_number:"15258285788",
    pn_on_editing:true,
    name:"庄锦骏",
    name_on_editing:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    edit_username(){
      this.setData({
        location_on_editing:!this.data.location_on_editing
      })
    },
    edit_pn(){
      this.setData({
        pn_on_editing:!this.data.pn_on_editing
      })
    },
    edit_name(){
      this.setData({
        name_on_editing:!this.data.name_on_editing
      })
    }
  }
})