<template>
    <div id="goodInfo">
        <div class="good-photo-price">
            <img :src="goodInfo.src" alt="goodInfo.title">
            <p class="price">
                <span class="newPrice">￥{{ goodInfo.newPrice }}</span>
                <span class="oldPrice">￥{{ goodInfo.oldPrice }}</span>
            </p>
            <p class="title">{{ goodInfo.title }}</p>
            <div class="numBox">
                <button class="reduceBtn btn-css" @click="reduceNum(goodInfo.quantity)">-</button>
                <input v-model="$store.state.goodNumber" class="num">
                <button class="addBtn btn-css" @click="addNum(goodInfo.quantity)">+</button>
            </div>
        </div>
        <div class="goodInfo">
            <p class="infoTitle">商品详情</p>
            <div class="detailInfo">
                <p>商品货号：{{ goodInfo.productCode }}</p>
                <p>库存情况：{{ goodInfo.quantity }} 件</p>
                <p>上市时间：{{ goodInfo.time }}</p>
                <br>
                <p class="des">商品描述：{{ goodInfo.des }}</p>
            </div>
            <img src="../../assets/goodShow.jpg" alt="">
            <img src="../../assets/goodShow2.jpg" alt="">
        </div>
        <div class="purchase">
            <span class="addCar" @click="addToCar">加入购物车</span>
            <span class="buyNow" @click="buyNow">立即购买</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';

    export default {
        name: "goodInfo",
        data(){
            return{
                id: this.$route.params.id,
                goodInfo:[],
            }
        },
        created(){
            this.getGoodInfo();
        },
        methods:{
            getGoodInfo(){
                axios.get('goodsList.json')
                    .then(res => {
                        this.goodInfo = res.data.list[this.id-1];
                        // console.log(res.data.list[this.id-1]);
                    })
                    .catch(error => {
                        Toast(error + ' 获取数据失败！');
                    })
            },
            reduceNum(num){
                this.$store.commit("decrement",num)
            },
            addNum(num){
                // console.log(num);
                this.$store.commit("increment",num)
            },
            addToCar(){
                var goodInfo = {
                    id:this.id,
                    title:this.goodInfo.title,
                    count:this.$store.state.goodNumber,
                    price:this.goodInfo.newPrice,
                    quantity:this.goodInfo.quantity,
                    src:this.goodInfo.src,
                    selected:false
                };
                // localStorage.clear()
                console.log(goodInfo);
                this.$store.commit("addToCar",goodInfo);
                Toast('加入购物车成功！');
                this.$store.state.goodNumber = 1;
            },
            buyNow(){
                Toast(' 还未完成 [立即购买] 功能哦~ 🙂 💪');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .good-photo-price{
        margin: 8px;
        padding: 5px;
        border: 1px solid #E5E5E7;
        box-shadow:  0 0 10px #E5E5E7;
        border-radius: 3px;
    }
    .good-photo-price img{
        width: 100%;
        height: 300px;
        border-bottom: 1px solid #E5E5E7;
    }
    .newPrice{
        font-size: 18px;
        font-weight: bold;
        color: #EC653B;
    }
    .oldPrice{
        color: #98949B;
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 8px;
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        margin: 5px;
    }
    .numBox{
        display: inline-block;
        box-shadow: 0 0 10px #E5E5E7;
        margin: 3px;
    }
    .btn-css{
        width: 50px;
        height: 35px;
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
        width: 45px;
        height: 100%;
        border: 0px;
        line-height: 35px;
        font-size: 22px;
        text-align: center;
    }
    .goodInfo{
        margin: 8px;
        padding: 5px;
        border: 1px solid #E5E5E7;
        box-shadow: 0 0 10px #E5E5E7;
        border-radius: 3px;
    }
    .infoTitle{
        font-size: 18px;
        font-weight: bold;
        padding: 3px;
        border-bottom: 1px solid #E5E5E7;
    }
    .detailInfo{
        color: #98949B;
        margin: 5px;
    }
    .des{
        /*color: #000;*/
        font-size: 18px;
    }
    .goodInfo img{
        width: 100%;
        height: 100%;
    }
    .purchase{
        position: fixed;
        bottom: 60px;
        right: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        font-weight: bold;
    }
    .addCar{
        display: inline-block;
        background-color: #FF4400;
        color: #FFFFFF;
        width: 90px;
        height: 45px;
        border-radius: 5px 0 0 5px;
    }
    .buyNow{
        display: inline-block;
        background-color: #FFE4D0;
        color: #E75A28;
        width: 70px;
        height: 45px;
        border-radius: 0 5px 5px 0;
    }
</style>
