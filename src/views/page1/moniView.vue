<template>
    <div class="height100">
        <div class="title">
          <img src="../../assets/img/shenhai.png"/>
        </div>
        <div class="bnt" style="position: sticky;z-index: 100;">
            <div class="topbnt_left fl">
                <ul>
                    <li><router-link :to="{path: '/'}"><a><img src="../../assets/img/font/shouye1.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/shebeiView'}"><a><img src="../../assets/img/font/shebeixinxi1.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/jianceView'}"><a><img src="../../assets/img/font/jiancexinxi1.png" /></a></router-link></li>
                    <li class="active"><router-link :to="{path: '/moniView'}"><a><img src="../../assets/img/font/monixinxi2.png" /></a></router-link></li>
                </ul>
            </div>
            <div class=" fr topbnt_right">
                <ul>
                    <li v-if="!token">
                        <router-link :to="{ path: '/loginBack' }">
                            <a><img src="../../assets/img/font/denglu1.png" /></a>
                        </router-link>
                    </li>
                    <li v-else>
                        <a @click="logout" class="pointer-cursor"><img src="../../assets/img/font/exit.png" /></a>
                    </li>
                    <li><a href="#"><img src="../../assets/img/font/xuhuanfangzhen1.png" /></a></li>
                    <li><router-link :to="{ path: '/PaperView' }"><a><img src="../../assets/img/font/pingjiabaogao1.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/caiyangView'}"><a><img src="../../assets/img/font/caiyangjieguo1.png" /></a></router-link></li>
                </ul>
            </div>
            <!-- 搜索栏 -->
            <div class="search-box">
                <input type="text" placeholder="搜索地点...">
                <button>搜索</button>
            </div>
            <!-- 新添加的菜单栏 -->
            <div class="menu-bar">
                <div class="menu">
                    <img class="menu-image" src="../../assets/img/caidan.png" alt="菜单项">
                    <div class="menu-txt">菜单</div>
                </div>
                <div class="menu-item">
                    <a a href="">
                        <img class="menu-img" src="../../assets/img/caidanlan.png" alt="菜单项">
                        <div class="menu-text">生物</div>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="">
                        <img class="menu-img" src="../../assets/img/caidanlan.png" alt="菜单项">
                        <div class="menu-text">羽流</div>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="">
                        <img class="menu-img" src="../../assets/img/caidanlan.png" alt="菜单项">
                        <div class="menu-text">海洋</div>
                    </a>
                </div>
            </div>
        </div>
        <!-- bnt end -->
        <!--  map start-->
        <div class="hdmrboxtm-mbox">
            <div style="height:100%;width:100%;margin-top:0.0%;margin-left:0%;">
                <iframe src="/static/cesium/cesium.html" style="width:100%;height:100%;border:none;"></iframe>
            </div>
        </div>
        <!--  map end-->
    </div>
</template>
<script>     
    export default {
        data() {
            return {
                loading: true,
                token: localStorage.getItem('token'),
            };
        },
        created() { },
        methods: {
            logout() {
                localStorage.removeItem('token');
                location.reload();
            },
        },
        mounted() {},
    };
</script>
<style scope>
    .title {
        position: sticky;
        height: 7%;
        width: 100%;
        z-index: 100;
    }

        .title img {
            width: 100%;
            height: 180%;
            position: absolute;
            top: -55%;
            left: 0;
        }
.menu-bar {
    display: flex; 
    flex-direction: column;
    position: absolute; 
    top: 160px; 
    right: 80px; 
    background-color: transparent; 
    padding: 10px; 
}
.menu-item {
    position: relative; 
    text-align: center;
}
.menu-txt {
    position: absolute; 
    top: 35%; 
    left: 40%; 
    transform: translate(-50%, -65%); 
    background-color: transparent; 
    color: white; 
    padding: 5px 10px; 
    font-size: 19px; 
    border-radius: 5px; 
    white-space: nowrap; 
}
.menu-text {
    position: absolute; 
    top: 35%; 
    left: 40%; 
    transform: translate(-55%, -69%); 
    background-color: transparent; 
    color: white; 
    padding: 5px 10px; 
    font-size: 16px; 
    border-radius: 5px; 
    white-space: nowrap; 
}
.menu {
    position: absolute; 
    top: 0%; 
    left: 55%; 
    transform: translate(-55%, -69%); 
    background-color: transparent; 
    color: rgb(250, 250, 250); 
    padding: 5px 10px; 
    font-size: 18px; 
    border-radius: 5px; 
    white-space: nowrap; 
}
.menu-image {
    width: 105px; 
    height: auto; 
    margin-bottom: 39px; 
}
.menu-img {
    width: 100px; 
    height: auto; 
    margin-bottom: 25px; 
}
.search-box {
    display: flex;
    position: relative;
    left: -565px; 
    bottom: -79px; 
  }
.search-box input[type="text"] {
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
  margin-right: 8px;
}
.search-box button {
  background-color: #5c96d4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.search-box button:hover {
  background-color: #0056b3;
}                   
</style>