<template>
    <div>
        <div class="a">test</div>
        {{$store.state.poi}}
        <el-button @click="change">change</el-button>
        用户名
        <el-input v-model="username" placeholder="请输入内容"></el-input>
        密码
        <el-input v-model="password" placeholder="请输入密码"  show-password></el-input>
        <el-button @click="onLogin">登录</el-button>
        
       
        <el-container>
            <el-main>
                <div class="box">
                    <span class="item">aaaaaa</span>
                    <span class="item">sssssss</span>
                    <span class="item">dddddddd</span>
                </div>
            </el-main>
            <el-aside width="200px">Aside</el-aside>
        </el-container>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    // import request from "@/helpers/request.js";
    // import auth from '@/api/auth.js'
    // window.request=request
    // window.auth=auth
    // auth.getInfo()
    export default{
        data () {
            return {
                username:'999',
                password:'123456'
            }
        },
        methods:{
            ...mapActions(['login']),
            onLogin(){
                this.login({username:this.username,password:this.password})
            },
            change(){
                console.log(this.$store.state.poi)          //获取全局变量state
                console.log(this.$store.getters.hello)      //调用getters
                this.$store.commit("edit")          //调用全局mutations方法
                this.$store.dispatch("helloa")      //调用actions方法
            }
        }
    }
</script>
<style src="./test.less" lang="less"></style>
