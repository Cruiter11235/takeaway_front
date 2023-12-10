// components/foodcard/foodcard.js
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
    imageURL:"/static/meishi.png",
    title:"商品标题",
    descriptionInfo:"描述信息",
    count:0,
    price:"10.00"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addcount(){
      this.setData({
        count:this.data.count+1
      });
      let param =  parseFloat(this.data.info.price);
      this.triggerEvent("changeprice",param)
    },
    minuscount(){    
      let param =  parseFloat(this.data.info.price)*-1;
      if(this.data.count>=1){
        this.triggerEvent("changeprice",param);
      }
      let new_count =  this.data.count-1 ;
      new_count = new_count>=0 ? new_count : 0 ; 
      this.setData({
        count:new_count
      })
    }
  }
})