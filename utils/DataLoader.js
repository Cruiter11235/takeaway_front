const classimg = [{
    "id": 1,
    "url": "https://www.freeimg.cn/i/2023/10/31/6540e381a05bc.png",
    "text": "中餐"
  },
  {
    "id": 2,
    "url": "https://www.freeimg.cn/i/2023/10/31/6540e381a5007.png",
    "text": "甜点饮品"
  },
  {
    "id": 3,
    "url": "https://www.freeimg.cn/i/2023/10/31/6540e381a53f0.png",
    "text": "蔬菜水果"
  },
  {
    "id": 4,
    "url": "https://www.freeimg.cn/i/2023/10/31/6540e381a0abf.png",
    "text": "西式快餐"
  }
]
function marketlistLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.id = data[i].m_id;
    tmp.url = "https://www.freeimg.cn/i/2023/10/31/6540e381a05bc.png";
    tmp.m_name = data[i].m_name;
    res.push(tmp);
  }
  return res;
}
function foodlistLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.id = data[i].f_id;
    tmp.url = "https://www.freeimg.cn/i/2023/10/31/6540e381a05bc.png";
    tmp.title = data[i].f_name;
    tmp.price = data[i].f_price;
    res.push(tmp);
  }
  return res;
}
function commentlistLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.id = data[i].comment_id;
    tmp.username = data[i].f_name;
    tmp.comment = data[i].content;
    res.push(tmp);
  }
  return res;
};
function orderDataLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.o_id = data[i].o_id;
    tmp.d_username = data[i].d_username || "NULL";
    tmp.d_phone = data[i].d_phone || "NULL",
    tmp.m_id = data[i].m_id;
    tmp.m_name = data[i].m_name;
    tmp.food_list = [];
    tmp.total_price = data[i].total_price;
    tmp.status = data[i].status;
    res.push(tmp);
  }
  console.log(res);
  return res;
}
function OrderMealsLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.f_id = data[i].f_id,
    tmp.f_name = data[i].f_name;
    tmp.count = data[i].f_count;
    tmp.price = data[i].f_price
    res.push(tmp);
  }
  return res;
}
function DeliveryOrdersLoader(data){
  let res = [];
  for(let i=0;i<data.length;i++){
    let tmp = {};
    tmp.o_id = data[i].o_id;
    tmp.m_phone = data[i].m_phone;
    tmp.m_address = data[i].m_address;
    tmp.m_name = data[i].m_name;
    tmp.c_phone = data[i].c_phone;
    tmp.c_address = data[i].c_address;
    tmp.c_name = data[i].c_name;
    res.push(tmp);
  }
  return res;
}
module.exports = {
  classimg,
  marketlistLoader,
  foodlistLoader,
  commentlistLoader,
  orderDataLoader,
  OrderMealsLoader,
  DeliveryOrdersLoader
}