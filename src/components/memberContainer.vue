<template>
    <div id="member">
        <p> 会员 818狂欢日</p>
        <div class="logo">
            <a href="https://sale.vmall.com/huawei.html">
                <img src="../assets/images/member1.jpg" alt="">
            </a>
        </div>
        <div class="logo">
            <a href="https://sale.vmall.com/honor.html">
                <img src="../assets/images/member2.jpg" alt="">
            </a>
        </div>
        <div class="logo">
            <a href="https://sale.vmall.com/smarthome.html">
                <img src="../assets/images/member3.jpg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "memberContainer"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    p{
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        margin: 10px;
    }
    .logo{
        width: 95%;
        height: 200px;
        border: 1px solid #E5E5E7;
        box-shadow:  0 0 15px #E5E5E7;
        margin: 5px auto;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
</style>
