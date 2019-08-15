<template>
    <div id="photoList">
        <!-- 顶部TabContainer区域 -->
        <mt-navbar>
            <mt-tab-item v-for="item in categories" :key="item.category">
                <li @click="getPhotoListByCateId(item.category)" class="cateItem">
                    {{ item.title }}
                </li>
            </mt-tab-item>
        </mt-navbar>
        <!-- 图片分类展示,懒加载 -->
        <ul class="photolList">
            <router-link to="/home/photoList/photoInfo" v-for="item in list" :key="item.url" class="photolList-item" tag="li">
                <img v-lazy="item.pic">
                <div class="info">
                    <div class="info-src">{{ item.src }}</div>
                    <div class="info-title">{{ item.title }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';
    export default {
        name: "photoList",
        data(){
            return{
                categories:[
                    {title:"头条",category: "news"},
                    {title:"科技",category: "tech"},
                    {title:"娱乐",category: "ent"},
                    {title:"教育",category: "edu"}
                ],
                list:[]
            }
        },
        created(){
            this.getPhotoListByCateId('news')
        },
        methods:{
            getPhotoListByCateId(cateId){
                // 根据 分类id 获取图片列表
                axios.get( cateId +'.json')
                    .then( res => {
                        var data = res.data.list;
                        this.list = data;
                        // console.log(cateId);
                        // console.log(this.list);
                    })
                    .catch( error => {
                        Toast('获取数据失败！');
                        // console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    .mint-navbar .mint-tab-item.is-selected{
        color: #000000;
        border-bottom: 1px solid #E5E5E7;
    }
    .mint-tab-item{
        border-right: 1px solid #E5E5E7;
    }
    .mint-tab-item:hover{
        background-color: #F3F3F3;
    }
    .mint-tab-item li{
        list-style: none;
        font-size: 14px;
    }
    .nav-item:hover{
        background-color: #F3F3F3;
    }
    .photolList{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }
    .photolList-item{
        background-color: #ccc;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    }
    .photolList-item img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .info{
        width: 100%;
        color: white;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 0;
    }
    .info-src{
        font-size: 15px;
        font-weight: bold;
    }
    .info-title{
        font-size: 13px;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    a{
        text-decoration: none;
        color: #000;
        font-size: 14px;
    }
</style>
