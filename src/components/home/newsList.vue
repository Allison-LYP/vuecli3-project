<template>
    <div id="newsList">
        <ul class="media">
            <li class="media-item" v-for="item in newsList" :key="item.url">
                <a :href="item.url">
                    <img class="media-item-img" :src="item.pic">
                    <div class="media-item-title">
                        <h4>{{ item.title }}</h4>
                        <p class="media-item-content">
                            <span>时间：{{ item.time }}</span>
                            <span>来源：{{ item.src }}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';

    export default {
        name: "newsList",
        data(){
            return{
                newsList:[],  // 存放新闻列表信息，默认空数组
            }
        },
        created(){
            this.getNewsLis()
        },
        methods:{
            getNewsLis(){  // 获取新闻列表
                axios.get('/newsList.json')
                    .then( res => {
                        var data = res.data.result.list;
                        this.newsList = data;
                        console.log(data);
                    })
                    .catch( error => {
                        Toast('获取数据失败！');
                    })
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .media{
        list-style: none;
        margin: 5px;
        padding: 0;
    }
    .media-item{
        height: 50px;
        padding: 11px 15px;
        border-bottom: 1px solid #E5E5E7;
        overflow: hidden;
    }
    .media-item:hover{
        background-color: #F3F3F3;
    }
    .media-item-img{
        width: 42px;
        height: 42px;
        margin-right: 10px;
        float: left;
    }
    .media-item-title{
        font-size: 16px;
        margin-left: 52px;
        /*float: left;*/
    }
    .media-item-content{
        margin-top: 3px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #8F8F94;
    }
    a{
        text-decoration: none;
        color: #000;
    }
</style>
