<template>
    <header id="header" :class="{login:isLogin,'no-login':!isLogin}">
        <router-link to="/"><h1>blog</h1></router-link>
        <div class="top-index"><router-link to="/">首页</router-link></div>
        <div class="top-right">
            <template v-if="isLogin">
                <div class="user">
                    <div class="top-avatar-box" @click="clickAvatar">
                        <el-avatar class="top-avatar" :src="user.avatar"></el-avatar>
                    </div>
                    <ul>
                        <li @click="toMy"><router-link to="/my" >我的</router-link></li>
                        <li><a href="#" @click="onLogout">注销</a></li>
                    </ul>
                </div>
                <el-button round class="top-edit" @click="toEdit"><i class="el-icon-edit"></i>写文章</el-button>
            </template>
            <template v-if="!isLogin">
                <router-link class="top-login" to="/login">登录</router-link>
                <el-button round class="top-register" @click="toRegister">注册</el-button>
                
            </template>
        </div>
    </header>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            avatarItem:false
        }
    },
    computed:{
        ...mapGetters([
            'isLogin',
            'user'
        ])
    },
    created(){
        this.checkLogin()
    },
    methods:{
        ...mapActions([
            'checkLogin',
            'logout'
        ]),
        toMy(){
            document.querySelector('ul').classList.remove('show')
            this.avatarItem=false
        },
        onLogout(){
            this.logout()
        },
        toRegister(){
            this.$router.push({path:'/register'})
        },
        toEdit(){
            this.$router.push({path:'/create'})
        },
        clickAvatar(){
            if(this.avatarItem){
                document.querySelector('ul').classList.remove('show')
                this.avatarItem=false
            }else{
                document.querySelector('ul').classList.add('show')
                this.avatarItem=true
            }
        }
    }
};
</script>
<style lang="less" scoped>
#header{
    width: 100%;
    position: fixed;
    top:0px;
    left: 0px;
    // z-index: 9999;
    z-index: 2;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px;
    display: flex;
    align-items: center;
    // justify-content: center;
    a{
        text-decoration: none;
        color: #333;
        h1{
            margin:0;
            color:#EA6F5A;
            text-transform: uppercase;
        }      
    }
    .top-index{
       margin-left: 40px;  
       a{
           color: #EA6F5A;
       }
    }
    .top-right{
        margin-left: auto;
        transform: translateX(-30px);
        display: flex;
        align-items: center;
        .top-login{
            color: #999;
            margin-right:30px ;
        }
        .top-register{
            border-color: #EA6F5A;
            color:#EA6F5A;
            &:hover{
                background-color:#fff6f6;
                border-color: #e95e45;
            }
        }
        .top-edit{
            border-color: #EA6F5A;
            background-color: #EA6F5A;
            color: #fff;
            i{
                transform: translateX(-5px);
            }
            &:hover{
                background-color: #e95e45;
            }
        }
        .user{
            position: relative;
            background-color: #fff;
            .top-avatar-box{
                margin-right:20px ;
                border-radius: 50%;
            }
            .top-avatar{
                cursor: pointer;  
            } 
            ul { 
                position: absolute;
                left: 0;
                height: 0;
                list-style: none;
                // border: 1px solid #eaeaea;
                margin:0;
                padding: 0;
                background-color: #fff;
                z-index: -1;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                transform: translateY(-10px);
                transition: all 250ms;
                overflow: hidden;
                a {
                    text-decoration: none;
                    color: #333;
                    font-size: 12px;
                    display: block;
                    padding: 5px 10px;
                    &:hover {
                        background-color: #EA6F5A;
                        color: #fff;
                    }
                }
                &.show{
                    transform: translateY(0px);
                    height: auto;
                }
            }
            // &:hover ul{
            //     transform: translateY(0px);
            //     height: auto;
            // }
        }
    }
}

</style>