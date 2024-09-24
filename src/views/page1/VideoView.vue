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
            <div class="video-container">
                <div class="input_video2">
                    <video-player class="video-player vjs-custom-skin"
                                  ref="videoPlayer"
                                  :playsinline="true"
                                  :options="playerOptions"></video-player>
                </div>
                <div class="text">
                    <div class="text-content">{{currentDescription}}</div>
                </div>
            </div>
            <div class="navigation">
                <div class="nav-bar">
                    <button><router-link :to="{path: '/DataView'}"><img src="../../assets/img/font/Data1.png" /></router-link></button>
                    <button><router-link :to="{path: '/PaperView'}"><img src="../../assets/img/font/Paper1.png" /></router-link></button>
                    <button><router-link :to="{path: '/VideoView'}"><img src="../../assets/img/font/Video2.png" /></router-link></button>
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
                currentDescription: '这是视频的介绍',
                // 视频播放
                playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
                    }],
                    poster: "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,//当前时间和持续时间的分隔符
                        durationDisplay: true,//显示持续时间
                        remainingTimeDisplay: false,//是否显示剩余时间功能
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        
        methods: {
            logout() {
                localStorage.removeItem('token');
                location.reload();
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

    .video-container {
        width: 80%;
        height: 80%;
        padding-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
        position: relative;
        display:flex;
        justify-content:center;
        flex-direction:column;
    }

    .input_video2 {
        height: 70%;
        width: 120vh;
        position: inherit;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
    }

    .video-container video {
        width: auto; /* 视频宽度充满容器 */
        height: 100%; /* 高度自动调整以保持宽高比 */
        aspect-ratio: 16 / 9; /* 设置视频的宽高比为16:9 */
    }

    .text {
        height: 10%;
        width: auto;
        margin-top: 1%;
        margin-bottom: 2%;
        background: url("../../assets/img/textbackground.png") center center no-repeat;
        background-size: 80% 100%;
    }

        .text .text-content {
            font-family: 'Microsoft YaHei';
            font-size: x-large;
            color: white;
            width: 80%;
            height: 85%;
            padding: 1% 10% 1% 10%;
        }

    .navigation {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("../../assets/img/navigation.png") no-repeat;
        background-size: 100% 100%;
    }

    .nav-bar {
        display: flex;
        justify-content: space-around;
    }

        .nav-bar button {
            width: auto;
            border: none;
            background: transparent;
        }

        .nav-bar img {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        /* 添加激活时的样式 */
        .nav-bar button.router-link-active img {
            border: 2px solid #000; /* 举例：添加边框 */
        }
</style>

<!--自定义分页器样式-->
<style type="text/css">
    /*播放按钮设置成宽高一致，圆形，居中*/
    .vjs-custom-skin > .video-js .vjs-big-play-button {
        background-color: rgba(0,0,0,0.45);
        font-size: 3.5em;
        border-radius: 50%;
        height: 2em !important;
        line-height: 2em !important;
        margin-top: -1em !important;
        margin-left: -1em !important;
        width: 2em !important;
        outline: none;
    }

    .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /*control-bar布局时flex，通过order调整剩余时间的位置到进度条右边*/
    .vjs-custom-skin > .video-js .vjs-control-bar .vjs-remaining-time {
        order: 3 !important;
    }

    /*进度条背景轨道*/
    .video-js .vjs-slider {
        border-radius: 1em;
    }

    /*进度条进度*/
    .vjs-custom-skin > .video-js .vjs-play-progress, .vjs-custom-skin > .video-js .vjs-volume-level {
        border-radius: 1em;
    }

    /*鼠标进入播放器后，播放按钮颜色会变*/
    .video-js:hover .vjs-big-play-button, .vjs-custom-skin > .video-js .vjs-big-play-button:active, .vjs-custom-skin > .video-js .vjs-big-play-button:focus {
        background-color: rgba(0,0,0,0.4) !important;
    }

    /*control bar*/
    .video-js .vjs-control-bar {
        background-color: rgba(0,0,0,0.2) !important;
    }

        /*点击按钮时不显示蓝色边框*/
        .video-js .vjs-control-bar button {
            outline: none;
        }
</style>


