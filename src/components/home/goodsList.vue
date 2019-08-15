<template>
    <div class="goodsList">
        <router-link class="goodsList-item" v-for="item in goods" :key="item.title" :to="'/home/goodInfo/' + item.id" tag="div">
            <img :src="item.src" :alt="item.title">
            <h4>{{ item.title }}</h4>
            <div class="item-info">
                <p class="price">
                    <span class="newPrice">￥{{ item.newPrice }}</span>
                    <span class="oldPrice">￥{{ item.oldPrice }}</span>
                </p>
                <p class="sellCount">
                    <span>热卖中</span>
                    <span class="count">剩余 {{ item.quantity }} 件</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';

    export default {
        name: "goodsList",
        data(){
            return{
                goods:[]  // 存放商品信息
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                axios.get('goodsList.json')
                    .then(res => {
                        this.goods = res.data.list;
                        // console.log(res.data.list);
                    })
                    .catch(error => {
                        Toast(error + ' 获取数据失败！');
                    })
            }
        }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px;
    }
    .goodsList-item{
        width: 46%;
        min-height: 290px;
        border: 1px solid #E5E5E7;
        padding: 3px;
        margin: 4px 0;
        -webkit-box-shadow: 0 0 8px #E5E5E7;
        -moz-box-shadow: 0 0 8px #E5E5E7;
        box-shadow: 0 0 8px #E5E5E7;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .goodsList-item:hover{
        background-color: #F3F3F3;
    }
    .goodsList-item img{
        width: 100%;
        border-bottom: 1px solid #E5E5E7;
    }
    .item-info{
        background-color: #EFEBEF;
    }
    .item-info p{
        padding: 2px;
        color: #98949B;
    }
    .newPrice{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .oldPrice{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 8px;
    }
    .sellCount{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
</style>
