<template>
    <div id="登录区域">
        <p id="标题">
            可视化交互平台登录
        </p>
        <div id="账号区域">
            <img :src="require('@/assets/svg/icon-账号.svg')" alt="SVG Image" class="icon"/>
            <input class="输入" v-model="username" type="text" placeholder="用户名" autocomplete="off" />
        </div>
        <div id="密码区域">
            <img :src="require('@/assets/svg/icon-密码.svg')" alt="SVG Image"  class="icon" autocomplete="off" />
            <input class="输入" v-model="password" type="password" placeholder="密码">
        </div>
        <div id="验证码区域" v-if="captchaImage" >
            <span id="验证码文字">
                <img :src="require('@/assets/svg/icon-验证码.svg')" alt="SVG Image"  class="icon"/>
                <input class="输入" id="验证码文字INPUT" v-model="captcha" type="text" placeholder="验证码">
            </span>
            <img id="验证码图片" :src="captchaImage" width=20% alt="Captcha Image" @click="refreshCaptcha">
        </div>
        <button id="提交区域" @click="login">登录</button>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from "vue";
    import router from "@/router";
    // 初始化
    onMounted(()=>{
        showCaptchaImage();
    });     
    
    // 用户名，密码，验证码，验证码图片，UUID（验证码序列号，与验证码匹配）
    const username = ref("");
    const password = ref("");
    const captcha = ref("");
    const captchaImage = ref("");
    const uuid = ref("");
  
    // 获取验证码图片
    async function getCaptcha() {
        try {
            const response = await fetch('http://10.140.32.217:62/prod-api/captchaImage');
            const data = await response.json();
            captchaImage.value = "data:image/gif;base64," + data.img;
            return data.uuid;
        } catch (error) {
            console.error(error);
        }
    }

    // 更新验证码图片
    async function showCaptchaImage(){
        uuid.value = await getCaptcha();
    }

    // 刷新验证码
    async function refreshCaptcha() {
        captcha.value = "";
        await showCaptchaImage(); 
    }
  
    // 登录请求
    async function login() {
        try {
            // 请求体
            const loginData = {
                username: username.value,
                password: password.value,
                code: captcha.value,
                uuid: uuid.value
            };
            // 发送 POST 请求
            const response = await fetch("http://10.140.32.217:62/prod-api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });
            // 响应
            const responseData = await response.json();
            // 登陆成功
            if(responseData.code==200){
                console.log(responseData.token)
                alert("登录成功");
                // 保存 token 至浏览器
                localStorage.setItem("token", responseData.token);
                // 跳转到首页
                router.push('/').then(() => {
                    location.reload();
                });;
            }
            // 登陆失败
            else{
                alert("账号/密码/验证码错误");
                await showCaptchaImage(); 
            }
            
        } catch (error) {
            console.error(error);
        }
    }
</script>

<style>
    #登录区域 {
        background-color: #08407D; /* 设置背景颜色 */
        width: 432px; /* 设置宽度 */
        height: 344px; /* 设置高度 */
        border-radius: 16px; 
        border: 2.8px solid #1C85B6;
        margin: 288px auto 0;
        padding: 0;
    }

    #标题 {
        margin: 24px 108px 0;
        /* border: 2.8px solid #FFFFFF; */
        color: #FFFFFF;
        width: 216px;
        height: 28px;
        font-size: 24px;
        font-family: "Microsoft YaHei", sans-serif;
        padding: 0;
    }
    #账号区域 {
        border: 2px solid #FFFFFF;
        border-radius: 4px;     
        margin: 24px 48px 0;
        width: 336px;
        height: 40px;
        padding: 0;
        display: flex;
    }
    #密码区域 {
        border: 2px solid #FFFFFF;
        border-radius: 4px; 
        margin: 24px 48px 0;
        width: 336px;
        height: 40px;
        padding: 0;
        display: flex;
    }

    #验证码区域 {
        /* border: 2px solid #FFFFFF; */
        margin: 24px 48px 0;
        width: 336px;
        height: 40px;
        display: flex;
        padding: 0;
    }
    #验证码文字 {
        border: 2px solid #FFFFFF;
        border-radius: 4px; 
        margin: 0;
        width: 192px;
        height: 40px;
        padding: 0;
        display: flex;
    }
    .输入 {
        border: none;
        background: none;
        padding: 0;
        margin: 0 16px 0;
        outline: none;
        color: #FFFFFF;
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-family: "Microsoft YaHei", sans-serif;
        transition: color 99999s ease-out, background 99999s ease-out;
    }
    .icon {
        margin: 4px;
    }
    #验证码图片 {
        border-radius: 4px; 
        padding: 0;
        margin: 0;
        width: 128px;
        height: 40px;
        margin-left: 16px;
    }
    #提交区域 {
        border: none;
        outline: none;
        border-radius: 4px; 
        margin: 24px 48px 0;
        width: 336px;
        height: 40px;
        padding: 0;
        font-size: 20px;
        color: #1774A8;
        font-family: "Microsoft YaHei", sans-serif;
    }
</style>
  