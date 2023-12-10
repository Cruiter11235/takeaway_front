// components/ordercard/ordercard.js
Component({
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
    show: false,
    radio: 1,
    content:"",
    score:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toMerchant(){
      const m_id = this.data.dt.m_id;
      wx.navigateTo({
        url: '/mainpages/pages/marketinfo/marketinfo?m_id='+m_id,
      })
    },
    createComment(){
      console.log("show");
      this.setData({ show: true });
    },
    onClickHide() {
      this.setData({ show: false });
    },
    noop() {},
    onChangeRadio(event) {
      this.setData({
        radio: event.detail,
      });     
    },
    onChangeContent(e){
      this.setData({
        content:e.detail
      })
    },
    changeScore(e){
      this.setData({
        score:e.detail
      })
    },
    submitComment(){
      console.log(this.data.score,this.data.radio,this.data.content)
      this.setData({
        show:false
      })
    }
  },
})