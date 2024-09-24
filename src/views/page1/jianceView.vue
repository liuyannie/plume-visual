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
                    <li class="active"><router-link :to="{path: '/jianceView'}"><a><img src="../../assets/img/font/jiancexinxi2.png" /></a></router-link></li>
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
        <div class="puleft fl" style="width:690px;">
            <div class="pulefttop">
                <h2 class="tith2"><span>底栖生物数据分析</span></h2>
                <div class="box pbox" style="height:83%;">
                    <div id="puleftboxtop" class="fl puleftboxtop" style="height: 105%;margin-top: 35px;"></div>
                    <div class="pvr fr pulefttoday_bar2" style="height: 105%;margin-top: 35px;">
                        <div id="puleftbox2bott_cont" class="puleftbox2bott_cont" ></div>
                    </div>
                </div>
            </div>
            <!-- lefttoday_number end -->
            <div class="puleftboxtmidd" >
                <h2 class="tith2"><span>羽流颗粒物数据分析</span></h2>
                <div class="box pbox" style="height:83%;">
                    <div id="puleftboxtmidd1" class="fl puleftboxtmidd1" style="height: 105%;margin-top: 25px;"></div>
                    <div class="pvr fr pulefttoday_bar2" style="width: 320px; height: 105%;margin-top: 25px;">
                        <div id="puleftboxtmidd2" class="puleftbox2bott_cont" ></div>
                    </div>
                </div>
            </div>
            <div class="puleftboxtbott">
                <h2 class="tith2 pt1"><span>海洋环境数据分析</span></h2>
                <div class="box pbox" style="height:85%;">
                    <div id="puleftboxtbott1" class="fl puleftboxtbott1" style="height: 105%;margin-top: 25px;"></div>
                </div>
            </div>
        </div>
        <!--  left1 end -->
        <div class="fl pt6 puleft2" style="height: 820px; width: 760px; ">
            <div class="pumiddboxttop1 fl" >
                <h2 class="tith2" style="font-size: 14px;">图片数据</h2>
                <div class="img-content" style="margin-top: 72px;">
                    <div class="swiper-button-prev2"></div>
                    <div class="swiperbg2">
                        <swiper :options="swiperOptionThumbs2"
                                class="gallery-thumbs2"
                                ref="swiperThumbs2" @slideChange="SlideChange">
                            <swiper-slide class="" v-for="(item, index) in clist" :key="index">
                                <img :src="item.imgUrl" alt="" style="height: 100%; width: 100%" />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="swiper-button-next2"></div>
                </div>
            </div>
        </div>
        <!-- mrbox_top end -->
        <div class="mr_right fl" style="margin-left: -380px;width: 690px;">
            <div class="purightboxtop" >
                <h2 class="tith2"><span>视频数据</span></h2>
                <div class="input_video" style="margin-top: 28px;">
                    <video-player class="video-player vjs-custom-skin"
                                  ref="videoPlayer"
                                  :playsinline="true"
                                  :options="playerOptions"></video-player>
                </div>
            </div>
            <div class="purightboxmidd">
                <h2 class="tith2"><span>设备类数据</span></h2>
                <div id="purightboxmiddid" class="purightboxmiddcont" style="height: 100%;"></div>
            </div>
            <div class="purightboxbott">
                <h2 class="tith2"><span>活动类数据</span></h2>
                <div id="purightboxbott" class="purightboxbottcont" style="height: 244px;margin-top: 15px;"></div>
            </div>
        </div>
        <!-- mrbox_top_right end -->
    </div>

</template>
<script>
  import echarts from 'echarts'
  export default {
      data() {
          return {
              loading: true,
              token: localStorage.getItem('token'),
              swiperOptionThumbs2: {
                  direction: 'vertical',
                  spaceBetween: 5,
                  centeredSlides: false,
                  slidesPerView: 3,
                  touchRatio: 0.2,
                  navigation: {
                      nextEl: '.swiper-button-next2',
                      prevEl: '.swiper-button-prev2',
                  },
                  // 自动滑动
                  autoplay: {
                      delay: 2000,
                      stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。
                      disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
                  },
              },
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
              ],
          };
      },
      mounted() {
          this.$nextTick(() => {
              this.swiperThumbs2 = this.$refs.swiperThumbs2.swiper;
              this.init();
              this.init1();
              this.init2();
              this.init3();
              this.init4();
              this.init5();
              this.init6();
          })
      },
      methods: {
          logout() {
              localStorage.removeItem('token');
              location.reload();
          },
          SlideChange() { },

          init() {
              let myChart = this.$echarts.init(document.getElementById('puleftbox2bott_cont'));
              const data = [
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'A', Type: 'Type1', Number: 100, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'B', Type: 'Type2', Number: 200, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'C', Type: 'Type1', Number: 500, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'D', Type: 'Type2', Number: 150, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'E', Type: 'Type1', Number: 70, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'F', Type: 'Type2', Number: 90, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'G', Type: 'Type1', Number: 120, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'H', Type: 'Type2', Number: 230, Size: 6.0 },

                  // 添加更多的数据项
              ];

              // 格式化数据
              const xData = data.map(item => item.Name);

              let option = {
                  tooltip: {
                      trigger: 'axis',
                      formatter: function (params) {
                          const { name, value, data } = params[0];
                          const { Longitude, Coordinate, Time } = data;
                          return `生物名称: ${name}<br/>数量: ${value}个/m³<br/>经度: ${Longitude}<br/>纬度: ${Coordinate}<br/>时间: ${Time}`;
                      }
                  },
                  legend: {
                      data: ['海域B底栖生物数量'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)'// 设置图例文字颜色为白色
                      }
                  },
                  xAxis: {
                      type: 'category',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)'
                          }
                      },
                      name: '种类',
                      nameGap: 6,
                      data: xData,
                      axisLabel: {
                          interval: 0,
                          rotate: 45
                      }
                  },
                  yAxis: {
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)'
                          }
                      },
                      name: '数量/个/m³',
                      splitLine: { show: false }  // 去掉 y 轴分割线
                  },
                  series: [
                      {
                          name: '海域B底栖生物数量',
                          type: 'line',
                          data: data.map(item => ({
                              value: item.Number,
                              Longitude: item.Longitude,
                              Coordinate: item.Coordinate,
                              Time: item.Time
                          })),
                          areaStyle: {
                              // 下面的设置使折线图下方区域填充颜色
                              color: 'rgba(126,206,236,.6)'
                          },
                          smooth: true, // 平滑曲线
                          lineStyle: {
                              width: 2
                          },

                          itemStyle: {
                              color: 'rgba(50,206,236,.7)'
                          },
                          symbol: 'circle',
                          symbolSize: 6
                      }
                  ]
              };
              myChart.setOption(option);
          },
          init1() {
              let myChart = this.$echarts.init(document.getElementById('puleftboxtop'));
              const data = [
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'A', Type: 'Type1', Number: 200, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'B', Type: 'Type2', Number: 220, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'C', Type: 'Type1', Number: 450, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'D', Type: 'Type2', Number: 350, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'E', Type: 'Type1', Number: 170, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'F', Type: 'Type2', Number: 190, Size: 6.0 },
                  { Time: '2024-08-01 08:00', Device: 'Device1', Longitude: 120.123, Coordinate: 30.456, Depth: 50.5, Name: 'G', Type: 'Type1', Number: 320, Size: 5.5 },
                  { Time: '2024-08-01 09:00', Device: 'Device2', Longitude: 121.234, Coordinate: 31.567, Depth: 45.0, Name: 'H', Type: 'Type2', Number: 240, Size: 6.0 },
                  // 添加更多的数据项
              ];

              // 格式化数据
              const xData = data.map(item => item.Name);

              let option = {
                  tooltip: {
                      trigger: 'axis',
                      formatter: function (params) {
                          const { name, value, data } = params[0];
                          const { Longitude, Coordinate, Time } = data;
                          return `生物名称: ${name}<br/>数量: ${value}<br/>经度: ${Longitude}<br/>纬度: ${Coordinate}<br/>时间: ${Time}`;
                      }
                  },
                  legend: {
                      data: ['海域A底栖生物数量'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)' // 设置图例文字颜色为白色
                      }
                  },
                  xAxis: {
                      type: 'category',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)'
                          }
                      },
                      name: '种类',
                      nameGap: 6,
                      data: xData,
                      axisLabel: {
                          interval: 0,
                          rotate: 45
                      }
                  },
                  yAxis: {
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)'
                          }
                      },
                      name: '数量/个/m³',
                      splitLine: { show: false } // 去掉 y 轴分割线
                  },
                  series: [
                      {
                          name: '海域A底栖生物数量',
                          type: 'bar',
                          data: data.map(item => ({
                              value: item.Number,
                              Longitude: item.Longitude,
                              Coordinate: item.Coordinate,
                              Time: item.Time
                          })),
                          itemStyle: {
                              color: 'rgba(126,206,206,.8)'
                          }
                      }
                  ]
              };
              myChart.setOption(option);
          },
          init2() {
              let myChart = this.$echarts.init(document.getElementById('puleftboxtmidd1'));
              // 示例数据
              let data = [
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 120.5, Coordinate: 30.2, depth: 15.2, ParticulateDumber: 12000, ParticulateSize: 2.5, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor2', Longitude: 101.0, Coordinate: 10.5, depth: 14.8, ParticulateDumber: 11500, ParticulateSize: 3.7, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 90.5, Coordinate: 20.2, depth: 15.2, ParticulateDumber: 10000, ParticulateSize: 2.5, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor2', Longitude: 81.0, Coordinate: 15.5, depth: 14.8, ParticulateDumber: 11450, ParticulateSize: 1.7, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 70.5, Coordinate: 19.2, depth: 15.2, ParticulateDumber: 11200, ParticulateSize: 2.0, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor2', Longitude: 111.0, Coordinate: 22.5, depth: 14.8, ParticulateDumber: 9590, ParticulateSize: 3.3, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  // 更多数据
              ];

              // 转换数据为 ECharts 所需格式
              let formattedData = data.map(item => ({
                  name: [item.ParticulateDensity, item.ParticulateSize],
                  value: [item.Longitude, item.Coordinate, item.ParticulateDumber], // 经度, 纬度, 颗粒物数量
                  symbolSize: item.ParticulateDumber / 1200, // 点的大小，根据颗粒物数量调整
                  itemStyle: {
                      color: `rgba(90,216,182,.9)` // 颜色根据颗粒物密度调整
                  }
              }));

              let option = {
                  tooltip: {
                      trigger: 'axis',
                      trigger: 'item',
                      formatter: function (params) {
                          const { name, value } = params;
                          return `经度: ${value[0]}<br/>纬度: ${value[1]}<br/>颗粒物数量: ${value[2]}<br/>颗粒物大小: ${name[1]}cm<br/>密度: ${name[0]}g/cm³`;
                      }
                  },
                  legend: {
                      data: ['海域A羽流颗粒物信息'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)'// 设置图例文字颜色为白色
                      },
                      itemStyle: {
                          color: 'rgba(90,216,182,.9)' // 设置图例点的颜色
                      }
                  },
                  xAxis: {
                      name: '经度',
                      nameGap: 6,
                      type: 'value',
                      min: 60,
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色为白色
                          }
                      },
                      scale: true,
                      axisLabel: {
                          formatter: '{value}',
                          color: 'rgba(255,255,255,.7)' // x 轴标签颜色为白色
                      },
                      splitLine: { show: false } // 去掉 x 轴分割线
                  },
                  yAxis: {
                      name: '纬度',
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色为白色
                          }
                      },
                      scale: true,
                      axisLabel: {
                          formatter: '{value}',
                          color: 'rgba(255,255,255,.7)' // y 轴标签颜色为白色
                      },
                      splitLine: { show: false }, // 去掉 y 轴分割线
                      interval: 6 // 设置 y 轴刻度间隔为 6
                  },
                  series: [{
                      name: '海域A羽流颗粒物信息',
                      type: 'scatter',
                      data: formattedData,
                      symbolSize: function (data) {
                          return data[2] / 100; // 点的大小
                      },
                      itemStyle: {
                          color: function (data) {
                              return `rgba(0, 126, 112, 206)`; // 点的颜色
                          }
                      },
                      label: {
                          show: true,
                          formatter: function (params) {
                              return `${params.value[0]},${params.value[1]}`;
                          },
                          position: 'top'
                      }
                  }]
              };
              myChart.setOption(option);
          },
          init3() {
              let myChart = this.$echarts.init(document.getElementById('puleftboxtmidd2'));
              let data = [
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 120.5, Coordinate: 30.2, depth: 15.2, ParticulateDumber: 12000, ParticulateSize: 2.5, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor2', Longitude: 101.0, Coordinate: 10.5, depth: 14.8, ParticulateDumber: 11500, ParticulateSize: 3.7, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor3', Longitude: 90.5, Coordinate: 20.2, depth: 15.2, ParticulateDumber: 10000, ParticulateSize: 2.5, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor2', Longitude: 81.0, Coordinate: 15.5, depth: 14.8, ParticulateDumber: 11450, ParticulateSize: 1.7, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 70.5, Coordinate: 19.2, depth: 15.2, ParticulateDumber: 11200, ParticulateSize: 2.0, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
                  { Time: '2024-08-13T10:05:00Z', Device: 'Sensor3', Longitude: 111.0, Coordinate: 22.5, depth: 14.8, ParticulateDumber: 9590, ParticulateSize: 3.3, ParticulateDensity: 0.9, PlumeRedepositedThickness: 1.3 },
                  { Time: '2024-08-13T10:00:00Z', Device: 'Sensor1', Longitude: 130.5, Coordinate: 19.2, depth: 15.2, ParticulateDumber: 11200, ParticulateSize: 2.0, ParticulateDensity: 0.8, PlumeRedepositedThickness: 1.2 },
              ];

              // 转换数据为 ECharts 所需格式
              let barData = data.map(item => ({
                  name: [item.Device, item.ParticulateDumber, item.ParticulateSize],
                  value: [item.Longitude, item.Coordinate] // 经度, 纬度
              }));

              let option = {
                  tooltip: {
                      trigger: 'item',
                      formatter: function (params) {
                          const { name, value } = params;
                          return `设备: ${name[0]}<br/>经度: ${value[0]}<br/>纬度: ${value[1]}<br/>颗粒物数量: ${name[1]}个/m³<br/>颗粒物大小:${name[2]}cm`;
                      }
                  },
                  legend: {
                      data: ['海域B羽流颗粒物信息'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)' // 设置图例文字颜色为白色
                      }
                  },
                  xAxis: {
                      name: '经度',
                      nameGap: 6,
                      min: 60,

                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色为白色
                          }
                      },
                      axisLabel: {
                          formatter: '{value}',
                          color: 'rgba(255,255,255,.7)' // x 轴标签颜色为白色
                      },
                      splitLine: { show: false } // 去掉 x 轴分割线
                  },
                  yAxis: {
                      name: '纬度',
                      nameGap: 5,
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // y 轴线条颜色为白色
                          }
                      },
                      axisLabel: {
                          color: 'rgba(255,255,255,.7)' // y 轴标签颜色为白色
                      },
                      splitLine: { show: false } // 去掉 y 轴分割线
                  },
                  series: [{
                      name: '海域B羽流颗粒物信息',
                      type: 'bar',
                      data: barData,
                      itemStyle: {
                          color: 'rgba(120,212,262,.7)' // 设置柱子颜色
                      }
                  }]
              };
              myChart.setOption(option);
          },
          init4() {
              let myChart = this.$echarts.init(document.getElementById('puleftboxtbott1'));
              const data = [
                  { collecting_device: 'A01', time: '2024-08-01 12:00', longitude: 120.12, latitude: 30.8, depth: 15.2, dissolved_oxygen: 8.5, turbidity: 1.2, chlorophyll: 0.4, temperature: 25.3, salinity: 35.0, pressure: 101.3, conductivity: 3.2, ph_value: 8.1, ox_reduction_potential: 100 },
                  { collecting_device: 'A02', time: '2024-08-01 13:00', longitude: 201.45, latitude: 31.6, depth: 20.0, dissolved_oxygen: 9.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A03', time: '2024-08-01 12:00', longitude: 790.23, latitude: 50.58, depth: 15.2, dissolved_oxygen: 8.5, turbidity: 1.2, chlorophyll: 0.4, temperature: 25.3, salinity: 35.0, pressure: 101.3, conductivity: 3.2, ph_value: 8.1, ox_reduction_potential: 100 },
                  { collecting_device: 'A04', time: '2024-08-01 13:00', longitude: 881.45, latitude: 71.78, depth: 20.0, dissolved_oxygen: 9.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A05', time: '2024-08-01 12:00', longitude: 600.14, latitude: 60.5, depth: 15.2, dissolved_oxygen: 8.5, turbidity: 1.2, chlorophyll: 0.4, temperature: 25.3, salinity: 35.0, pressure: 101.3, conductivity: 3.2, ph_value: 8.1, ox_reduction_potential: 100 },
                  { collecting_device: 'A06', time: '2024-08-01 13:00', longitude: 561.35, latitude: 44.6, depth: 20.0, dissolved_oxygen: 9.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A07', time: '2024-08-01 12:00', longitude: 480.14, latitude: 32.56, depth: 15.2, dissolved_oxygen: 8.5, turbidity: 1.2, chlorophyll: 0.4, temperature: 25.3, salinity: 35.0, pressure: 101.3, conductivity: 3.2, ph_value: 8.1, ox_reduction_potential: 100 },
                  { collecting_device: 'A08', time: '2024-08-01 13:00', longitude: 321.5, latitude: 78.67, depth: 20.0, dissolved_oxygen: 9.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A08', time: '2024-08-01 13:00', longitude: 231.5, latitude: 70.67, depth: 10.0, dissolved_oxygen: 4.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A07', time: '2024-08-01 13:00', longitude: 391.5, latitude: 58.67, depth: 20.0, dissolved_oxygen: 9.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
                  { collecting_device: 'A04', time: '2024-08-01 13:00', longitude: 551.5, latitude: 38.67, depth: 27.0, dissolved_oxygen: 5.0, turbidity: 1.5, chlorophyll: 0.5, temperature: 24.8, salinity: 34.8, pressure: 102.0, conductivity: 3.3, ph_value: 8.2, ox_reduction_potential: 150 },
              ];
              // 将数据转换为 ECharts 所需格式
              let scatterData = data.map(item => ({
                  name: item.collecting_device,
                  value: [item.longitude, item.latitude, item.depth, item.dissolved_oxygen, item.turbidity, item.chlorophyll, item.temperature, item.salinity, item.pressure, item.conductivity, item.ph_value, item.ox_reduction_potential]
              }));
              let option = {
                  tooltip: {
                      trigger: 'item',
                      formatter: function (params) {
                          const { name, value } = params;
                          return `
                          经度: ${value[0]} | 纬度: ${value[1]} | 深度: ${value[2]} m<br/>
                          溶解氧: ${value[3]} μmol/L | 浊度: ${value[4]} NTU | 叶绿素: ${value[5]} μm/L<br/>
                          温度: ${value[6]} ℃ | 盐度: ${value[7]} mS/cm | 压力: ${value[8]} kPa<br/>
                          pH值: ${value[10]} | 氧化还原电位: ${value[11]}| 电导率: ${value[9]} mS/cmmV
                      `;
                      },
                  },
                  legend: {
                      data: ['海洋中各处环境的数据散点图'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)'// 设置图例文字颜色为白色
                      }
                  },
                  xAxis: {
                      name: '经度',
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色
                          }
                      },
                      axisLabel: {
                          formatter: '{value}',
                          color: 'rgba(255,255,255,.7)' // x 轴标签颜色
                      }
                  },
                  yAxis: {
                      name: '纬度',
                      type: 'value',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // y 轴线条颜色
                          }
                      },
                      axisLabel: {
                          formatter: '{value}',
                          color: 'rgba(255,255,255,.7)' // y 轴标签颜色
                      }
                  },
                  series: [{
                      name: '海洋中各处环境的数据散点图',
                      type: 'scatter',
                      data: scatterData,
                      symbolSize: 10, // 点的大小
                      itemStyle: {
                          color: 'rgba(99,139,249,.9)' // 点的颜色
                      }
                  }]
              };
              myChart.setOption(option);
          },
          init5() {
              let myChart = this.$echarts.init(document.getElementById('purightboxmiddid'));
              var option = {
                  tooltip: {
                      trigger: 'item',
                      formatter: function (params) {
                          const { name, value, data } = params;
                          return `
                          设备名称: ${name}<br/>
                          设备数量: ${value} 个<br/>
                          备注: ${data.remark || '无'}<br/>
                          使用情况: ${data.usage || '无'}
                      `;
                      }
                  },
                  legend: {
                      data: ['海域A', '海域B'],
                      textStyle: {
                          color: 'rgba(255,255,255,.7)' // 设置图例文字颜色为白色
                      },
                      top: '5%', // 设置图例距离容器顶部的距离
                      left: '36%' // 可选：设置图例距离容器左边的距离
                  },
                  xAxis: {
                      type: 'category',
                      data: ['设备A', '设备B', '设备C', '设备D', '设备E', '设备F', '设备G', '设备H', '设备I', '设备J', '设备K'], // 示例设备名称
                      name: '设备名称',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色
                          }
                      }
                  },
                  yAxis: {
                      type: 'value',
                      name: '设备数量',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // y 轴线条颜色
                          }
                      }
                  },
                  series: [
                      {
                          name: '海域A',
                          type: 'line',
                          lineStyle: {
                              color: 'rgba(12,255,150,.9)' // 第一条折线颜色
                          },
                          data: [
                              { value: 120, remark: '正常', usage: '使用中' },
                              { value: 90, remark: '需维护', usage: '闲置' },
                              { value: 150, remark: '正常', usage: '使用中' },
                              { value: 80, remark: '正常', usage: '维护中' },
                              { value: 110, remark: '正常', usage: '使用中' },
                              { value: 120, remark: '正常', usage: '使用中' },
                              { value: 90, remark: '需维护', usage: '闲置' },
                              { value: 150, remark: '正常', usage: '使用中' },
                              { value: 80, remark: '正常', usage: '维护中' },
                              { value: 110, remark: '正常', usage: '使用中' },
                              { value: 150, remark: '正常', usage: '使用中' }
                          ]
                      },
                      {
                          name: '海域B',
                          type: 'line',
                          lineStyle: {
                              color: 'rgba(1,188,255,.9)' // 第二条折线颜色
                          },
                          data: [
                              { value: 70, remark: '正常', usage: '使用中' },
                              { value: 50, remark: '需维护', usage: '闲置' },
                              { value: 90, remark: '正常', usage: '使用中' },
                              { value: 60, remark: '正常', usage: '维护中' },
                              { value: 80, remark: '正常', usage: '使用中' },
                              { value: 70, remark: '正常', usage: '使用中' },
                              { value: 50, remark: '需维护', usage: '闲置' },
                              { value: 90, remark: '正常', usage: '使用中' },
                              { value: 60, remark: '正常', usage: '维护中' },
                              { value: 80, remark: '正常', usage: '使用中' },
                              { value: 90, remark: '正常', usage: '使用中' }
                          ]
                      }
                  ]
              };
              myChart.setOption(option);
          },
          init6() {
              let myChart = this.$echarts.init(document.getElementById('purightboxbott'));
              let option = {
                  tooltip: {
                      trigger: 'axis',
                      formatter: function (params) {
                          let data = params[0].data;
                          return `设备: ${data.device}<br>经度: ${data.longitude}<br>纬度: ${data.latitude}<br>活动次数: ${data.value}次`;
                      }
                  },
                  legend: {
                      data: ['活动次数'],
                      textStyle: {
                          color: 'rgba(255,255,255,.8)' // 设置图例文字颜色
                      }
                  },
                  xAxis: {
                      type: 'value',
                      name: '活动次数',
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // x 轴线条颜色
                          }
                      },
                      axisLabel: {
                          color: 'rgba(255,255,255,.7)' // 设置x轴标签颜色
                      },
                      splitLine: { show: false } // 去掉 x 轴分割线
                  },
                  yAxis: {
                      type: 'category',
                      name: '设备',
                      data: ['设备A', '设备B', '设备C', '设备D', '设备E', '设备F'],
                      axisLine: {
                          lineStyle: {
                              color: 'rgba(255,255,255,.7)' // y 轴线条颜色
                          }
                      },
                      axisLabel: {
                          color: 'rgba(255,255,255,.7)' // 设置y轴标签颜色
                      }
                  },
                  series: [
                      {
                          name: '活动次数',
                          type: 'bar',
                          data: [
                              { value: 10, name: '设备A', device: '设备A', longitude: 115.97, latitude: 29.89 },
                              { value: 20, name: '设备B', device: '设备B', longitude: 116.38, latitude: 28.12 },
                              { value: 30, name: '设备C', device: '设备C', longitude: 117.22, latitude: 27.48 },
                              { value: 20, name: '设备D', device: '设备D', longitude: 118.14, latitude: 26.08 },
                              { value: 30, name: '设备E', device: '设备E', longitude: 119.33, latitude: 25.42 },
                              { value: 35, name: '设备F', device: '设备F', longitude: 120.50, latitude: 24.15 }
                          ],
                          itemStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                  { offset: 0, color: 'rgba(0, 201, 255, 0.3)' }, // 渐变色起点
                                  { offset: 1, color: 'rgba(146, 254, 157, 0.7)' }  // 渐变色终点
                              ])
                          }
                      }
                  ]
              };
              myChart.setOption(option);
          },
      }
  }
</script>
<style scope>
  @import url('/src/assets/css/style-100.css');
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
  .img-content {
      color: white;
      margin-top: 2%;
      height: 90%;
      width: 100%;
      padding: 2% 5% 2% 1%;
      position: relative;
  }

  .swiperbg2 {
      width: 100%;
      height: 90%;
      margin-top: 5%;
  }

  .gallery-thumbs2 {
      height: 80%;
      width: 75%;
      box-sizing: border-box;
      margin: 0% 7% 0 7%;
      position: absolute;
  }

      .gallery-thumbs2 .swiper-slide {
          width: 100%;
          height: 30%;
      }

  .swiper-button-next2 {
      /*先将原始箭头的颜色设置为透明的  然后设置一个背景图片  达到修改按钮样式的目的*/
      top: 38%;
      right: 48%;
      width: 10%;
      height: 100%;
      position: absolute;
      color: rgba(0, 0, 0, 0) !important;
      background: url("../../assets/img/icons/next.png") center center no-repeat;
      transform: rotate(90deg);
  }

      .swiper-button-next2:hover {
          transform: rotate(90deg);
      }

  .swiper-button-prev2 {
      top: -50.5%;
      left: 43%;
      width: 10%;
      height: 100%;
      position: absolute;
      color: rgba(0, 0, 0, 0) !important;
      background: url("../../assets/img/icons/prior.png") center center no-repeat;
      transform: rotate(90deg);
  }

      .swiper-button-prev2:hover {
          transform: rotate(90deg);
      }

  .input_video {
      height: 50%;
      width: 50%;
      padding-left: 25%;
  }
</style>


