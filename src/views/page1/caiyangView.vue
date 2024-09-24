<template>
    <div class="height100">
        <div class="title">
            <img src="../../assets/img/shenhai.png"/>
        </div>
        <div class="wpbox">
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
                        <li><router-link :to="{ path: '/PaperView' }"><a><img src="../../assets/img/font/pingjiabaogao1.png" /></a></router-link></li>
                        <li class="active"><router-link :to="{path: '/caiyangView'}"><a><img src="../../assets/img/font/caiyangjieguo2.png" /></a></router-link></li>
                    </ul>
                </div>
            </div>
            <!-- bnt end --><!-- banner区域 -->
            <div class="banner">
                <div class="text">
                    <div class="text-banner">{{currentDescription.banner}}</div>
                    <div class="text-content">{{currentDescription.content}}</div>
                </div>
                <div class="wrapper">
                    <div class="swiper-box">
                        <!-- swiper1 -->
                        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                            <swiper-slide class="" v-for="(item, index) in clist" :key="index">
                                <img :src="item.imgUrl" alt="" style="height:90%;padding:3% 2%" />
                            </swiper-slide>
                        </swiper>

                        <!-- swiper2 Thumbs -->
                        <div class="btswiper">
                            <div class="swiper-button-next"></div>
                            <div class="swiperbg">
                                <swiper :options="swiperOptionThumbs"
                                        class="gallery-thumbs"
                                        ref="swiperThumbs" @slideChange="handleSlideChange">
                                    <swiper-slide class="" v-for="(item, index) in clist" :key="index">
                                        <img :src="item.imgUrl" alt="" style="height: 100%; width: 100%" />
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div class="swiper-button-prev"></div>
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
                currentDescription: {banner: '第1张图片', content: '这是第一张图片的介绍1'},
                descriptions: [
                    { banner: '第1张图片', content: '这是第1张图片的介绍' },
                    { banner: '第2张图片', content: '这是第2张图片的介绍' },
                    { banner: '第3张图片', content: '这是第3张图片的介绍' },
                    { banner: '第4张图片', content: '这是第4张图片的介绍' },
                    { banner: '第5张图片', content: '这是第5张图片的介绍' },
                    { banner: '第6张图片', content: '这是第6张图片的介绍' },
                    { banner: '第7张图片', content: '这是第7张图片的介绍' },
                ],
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: false,
                    freeMode: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: false,
                    // 自动滑动
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。
                        disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                    },
                },
                id: "",
            };
        },
        created() { },
        methods: {
            logout() {
                localStorage.removeItem('token');
                location.reload();
            },
            handleSlideChange() {
                if (this.swiperThumbs) {
                    const index = this.swiperThumbs.activeIndex;
                    console.log(index);
                    this.currentDescription.banner = this.descriptions[index].banner;
                    this.currentDescription.content = this.descriptions[index].content;
                }
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.swiperTop = this.$refs.swiperTop.swiper;
                this.swiperThumbs = this.$refs.swiperThumbs.swiper;
                this.swiperTop.controller.control = this.swiperThumbs;
                this.swiperThumbs.controller.control = this.swiperTop;
            });
        },
    };
</script>
<style scoped>
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
    .banner{
        height:90%;
        position:relative;
    }

    .text {
        height: 100%;
        width: 50%;
        margin-top: 1%;
        margin-bottom:1%;
        margin-left:6%;
        float:left;
        position:absolute;
    }

        .text .text-banner {
            font-family: 'Microsoft YaHei';
            font-size: x-large;
            color: white;
            width: 60%;
            height:auto;
            padding: 2% 10% 2% 10%;
            background: url("../../assets/img/textbanner.png") center center no-repeat;
            background-size: 80% 100%;
        }

        .text .text-content {
            font-family: 'Microsoft YaHei';
            font-size: large;
            color: white;
            height: 75%;
            width:60%;
            word-break: break-all;
            word-wrap: break-word;
            margin-top: 2%;
            padding: 2% 10% 2% 10%;
            background: url("../../assets/img/bigkuang.png") center center no-repeat;
            background-size: 80% 100%;
        }

    .banner .wrapper {
        width: 50%;
        height: 100%;
        float: right;
        margin-right: 5%;
        margin-left: 1%;
        margin-top: 2%;
    }
    .swiper-box{
        height:80%;
        justify-content:center;
    }

    .swiper-slide .img {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
    }

    .gallery-top {
        background: url("../../assets/img/bigkuang.png") center center no-repeat;
        background-size: 100% 100%;
        height: 80% !important;
        width: 100%;
    }


    .btswiper {
        background: url("../../assets/img/lunbokuang1.png") center center no-repeat;
        background-size: 100% 100%;
        margin-top:2%;
        height: 20% !important;
        position:relative;
    }

    .swiperbg {
        width:100%;
        height:100%;
        background: url("../../assets/img/lunbokuang.png") center center no-repeat;
        background-size: 96% 96%;
    }
    .gallery-thumbs {
        height: 100%;
        width: 90%;
        box-sizing: border-box;
        padding: 10px 0;
        margin: 0 5% 0 5%;
        position: absolute;
    }

        .gallery-thumbs .swiper-slide {
            width: 30%;
            height: 100%;
            opacity: 0.4;
        }

        .gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }

    .swiper-button-next {
        /*先将原始箭头的颜色设置为透明的  然后设置一个背景图片  达到修改按钮样式的目的*/
        right: 1.5%;
        left: auto;
        top: 0%;
        margin-top:0.7%;
        width: 4%;
        height: 90%;
        position: absolute;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/right.png") center center no-repeat;
    }

        .swiper-button-next:hover {
            background-image: url("../../assets/img/icons/rightclick.png"); /* 悬停时的背景图片 */
        }

    .swiper-button-prev {
        left: 1.5%;
        right: auto;
        top: 0%;
        margin-top:0.7%;
        width: 4%;
        height: 90%;
        position: absolute;
        color: rgba(0, 0, 0, 0) !important;
        background: url("../../assets/img/icons/left.png") center center no-repeat;
    }

        .swiper-button-prev:hover {
            background-image: url("../../assets/img/icons/leftclick.png"); /* 悬停时的背景图片 */
        }
</style>

