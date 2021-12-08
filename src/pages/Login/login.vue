<template>
    <div id="login">
        <div class="con">
            <h4>用户名</h4>
            <el-input v-model="username" placeholder="请输入内容"></el-input>
            <h4>密码</h4>
            <el-input v-model="password" placeholder="请输入密码"  show-password></el-input>
            <el-button class="submit" @click="onLogin">登录</el-button>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default{
        data () {
            return {
                username:'',
                password:''
            }
        },
        methods:{
            ...mapActions(['login']),
            onLogin(){
                this.login({username:this.username,password:this.password})
                .then(()=>{
                    this.$router.push({path:'/'})
                })
            },
           
        }
    }
</script>
<style src="./login.less" lang="less"></style>
