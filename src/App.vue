<template>
  <div id="app">
    <!-- 顶部header区域 -->
    <mt-header fixed title="Allison's shop">
        <span slot="left" @click="goBack" v-show="flag">
            <mt-button icon="back">返回</mt-button>
        </span>
    </mt-header>

    <!-- 中间区域 -->
    <transition>
        <router-view></router-view>
    </transition>

    <!-- 底部tabbar区域 -->
    <mt-tabbar class="tabbar" fixed>
      <router-link to="/home" class="tab-item">
        <mt-tab-item id="tab1">
            <img slot="icon" src="./assets/images/首页.png">
            <span>首页</span>
        </mt-tab-item>
      </router-link>
      <router-link to="/member" class="tab-item">
        <mt-tab-item id="tab2">
            <img slot="icon" src="./assets/images/会员中心.png">
            <span>会员</span>
        </mt-tab-item>
      </router-link>
      <router-link to="/shopCar" class="tab-item">
        <mt-tab-item id="tab3">
            <img slot="icon" src="./assets/images/购物车.png">
            <span>购物车</span>
        </mt-tab-item>
      </router-link>
      <router-link to="/search" class="tab-item">
        <mt-tab-item id="tab4">
            <img slot="icon" src="./assets/images/搜索.png">
            <span>搜索</span>
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
    <!--<nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item mui-active" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>-->

  </div>
</template>

<style lang="less">
    *{
        padding: 0;
        margin: 0;
    }
    .v-entry{
        opacity: 0;
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%);
        position: absolute;
    }
    .v-entry-active,
    .v-leave-active{
        transition: all 0.3s ease;
    }
    #app{
      margin-top: 40px;
      margin-bottom: 55px;
      overflow-x: hidden;
    }
    .tab{
      display: flex;
    }
      .tab-item{
        flex: 1;
        :hover{
          background-color: #F3F3F3;
        }
        span{
          color: #000;
        }
        :hover span{
          color: #5588C8;
        }
      }
      a{
        text-decoration: none;
      }
</style>

<script>
    export default {
        name: "App",
        data(){
            return{
                flag:false  // 默认不展示
            }
        },
        created(){
          this.flag =   this.$route.path === '/home' ? false:true;
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        watch:{
            "$route.path":function (newVal) {
                if (newVal == '/home'){
                    this.flag = false;
                } else {
                    this.flag = true;
                }
            }
        }
    }
</script>
