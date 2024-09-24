<template>
    <div class="height100">
        <div class="title">
            <img src="../../assets/img/shenhai.png"/>
        </div>
        <!-- bnt start -->
        <div class="bnt" style="position: sticky;z-index: 100;">
            <div class="topbnt_left fl">
                <ul>
                    <li class="active"><router-link :to="{ path: '/' }"><a><img src="../../assets/img/font/shouye2.png" /></a></router-link></li>
                    <li><router-link :to="{ path: '/shebeiView' }"><a><img src="../../assets/img/font/shebeixinxi1.png" /></a></router-link></li>
                    <li><router-link :to="{ path: '/jianceView' }"><a><img src="../../assets/img/font/jiancexinxi1.png" /></a></router-link></li>
                    <li><router-link :to="{ path: '/moniView' }"><a><img src="../../assets/img/font/monixinxi1.png" /></a></router-link></li>
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
                    <li><a href="MyNotePad://"><img src="../../assets/img/font/xuhuanfangzhen1.png" /></a></li>
                    <li><router-link :to="{ path: '/PaperView' }"><a><img src="../../assets/img/font/pingjiabaogao1.png" /></a></router-link></li>
                    <li><router-link :to="{ path: '/caiyangView' }"><a><img src="../../assets/img/font/caiyangjieguo1.png" /></a></router-link></li>
                </ul>
            </div>
        </div>
        <!-- bnt end -->
        <!--  map start-->
        <div class="hdmrboxtm-mbox">
            <div style="height:100%;width:100%;margin-top:0.0%;margin-left:0%;">
                <iframe src="/static/threejs/src/home.html" style="width:100%;height:100%;border:none;"></iframe>
            </div>
        </div>
        <!--  map end-->
        <!--  left1 start -->
        <div class="left1 pleft1" style="position: sticky;z-index: 100;">
            <div class="lpeftmidbot">
                <h2><img src="../../assets/img/font/kuangquxinxi.png" style="padding-top:1%"></h2>
                <div id="lpeftbot" class="lpeftmidbotcont"></div>
            </div>
            <div class="lpeftbot">
                <h2><img src="../../assets/img/font/shebeizhanshijiancezhuangtai.png" style="padding-top:1%"></h2>
                <div class="device-status-container">
                    <div class="leftbox">
                        <!-- 在线设备数量 -->
                        <div class="online-device-count">
                            <img src="../../assets/img/font/zaixianshebei1.png" style="height:55%;width:25%;float:left" />
                            <div style="float:right;width:75%">
                                <img src="../../assets/img/font/zaixianshebei.png" style="width: 75%;" />
                                <span style="font-family:'Microsoft YaHei';font-size:xx-large;color:orange;margin-top:5%">{{ onlineDeviceCount }}</span>
                                <span style="font-family:'Microsoft YaHei';font-size:large;color:white;">台</span>
                            </div>
                        </div>

                        <!-- 当前工作状态 -->
                        <div class="work-status" style="margin-left:35%;height:60%;width:70%">
                            <img :src="showWorkStatus(workStatus)" alt="Work Status" class="workstatustext" />
                            <img :src="showStatus(workStatus)" class="workStatus" />
                            <img src="../../assets/img/icons/workstatusicon/text.png" style="margin-top:5%;height:20%;width:50%" />
                        </div>
                    </div>
                    <div class="rightbox">
                        <!-- 设备状态图标 -->
                        <img :src="getIconPath(deviceState)" alt="Device Status" class="device-status" />
                        <!-- 背景圆圈动画 -->
                        <img v-for="(circleIndex, index) in [1, 2, 3]"
                             :key="index"
                             class="circle"
                             :src="getCircleBackgroundStyle(circleIndex,deviceState)"
                             alt="circle" />
                    </div>
                </div>
            </div>
            <!-- 左下 -->
            <div class="pleftbox2top" style="height: 35%; margin-bottom: 6%">
                <h2><img src="../../assets/img/font/huanjingjiancexinxi.png" style="padding-top:1%"></h2>
                <div id="pleftbox2top" class="pleftbox2topcont"></div>
            </div>
        </div>
        <!--  left1 end -->
        <div class="left2" style="position: sticky;z-index: 100;">
            <div class="arightboxtop" style="width:97.5%; height: 31%;">
                <h2><img src="../../assets/img/font/kuangqushengwuzhongqunjiegou.png" style="padding-top:1%"></h2>
                <div class="left2_table" style="margin-top: 3%;">
                    <div id="pleftbox2bott_cont" class="pleftbox2topcont" style="height:100%;margin-left: 1%;"></div>
                </div>
            </div>

            <div class="pleftbox2midd" style="position: sticky;z-index: 100;">
                <h2><img src="../../assets/img/font/yuzhuangliuchenji.png" style="padding-top:1%"></h2>
                <div class="pvr fl  lpeftb2otcont1 hdtop" style=" height:82%;">
                    <div id="prbottom_box3" class="pleftbox2middcont" style=" height:100%;"></div>
                </div>
            </div>

            <div class="lpeft2bot" style="position: sticky;z-index: 100;">
                <h2><img src="../../assets/img/font/rizhi.png"></h2>
                <div class="log-header" style="width:auto;font-weight: bold;text-align:center;margin-top:5%;color:white;background-color:rgba(255,255,255,0.1)">
                    状态：已调节  时间段：2024-6-4
                </div>
                <!-- 无缝滚动效果 -->
                <div class="marquee-wrap">
                    <ul class="marquee-list" :class="{'animate-up': animateUp}">
                        <li v-for="(item, index) in listData" :key="index" :style="getLogStyle(index)">
                            <span>{{item.date}}</span>
                            <br />
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import echarts from 'echarts';
export default {
  data() {
    return {
        loading: true,
        data: [],
        deviceType: [],
        dateList: [],
        countList: [],
        token: localStorage.getItem('token'),
        devices: [],
        onlineDeviceCount: 0,
        workStatus: 'false',
        deviceState: 'abnormal',
        circles: [], // 根据设备状态动态生成的圆圈背景图片数组
        animateUp: false,
        listData: [{ title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-05-30 15:30'},
            {title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-06-01 15:30' },
            { title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-06-02 15:30' },
            { title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-06-03 15:30' },
            { title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-06-04 15:30' },
            { title: 'xx矿区采矿平台采集设备数据已传输完成', date: '2024-06-05 15:30' }],
        timer: null
    };
  },

  mounted() {
    this.timer = setInterval(this.scrollAnimate, 1500);
    this.$nextTick(() => {

      axios.get('http://10.140.32.217:1379/visapi/api/species/visdata')// 生物种群结构
        .then(response => {
          this.data = response.data.data;
          this.init5();
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    });
    axios.get('http://10.140.32.217:1379/visapi/api/devices/area/visdata')//环境监测信息
      .then(response => {
        this.data = response.data.data.map(item => ({ value: item.deviceCount, name: item.deviceArea }));
        this.init3();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });

    axios.get('http://10.140.32.217:1379/visapi/api/activity/visdata')//矿区信息
      .then(response => {
        this.data = response.data.data;
        this.init2();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });


    axios.get('http://10.140.32.217:1379/visapi/api/sediment/visdata')
      .then(response => {
        // 数据获取成功后，将数据传递给echarts图表
        const data = response.data;
        this.deviceType = data.deviceType;

        // 将后端返回的数据结构转换为echarts所需的数据结构
        const chartData = [];
        data.data.forEach(item => {
          const seriesData = {
            name: item.sedimentName,
            type: 'line',
            stack: '总量',
            data: item.sedimentNum
          };
          chartData.push(seriesData);
        });
          this.init8(chartData);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });

  },
  methods: {
    init5() {
      let myChart = this.$echarts.init(document.getElementById('pleftbox2bott_cont'));
      let option = {
        color: ['#7ecef4'],
        // backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 40,
          right: 20,
          top: 30,
          bottom: 0,
          containLabel: true
        },

        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0)'
            }
          },
          axisLabel: {
            color: "rgba(255,255,255,0)"
          },
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: "rgba(255,255,255,.5)"
          },
          data: this.data.map(item => item.speciesName)
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  1, 0, 0, 1,
                  [
                    { offset: 0, color: 'rgba(230,253,139,.7)' },
                    { offset: 1, color: 'rgba(41,220,205,.7)' }
                  ]
                )
              }
            },
            data: this.data.map(item => item.speciesCount)
          },
        ],
      };
      myChart.setOption(option);
    },

    init8() {//五日沉积物模块
        let myChart = this.$echarts.init(document.getElementById('prbottom_box3'));
        let option = {
            // backgroundColor: 'rgba(1,202,217,.2)',
            grid: {
                left: 60,
                right: 20,
                top: 70,
                bottom: 20
            },
            legend: {
                top: 30,
                textStyle: {
                    fontSize: 10,
                    color: 'rgba(255,255,255,.7)'
                },
                data: ['沉积物1', '沉积物2', '沉积物3']
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)'
                        }
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.7)"
                    },

                    data: ['day1', 'day2', 'day3', 'day4', 'day5'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.3)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.01)'
                        }
                    },

                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '',
                    max: 25,
                    interval: 5,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0)'
                        }
                    }
                }
            ],
            series: [

                {
                    name: '沉积物1',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#b266ff' },
                                    { offset: 1, color: '#121b87' }
                                ]
                            )
                        }
                    },
                    data: [2.0, 4.9, 7.0, 23.2, 25.6]
                },
                {
                    name: '沉积物2',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#00f0ff' },
                                    { offset: 1, color: '#032a72' }
                                ]
                            )
                        }
                    },
                    data: [8.6, 5.9, 9.0, 26.4, 28.7]
                },
                {
                    name: '沉积物3',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#fffb34' },
                                    { offset: 1, color: '#032a72' }
                                ]
                            )
                        }
                    },
                    yAxisIndex: 1,
                    data: [6.0, 5.2, 3.3, 4.5, 6.3]
                }
            ]
        };
        myChart.setOption(option);
    },
   
    init3() {
      let myChart = this.$echarts.init(document.getElementById('pleftbox2top'));
      let option = {
        color: ['#d2d17c', '#00b7ee', '#5578cf', '#5ebbeb', '#d16ad8', '#f8e19a', '#00b7ee', '#81dabe', '#5fc5ce'],
        // backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 50,
          right: 20,
          top: 20,
          bottom: 20
        },
        legend: {
          top: 20,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
          },
          data: this.data.map(item => item.name)
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '66%'],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    init2() {
      let myChart = this.$echarts.init(document.getElementById('lpeftbot'));
      let option = {
        color: ['#00b7ee', '#f8e19a', '#f19ec2', '#5ebbeb', '#d16ad8', '#f8e19a', '#00b7ee', '#81dabe', '#5fc5ce'],
        // backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 20
        },
        legend: {
          top: 10,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
          },
          data: this.data.map(item => item.activityName)
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '55%'],
            data: this.data.map(item => ({ value: item.activityCount, name: item.activityName })),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
},
destroyed() {
            clearInterval(this.timer)
        }
};
    
</script>
<style scope>
    @import url('/src/assets/css/style-100.css');

    .pointer-cursor {
        cursor: pointer;
    }

    .title {
        position: sticky;
        height: 7%;
        width: 100%;
        z-index: 100;
    }
    .title img{
        width:100%;
        height:180%;
        position:absolute;
        top:-55%;
        left:0;
    }

    .left1 {
        background: url("../../assets/img/leftside.png") left center no-repeat;
        background-size: 12% 90%;
        background-repeat: no-repeat;
        background-position: left center;
    }
    .left2 {
        background: url("../../assets/img/rightside.png") right center no-repeat;
        background-size: 12% 90%;
        background-repeat: no-repeat;
        background-position: right -1%;
    }
    .device-status-container {
        width: 100%;
        height: 70%;
    }

    .leftbox {
        display: flex; /* 开启Flexbox布局 */
        flex-direction: column; /* 设置主轴方向为垂直 */
        height: 100%;
        width: 40%;
        float: left;
    }

    .online-device-count {
        float: left;
        width: 100%;
        height: 50%;
        margin-top: 20%;
        margin-left: 10%;
    }

    .work-status {
        display: flex; /* 开启Flexbox布局 */
        flex-direction: column; /* 设置主轴方向为垂直 */
        align-items: center; /* 垂直居中对齐 */
        justify-content: center; /* 垂直居中对齐 */
        height: 45%; /* 或者设置一个具体的高度 */
        width: 85%;
        margin-bottom: 5%;
    }

    .workstatustext {
        width: 50%;
        height: auto;
        animation: fade 2s ease-in-out infinite;
    }

    .rightbox {
        float: right;
        width: 50%;
        height: 90%;
        margin-top: 7%;
        position: relative; /* 为绝对定位的子元素提供参考 */
        display: flex; /* 开启Flexbox布局 */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
    }

    .device-status {
        position: absolute; /* 设为相对定位，以便z-index生效 */
        z-index: 10; /* 确保文字图像在最上层 */
        height: 35%;
        width: 18%;
    }

    .circle {
        position: absolute; /* 绝对定位使元素脱离文档流，可以自由堆叠 */
        /* 初始z-index值 */
        z-index: 3;
        width: 90%;
        height: auto;
        animation: fade 3s ease-in-out infinite;
    }

        /* 为每个圆圈设置不同的z-index值来控制它们的前后顺序 */

    .circle:nth-of-type(2) {
        z-index: 5;
        width: 50%;
        height: auto;
        animation-delay: 1s;
    }

    .circle:nth-of-type(3) {
        z-index: 4;
        width: 70%;
        height: auto;
        animation-delay: 2s;
    }

    @keyframes fade {
        0%, 100% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }
    }

    .marquee-wrap {
        width: 100%;
        height: 65%;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;
        text-align: center;
    }

    .marquee-wrap .marquee-list li {
            width: 100%;
            height: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            list-style: none;
            text-align: center;
            font-family: 'Microsoft YaHei';
            color: #fff;
            line-height: 150%;
    }
    .marquee-wrap .animate-up {
            transition: all 0.5s ease-in-out;
            transform: translateY(-40px);
    }
</style>