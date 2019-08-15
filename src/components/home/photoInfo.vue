<template>
    <div id="photoInfo">
        <h3 class="title">图片分享(原图大小无法调整)</h3>
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'mint-ui';
    export default {
        name: "photoInfo",
        data(){
            return{
                slide1:[]  // 图片数据
            }
        },
        created(){
            this.getPhotoInfo();
        },
        methods:{
            getPhotoInfo(){
                // 获取图片
                axios.get('photo.json')
                    .then(res => {
                        if (res.data.status === 0){
                            res.data.message.forEach(item => {
                                item.w = 600;
                                item.h = 400;
                                item.msrc = item.src;
                            });
                            this.slide1 = res.data.message;
                            console.log(this.slide1);
                        }
                        console.log(res.data.status);
                    })
                    .catch(error => {
                        Toast('获取数据失败！');
                    })
            },
            handleClose(){
                console.log('close');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .title{
        color: #26A2FF;
        border-bottom: 1px solid #E5E5E7;
        padding: 5px;
        text-align: center;
    }
    .thumbs{
        background-color: red;
        /*width: 100%;*/
    }
    img{
        width: 500px;
        height: 300px;
    }
</style>
