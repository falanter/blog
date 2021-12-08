<template>
    <div id="register">
        <div class="con">
            <h4>用户名</h4>
            <el-input v-model="username" placeholder="请输入内容"></el-input>
            <h4>密码</h4>
            <el-input v-model="password" placeholder="请输入密码"  show-password></el-input>
            <el-button class="submit" @click="onRegister">注册</el-button>
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
            ...mapActions(['register']),
            onRegister(){
                this.register({username:this.username,password:this.password})
            },
           
        }
    }
</script>
<style src="./register.less" lang="less"></style>
