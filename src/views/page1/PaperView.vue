<template>
    <div class="height100">
        <div class="title">
            <img src="../../assets/img/shenhai.png"/>
        </div>
        <div class="bnt">
            <div class="topbnt_left fl">
                <ul>
                    <li><router-link :to="{path: '/'}"><a><img src="../../assets/img/font/shouye1.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/shebeiView'}"><a><img src="../../assets/img/font/shebeixinxi1.png" /></a></router-link></li>
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
                    <li class="active"><router-link :to="{ path: '/PaperView' }"><a><img src="../../assets/img/font/pingjiabaogao2.png" /></a></router-link></li>
                    <li><router-link :to="{path: '/caiyangView'}"><a><img src="../../assets/img/font/caiyangjieguo1.png" /></a></router-link></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="swiper-container">
                <swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOption" @slideChange="handleSlideChange">
                    <swiper-slide class="swiper-slide"
                                  v-for="(item, index) in clist"
                                  :key="index">
                        <img :src="item.imgUrl" alt="" />
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
                <div class="text">
                    <div class="text-content">{{currentDescription}}</div>
                </div>
            </div>
            <div class="navigation">
                <div class="nav-bar">
                    <button><router-link :to="{path: '/DataView'}"><img src="../../assets/img/font/Data1.png" /></router-link></button>
                    <button><router-link :to="{path: '/PaperView'}"><img src="../../assets/img/font/Paper2.png" /></router-link></button>
                    <button><router-link :to="{path: '/VideoView'}"><img src="../../assets/img/font/Video1.png" /></router-link></button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                token: localStorage.getItem('token'),
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
                currentDescription:'这是第1张图片的介绍',
                descriptions: [
                    '这是第1张图片的介绍',
                    '这是第2张图片的介绍', 
                    '这是第3张图片的介绍',
                    '这是第4张图片的介绍', 
                    '这是第5张图片的介绍',
                    '这是第6张图片的介绍', 
                    '这是第7张图片的介绍',
                ],
                swiperOption: {
                    direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
                    loop: false, 
                    // 自动滑动
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。
                        disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                    },
                    effect: 'coverflow', // 切换效果 "coverflow"（3d流）
                    slidesPerView: 3, // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
                    centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
                    spaceBetween: 10, // 在slide之间设置距离（单位px）。
                    slideToClickedSlide: true, // 设置为true则点击slide会过渡到这个slide。
                    // loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
                    coverflowEffect: {
                        rotate: 50, // slide做3d旋转时Y轴的旋转角度
                        stretch: 0, // 每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
                        depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。
                        modifier: 1, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
                        slideShadows: true // 是否开启slide阴影
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        //修改分页器样式
                        bulletClass: 'swiper-pagination-bullet',
                        //激活样式
                        bulletActiveClass: 'my-bullet-active',
                    },
                }

            }
        },
        mounted() {
            // 确保在组件挂载后访问 Swiper 实例
            this.$nextTick(() => {
                this.mySwiper = this.$refs.mySwiper.swiper;
                // 现在可以访问 this.mySwiper 进行操作
            });
        },
        methods: {
            logout() {
                localStorage.removeItem('token');
                location.reload();
            },
            handleSlideChange() {
                if (this.mySwiper) {
                    // 确保 this.mySwiper 不是 undefined
                    const index = this.mySwiper.activeIndex;
                    this.currentDescription = this.descriptions[index];
                }
            },
        }
    }
</script>
<style scoped>

    .left2 {
        float: right;
    }

    .mrbox_top_midd {
        width: 59%;
        position: absolute;
        height: 62%;
        left: 21%;
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

    .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
    }

    .swiper-container {
        width: 80%;
        height: 80%;
        padding-top: 2%;
        margin-left: 10%;
        margin-right: 10%;
        position: relative;
    }

    .swiper-wrapper {
        height: 50%;
    }

    .swiper-container .swiper-wrapper .swiper-slide {
        height: 70%;
        width:100%;
        opacity: 0.4;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swiper-container .swiper-wrapper .swiper-slide-active {
        height: 90%;
        width: 100%;
        opacity: 1;
    }
        .swiper-container .swiper-wrapper .swiper-slide img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }

    .swiper-button-next {
        /*先将原始箭头的颜色设置为透明的  然后设置一个背景图片  达到修改按钮样式的目的*/
        right: 1.5%;
        left: auto;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/next.png") center center no-repeat;
    }

    .swiper-button-prev {
        left: 1.5%;
        right: auto;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/prior.png") center center no-repeat;
    }

    .swiper-pagination {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .text {
        height: 35%;
        width: auto;
        margin-top: 2%;
        background: url("../../assets/img/textbackground.png") center center no-repeat;
        background-size:80% 100% ;
    }
    .text .text-content {
        font-family:'Microsoft YaHei' ;
        font-size:x-large;
        color:white;
        width:80%;
        height:100%;
        padding:2% 10% 2% 10%;

    }

    .navigation {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("../../assets/img/navigation.png") no-repeat; 
        background-size:100% 100%;
    }

    .nav-bar {
        display: flex;
        justify-content: space-around;
    }

        .nav-bar button {
            width:auto;
            border: none;
            background: transparent;
        }

        .nav-bar img {
            padding-top:10px;
            padding-bottom:10px;
        }

        /* 添加激活时的样式 */
        .nav-bar button.router-link-active img {
            border: 2px solid #000; /* 举例：添加边框 */
        }
</style>

<!--自定义分页器样式-->
<style type="text/css">
    .my-bullet-active {
        background: #ffffff;
        opacity: 1;
    }

    .swiper-pagination-bullet {
        width: 1rem;
        height: 1rem;
        background: #ffffff;
        margin-left:5px;
    }
</style>


