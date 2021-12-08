<template>
    <div id="tell">
    <div class="con">
        <div class="item-box">
            <div class="user-box">
                <img class="avatar" :src="toUser.avatar" ></img>
                <div class="user-detail">
                    <div class="username">{{toUser.username}}</div>
                </div>
            </div>
            <router-link class="item" v-for="blog in toBlogs" :to="`/detail/${blog.id}`" :key="blog.id">
                <div class="title">
                    {{ blog.title }}
                </div>
                <div class="description">
                {{ blog.description }}
                </div>
                <div class="time">
                    {{friendlyDate(blog.updatedAt)}}
                    {{toUser.username}}
                </div>
            </router-link>
            <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
                <div class="title">
                    {{ blog.title }}
                </div>
                <div class="description">
                    {{ blog.description }}
                </div>
                <div class="time">
                    {{friendlyDate(blog.updatedAt)}}
                    {{user.username}}
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>
<script>
import blog from '@/api/blog'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            toBlogs: [],
            toTotal: 0,
            toUserId:[],
            toUser:{},
            blogs:[],
            content:[]
        }
    },
    computed: {
        ...mapGetters(['user'])   //获得user
    },
    // methods:{
    //     getContent(
    //         blog.getDetail({ blogId: this.blogId }).then((res) => {
    //             console.log(res);
    //             this.title = res.data.title;
    //             this.description=res.data.description
    //             this.content = res.data.content;
    //             this.atIndex=res.data.atIndex
    //         });

    //     )
    // },
    created() {
        this.toPage = parseInt(this.$route.query.page) || 1
        this.toUserId=this.$route.params.userId
        console.log(this.toUserId)
        console.log(this.user.id)
        blog.getTell(this.toUserId)
        .then(res => {
            // console.log(res.data.filter(item=>item.title==='个人发送给个人的信息'))
            console.log(res)
            this.toTotal = res.total
            this.toBlogs = res.data.filter(item=>item.title==='个人发送给个人的信息')
            if(res.data.length>0){
                this.toUser=res.data[0].user
            }
        })
        blog.getTell(this.user.id)
        .then(res => {
            this.total = res.total
            this.blogs = res.data.filter(item=>item.title==='个人发送给个人的信息')
        })
        
    },

}
</script>
<style src="./tell.less" lang="less"></style>