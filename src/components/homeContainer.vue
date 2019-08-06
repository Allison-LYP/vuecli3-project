<template>
    <div id="home">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" id="swipe">
            <mt-swipe-item class="swipe-item"><img src="../assets/images/1.jpg" alt="">1</mt-swipe-item>
            <mt-swipe-item class="swipe-item"><img src="../assets/images/2.jpeg" alt="">2</mt-swipe-item>
            <mt-swipe-item class="swipe-item"><img src="../assets/images/3.jpeg" alt="">3</mt-swipe-item>
            <mt-swipe-item class="swipe-item"><img src="../assets/images/4.jpg" alt="">4</mt-swipe-item>
            <!--// 通过 v-for请求的数据
            <mt-swipe-item v-for="item in swipList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>-->
        </mt-swipe>
        <!-- 六宫格 -->
        <ul class="grid-6">
            <li class="grid-6-item"><router-link to="/home/news">
                <img src="../assets/images/news.png" alt="">
                <div class="item-title">新闻资讯</div></router-link></li>
            <li class="grid-6-item"><a href="#">
                <img src="../assets/images/photo.png" alt="">
                <div class="item-title">图片分享</div></a></li>
            <li class="grid-6-item"><a href="#">
                <img src="../assets/images/shop.png" alt="">
                <div class="item-title">商品购买</div></a></li>
            <br>
            <li class="grid-6-item"><a href="#">
                <img src="../assets/images/message.png" alt="">
                <div class="item-title">留言反馈</div></a></li>
            <li class="grid-6-item"><a href="#">
                <img src="../assets/images/movie.png" alt="">
                <div class="item-title">视频专区</div></a></li>
            <li class="grid-6-item"><a href="#">
                <img src="../assets/images/contactUs.png" alt="">
                <div class="item-title">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "homeContainer",
        data(){
            return{
                swipList:[]  // 保留轮播图数据
            }
        },
        created(){
          this.getSwipe()
        },
        methods:{
            getSwipe(){  // 获取轮播图数据
                axios.get('/test')
                    .then( res => {
                        console.log(res.data);
                        console.log(1);
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }
        }
    }
</script>
<style scoped>
    #swipe{
        height: 200px;
    }
    .swipe-item img{
        width: 100%;
        height: 100%;
    }
    .grid-6{
        list-style: none;
        display: flex;
        flex-wrap:wrap;
        padding: 0;
    }
    .grid-6-item{
        text-align: center;
        width: 33.2%;
        /*margin-bottom: 20px;*/
        padding: 10px 0;
        border-right: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }
    .grid-6-item:nth-child(3){
        border-right: none;
    }
    .grid-6-item:nth-child(7){
        border-right: none;
    }
    .grid-6-item:hover{
        background-color: #F3F3F3;
    }
    .item-title{
        /*color: #000;*/
    }
    .grid-6-item img{
        width: 100px;
        height: 100px;
    }
    a{
        text-decoration: none;
        color: #000;
    }
</style>
