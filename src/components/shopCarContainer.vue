<template>
    <div class="shopCarContainer">
        <div class="shopList" v-for="(item,i) in goodsItem" :key="item.src">
            <mt-switch
                    v-model="$store.getters.getGoodsSelected[item.id]"
                    @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])">
            </mt-switch>
            <img :src="item.src" alt="">
            <div class="info">
                <p>{{ item.title }}</p>
                <span>￥ {{ item.price }}</span>
                <div class="numBox">
                    <button class="reduceBtn btn-css" @click="reduceNum(item)">-</button>
                    <input v-model="item.count" class="num" readonly>
                    <button class="addBtn btn-css" @click="addNum(item)">+</button>
                </div>
                <a href="#" @click.prevent="delShop(item.id,i)">删除</a>
            </div>
        </div>
        <div class="check">
            <div class="selectAll">
                <input type="checkbox" @change="selectedAllChange" v-model="check">
                <span>全选</span>
            </div>
            <div class="checkAll">
                <span>合计(不含运费)：</span>
                <span class="money">￥{{ $store.getters.getGoodsTotal.price }}</span>
                <button @click="checkMoney">结算({{ $store.getters.getGoodsTotal.num }})</button>
            </div>
        </div>
        <!--<p> {{ $store.getters.getGoodsSelected }}</p>-->
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        name: "shopCarContainer",
        data(){
            return{
                goodsItem:[],  // 商品信息
                check:false,  // 是否全选
            }
        },
        created(){
            this.getGoodsItem();
        },
        methods:{
            getGoodsItem(){
                this.goodsItem = this.$store.state.goodsInCar;
                // console.log(this.goodsItem);
            },
            reduceNum(item){
                if (item.count > 1){
                    --item.count;
                } else {
                    item.count = 1;
                }
                console.log(item.id);
                console.log(item.count);
                this.$store.commit("updateShopCount",{id:item.id,count:item.count})
            },
            addNum(item){
                if (item.count < item.quantity){
                    ++item.count;
                } else {
                    item.count = item.quantity;
                }
                console.log(item.id);
                console.log(item.count);
                this.$store.commit("updateShopCount",{id:item.id,count:item.count})
                // console.log(item.count);
            },
            delShop(id,index){
                // 根据传入的索引（购物车页面的），删除购物车里的数据 this.goodsItem
                this.goodsItem.splice(index,1);
                // 再根据id，去删除store里的数据。
                this.$store.commit("delShopInCar",id);
                // console.log(i);
                // console.log(item);
            },
            selectedChange(id,status){
                this.$store.commit("updateSelected",{id,status})
                // console.log(id + "------" + status);
            },
            selectedAllChange(){
                this.$store.commit("selectedAllChange",this.check)
                // console.log(this.check);
            },
            checkMoney(){
                Toast(' 还未完成 [结算] 功能哦~ 🙂 💪');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .shopList{
        border: 1px solid #E5E5E7;
        box-shadow:  0 0 10px #E5E5E7;
        display: flex;
        align-items: center;
        padding: 5px;
        margin: 5px;
    }
    .mint-switch{
        margin-right: 5px;
    }
    .shopList img{
        vertical-align: middle;
        width: 70px;
        height: 70px;
        margin-right: 5px;
        border: 1px solid #E5E5E7;
        box-shadow:  0 0 10px #E5E5E7;
        /*background-color: #f17000;*/
    }
    .info p{
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 3px;
    }
    .info span{
        font-weight: bold;
        font-size: 13px;
        color: #EC653B;
    }
    .numBox{
        display: inline-block;
        box-shadow: 0 0 10px #E5E5E7;
        margin: 6px 3px 3px 6px;
    }
    .btn-css{
        width: 30px;
        height: 100%;
        color: #555555;
        background-color: #F9F9F9;
        font-size: 22px;
        font-weight: 400;
        line-height: 100%;
    }
    .reduceBtn{
        border-radius: 3px 0 0 3px;
    }
    .addBtn{
        border-radius: 0 3px 3px 0;
    }
    .num{
        width: 35px;
        height: 100%;
        border: 0px;
        line-height: 35px;
        font-size: 16px;
        text-align: center;
        color: #949494;
    }
    a{
        color: #1155CC;
        margin-left: 20px;
    }
    .check{
        width: 94%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #E5E5E7;
        box-shadow:  0 0 10px #E5E5E7;
        margin: 5px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #98949B;
        position: fixed;
        bottom: 55px;
    }
    .selectAll span{
        margin-left: 5px;
    }
    .money{
        margin-right: 5px;
        color: #E75A28;
        font-size: 14px;
    }
    .checkAll button{
        width: 75px;
        padding: 5px;
        font-size: 16px;
        background-color: #FF4400;
        color: #FFFFFF;
        border: 1px solid #FF4400;
        box-shadow:  0 0 8px #FF4400;
        border-radius: 5px;
        margin-left: 5px;
    }
</style>
