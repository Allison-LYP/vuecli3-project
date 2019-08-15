import Vue from "vue";
import Vuex from "vuex";
import store from "./store";

Vue.use(Vuex);

var goodsInCar = JSON.parse(localStorage.getItem('goodsInCar') || '[]');

export default new Vuex.Store({
  state: {
      goodNumber:1,
      goodsInCar:goodsInCar,  // 存放购物车里的商品信息:id、title、count、price、quantity、src、selected
  },
  mutations: {
    increment(state,num){
      if (state.goodNumber < num) {
          ++state.goodNumber;
          console.log(state.goodNumber);
      }
      else {
          state.goodNumber = num;
      }
    },
    decrement(state){
        if (state.goodNumber > 0) {
            --state.goodNumber;
            console.log(state.goodNumber);
        }
        else {
            state.goodNumber = 0;
        }
    },
    addToCar(state,goodInfo){   // 商品详情页面加入购物车
        var flag = false;  // 默认购物车里没有想要加购的商品
        state.goodsInCar.some( item => {
            if (item.id == goodInfo.id){  // 如果购物车已有该商品，只需加上数量
                item.count += parseInt(goodInfo.count);
                flag = true;
                return true;
            }
        })
        if (!flag){
            state.goodsInCar.push(goodInfo)
        }
        // 将数据存入本地
        localStorage.setItem('goodsInCar',JSON.stringify(state.goodsInCar));
    },
    updateShopCount(state,shopItem){   // 在购物车页面修改商品数量
        state.goodsInCar.some( item => {
            if (item.id == shopItem.id){
                item.count = parseInt(shopItem.count);
                return true;
            }
        });
        localStorage.setItem('goodsInCar',JSON.stringify(state.goodsInCar));
    },
    delShopInCar(state,shopId){
        state.goodsInCar.some( (item,index) => {
            if (item.id == shopId){
                item.splice(index,1);
            }
        });
        localStorage.setItem('goodsInCar',JSON.stringify(state.goodsInCar));
    },
    updateSelected(state,shopObj){
        state.goodsInCar.some( item => {
            if (item.id == shopObj.id){
                item.selected = shopObj.status
                return true;
            }
        });
        localStorage.setItem('goodsInCar',JSON.stringify(state.goodsInCar));
    },
    selectedAllChange(state,check){
        state.goodsInCar.forEach( item => {
            item.selected = check;
            return true;
        })
        localStorage.setItem('goodsInCar',JSON.stringify(state.goodsInCar));
    },
  },
  getters:{
      /*getCarShopCount(state){
          var idCount = {}
          state.goodsInCar.forEach( item => {
              idCount[item.id] = item.count;
          })
          return idCount;
      }*/
      getGoodsSelected(state){
          var o = {};
          state.goodsInCar.forEach( item => {
              o[item.id] = item.selected
          })
          return o;
      },
      getGoodsTotal(state){
          var o = {
              num:0,
              price:0
          };
          state.goodsInCar.forEach( item => {
              if (item.selected){
                  o.num += 1;
                  o.price += item.price * item.count;
              }
          })
          return o;
      }
  }
});
