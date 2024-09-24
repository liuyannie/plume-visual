<template>
    <div class="height100">
        <div class="title">
          <img src="../../assets/img/shenhai.png"/>
        </div>
        <div class="bnt">
            <div class="topbnt_left fl">
                <ul>
                    <li><router-link :to="{path: '/'}"><a><img src="../../assets/img/font/shouye1.png" /></a></router-link></li>
                    <li class="active"><router-link :to="{path: '/shebeiView'}"><a><img src="../../assets/img/font/shebeixinxi2.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/jianceView'}"><a><img src="../../assets/img/font/jiancexinxi1.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/moniView'}"><a><img src="../../assets/img/font/monixinxi1.png" /></a></router-link></li>
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
        </div>
        <!-- bnt end -->
        <div class="content">
            <div class="caidan">
                <el-menu background-color="transparent"
                         text-color="#fff"
                         active-text-color="#00fff5"
                         @select="handleSelect"
                         @open="handleOpen">
                    <el-submenu index="detecter" class="menubanner">
                        <template slot="title">
                            <i class="el-icon-ship"></i>
                            <span>坐底平台</span>
                        </template>
                        <el-menu-item index="detecter-1">小设备1</el-menu-item>
                        <el-menu-item index="detecter-2">小设备2</el-menu-item>
                       
                    </el-submenu>
                    
                    <el-submenu index="digger" class="menubanner">
                        <template slot="title">
                            <i class="el-icon-ship"></i>
                            <span style="font-size:small">采矿车</span>
                        </template>
                        <el-menu-item index="digger-1">小设备1</el-menu-item>
                        <el-menu-item index="digger-2">小设备2</el-menu-item>
                        <el-menu-item index="digger-3">小设备3</el-menu-item>
                        <el-menu-item index="digger-4">小设备4</el-menu-item>
                        <el-menu-item index="digger-5">小设备5</el-menu-item>
                        <el-menu-item index="digger-6">小设备6</el-menu-item>
                        <el-menu-item index="digger-7">小设备7</el-menu-item>
                        <el-menu-item index="digger-8">小设备8</el-menu-item>
                        <el-menu-item index="digger-9">小设备9</el-menu-item>
                        <el-menu-item index="digger-10">小设备10</el-menu-item>
                        <el-menu-item index="digger-11">小设备11</el-menu-item>
                        <el-menu-item index="digger-12">小设备12</el-menu-item>
                        <el-menu-item index="digger-13">小设备13</el-menu-item>
                        <el-menu-item index="digger-14">小设备14</el-menu-item>
                        <el-menu-item index="digger-15">小设备15</el-menu-item>
                        <el-menu-item index="digger-16">小设备16</el-menu-item>
                        <el-menu-item index="digger-17">小设备17</el-menu-item>
                        <el-menu-item index="digger-18">小设备18</el-menu-item>
                        <el-menu-item index="digger-19">小设备19</el-menu-item>
                        <el-menu-item index="digger-20">小设备20</el-menu-item>
                        <el-menu-item index="digger-21">小设备21</el-menu-item>
                        <el-menu-item index="digger-22">小设备22</el-menu-item>
                        <el-menu-item index="digger-23">小设备23</el-menu-item>
                        <el-menu-item index="digger-24">小设备24</el-menu-item>
                        <el-menu-item index="digger-25">小设备25</el-menu-item>
                        <el-menu-item index="digger-26">小设备26</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <!-- <div class="mrbox_top"> -->
            <div class="mrbox">
                <div style="height:90%;width:100%;margin-top:0.5%;">
                    <iframe src="/static/threejs/src/equipment_display_test.html" style="width: 100%;height:100%;border:none;"></iframe>
                </div>
                <el-button type="text" class="prevshebei" @click="changeModel('prev')"></el-button>
                <el-button type="text" class="nextshebei" @click="changeModel('next')"></el-button>
            </div>
            <div class="introduction">
                <div class=" imgintro">
                    <div class="img-banner">图片介绍</div>
                    <div class="img-content">
                        <div class="swiper-button-next"></div>
                        <div class="swiperbg">
                            <swiper :options="swiperOptionThumbs"
                                    class="gallery-thumbs"
                                    ref="swiperThumbs">
                                <swiper-slide class="" v-for="(item, index) in clist" :key="index">
                                    <img :src="item.imgUrl" alt="" style="height: 100%; width: 100%" />
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
                <div class="textintro">
                    <div class="text-banner">文字介绍</div>
                    <div class="text-content">
                        {{currentDescription.name}}
                        <br />
                        {{currentDescription.content}}<!-- 自定义滚动条容器 -->
                        <div class="scrollbar-container">
                            <!-- 自定义滚动条滑块 -->
                            <div class="scrollbar-thumb"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
  export default {
    data() {
          return {
              isCollapse: true,
              loading: true,
              token: localStorage.getItem('token'),
              currentModelIndex: 0, // 当前模型索引，默认为0
              Description: [
                  { name:'坐底平台',  content: '这是第1个设备的介绍。' },
                  { name: '海试实验船', content: '这是第2个设备的介绍。' },
                  { name: '便携性监测节点Ⅰ', content: '这是第3个设备的介绍。' },
                  { name: '采矿车', content: '这是第4个设备的介绍。' },
              ],
              currentDescription: { name: '坐底平台', content: '这是第一个设备的介绍11' },
              swiperOptionThumbs: {
                  spaceBetween: 5,
                  centeredSlides: false,
                  slidesPerView: 3,
                  touchRatio: 0.2,
                  loop: false,
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
                  // 自动滑动
                  autoplay: {
                      delay: 2000,
                      stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。
                      disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                  },
              },
              clist: [
                  {
                      imgUrl: require('../../assets/img/baogao1.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao2.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao3.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao4.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao5.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao6.jpg')
                  },
                  {
                      imgUrl: require('../../assets/img/baogao7.jpg')
                  },
              ],
      };
    },
    mounted() {
        window.addEventListener('message', this.handlePostMessage, false);
        this.$nextTick(() => {
            this.swiperThumbs = this.$refs.swiperThumbs.swiper;
            // 手动触发 handlePostMessage 以加载初始模型信息
            this.handlePostMessage({ data: this.Description[0].name });
        });
    },
    beforeDestroy() {
        window.removeEventListener('message', this.handlePostMessage, false);
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            location.reload();
        },
        changeModel(direction) {
            // 根据方向发送消息给 iframe
            const iframe = this.$el.querySelector('iframe');
            const Origin = window.location.origin; 
            iframe.contentWindow.postMessage(direction, Origin);  
        },
        handleSelect(keyPath) {
            const iframe = this.$el.querySelector('iframe');
            const Origin = window.location.origin; 
            // 向 iframe 发送消息，指示加载并高亮特定模型部位
            iframe.contentWindow.postMessage(keyPath, Origin);
        },
        handleOpen(key) {
            const iframe = this.$el.querySelector('iframe');
            const Origin = window.location.origin;
            iframe.contentWindow.postMessage(key, Origin);
        },
        handlePostMessage(event) {
            // 检查 event.data 是否包含模型名称
            if (typeof event.data === 'string' && this.Description.some(item => item.name === event.data)) {
                const currentModelname = event.data;
                const description = this.Description.find(item => item.name === currentModelname);

                if (description) {
                    this.$set(this, 'currentDescription', description);
                } else {
                    this.$set(this, 'currentDescription', { name: '未找到相应介绍', content: '' });
                }
            } else {
                console.log('Received a non-model message:', event.data);
            }
        },
    }
  }
</script>
<style scope>
@import url('/src/assets/css/style-100.css');
.left2{
  float: right;
}

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
.content{
  width:100%;
  height:100%;
  position:relative;
}
  .caidan {
      height: 80%;
      width: 12%;
      position: absolute;
      top: 2%;
      left: 5%;
      background: url("../../assets/img/shebeicaidan.png") center center no-repeat;
      background-size: 100% 100%;
      border-radius: 10px 10px 10px 10px;
      overflow-y: scroll;
  }

  /*滚动条高宽度*/
  .caidan::-webkit-scrollbar {
      width: 8px;
      height: 4px;
  }
  /*滚动条滑块*/
  .caidan::-webkit-scrollbar-thumb {
      border-radius: 3px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #c7c4c4;
  }
  /*滚动条里面轨道*/
  .caidan ::-webkit-scrollbar-track {
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
  }
  /*滚动条的小边角*/
  .caidan::-webkit-scrollbar-corner {
      background: transparent;
  }

  .el-menu {
      border-radius: 10px 10px 10px 10px;
      border-right: 0;
      height: 90%;
  }
  .menubanner {
      background: url("../../assets/img/menubanner.png") center center no-repeat;
      background-size: 100% 100%;
  }
  .el-submenu .el-menu-item {
      min-width: 100%;
      background: url("../../assets/img/submenu.png") center center no-repeat;
      background-size: 100% 100%;
  }

  .el-submenu__title:hover {
      background-color: rgb(3, 19, 33, 0.5) !important;
  }

  .el-menu-item:hover {
      background-color: rgb(3, 19, 33) !important;
  }

    .el-menu-item.is-active {
        background: url("../../assets/img/selectedmenuitem.png") center center no-repeat;
        background-size: 100% 100%;
    }
    .mrbox {
        position: absolute;
        width: 50%;
        height: 92%;
        margin-top: 12px;
        left:18%;
    }

    .prevshebei {
        width:7%;
        height:10%;
        position:absolute;
        left:0;
        top:35%;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/prior.png") center center no-repeat;
    }
    .nextshebei {
        width: 7%;
        height: 10%;
        position: absolute;
        right:0;
        top: 35%;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/next.png") center center no-repeat;
    }
    .introduction {
        height: 100%;
        width: 30%;
        margin-top: 1%;
        margin-bottom: 1%;
        position: absolute;
        float:right;
        right:0;
    }

  .imgintro{
      width:100%;
      height:20%;
      margin-right:5%;
  }

      .imgintro .img-banner {
          font-family: 'Microsoft YaHei';
          font-size: large;
          color: white;
          height: auto;
          width:80%;
          padding: 2% 22% 2% 3%;
          background: url("../../assets/img/textbanner.png") left center no-repeat;
          background-size: 80% 100%;
      }

    .imgintro .img-content {
        color: white;
        margin-top: 2%;
        height: 65%;
        width: 90%;
        padding: 2% 15% 2% 0;
        background: url("../../assets/img/lunbokuang1.png") left center no-repeat;
        background-size: 80% 100%;
        position: relative;
    }
  .swiperbg {
      width: 100%;
      height: 100%;
      background: url("../../assets/img/lunbokuang.png") left 10% center no-repeat;
      background-size: 91% 100%;
  }

  .gallery-thumbs {
      height: 70%;
      width: 68%;
      box-sizing: border-box;
      margin: 1.5% 5% 0 6%;
      position: absolute;
  }

      .gallery-thumbs .swiper-slide {
          width: 30%;
          height: 100%;
      }

  .swiper-button-next {
      /*先将原始箭头的颜色设置为透明的  然后设置一个背景图片  达到修改按钮样式的目的*/
      right: 21%;
      left: auto;
      top: 4%;
      margin-top: 0.7%;
      width: 4%;
      height: 85%;
      position: absolute;
      color: rgba(0, 0, 0, 0) !important;
      background: url("../../assets/img/icons/right.png") center center no-repeat;
  }

      .swiper-button-next:hover {
          background-image: url("../../assets/img/icons/rightclick.png"); /* 悬停时的背景图片 */
      }

  .swiper-button-prev {
      left: 1%;
      right: auto;
      top: 4%;
      margin-top: 0.7%;
      width: 4%;
      height: 85%;
      position: absolute;
      color: rgba(0, 0, 0, 0) !important;
      background: url("../../assets/img/icons/left.png") center center no-repeat;
  }

      .swiper-button-prev:hover {
          background-image: url("../../assets/img/icons/leftclick.png"); /* 悬停时的背景图片 */
      }
  .textintro{
      width:100%;
      height:80%;
      margin-top:30px;
  }

    .textintro .text-banner {
        font-family: 'Microsoft YaHei';
        font-size: large;
        color: white;
        height: auto;
        width: 80%;
        padding: 2% 22% 2% 3%;
        background: url("../../assets/img/textbanner.png") left center no-repeat;
        background-size: 80% 100%;
    }

    .textintro .text-content {
        font-family: 'Microsoft YaHei';
        font-size: large;
        color: white;
        word-break: break-all;
        word-wrap: break-word;
        height: 60%;
        width: 80%;
        line-height: 1.5;
        margin-top: 2%;
        padding: 2% 20% 2% 2%;
        background: url("../../assets/img/textintro.png") left center no-repeat;
        background-size: 82% 100%;
        overflow-y: scroll;
    }
            .textintro .text-content::-webkit-scrollbar {
                width: 0;
            }

</style>

               
