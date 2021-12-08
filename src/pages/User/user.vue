<template>
    <div id="user">
    <div class="con">
        <div class="item-box">
            <div class="user-box">
                <img class="avatar" :src="user.avatar" ></img>
                <div class="user-detail">
                    <div class="username">{{user.username}}</div>
                </div>
            </div>
            <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
                <div class="title">
                    {{ blog.title }}
                </div>
                <div class="description">
                {{ blog.description }}
                </div>
                <div class="time">
                    {{friendlyDate(blog.updatedAt)}}
                </div>
            </router-link>
        </div>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      @current-change="onPageChange"
    >
    </el-pagination>
  </div>
</template>
<script>
import blog from '@/api/blog'
export default {
    data(){
        return{
            blogs: [],
            page: 1,
            user:{},
            total: 0,
            userId:[],
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        this.userId=this.$route.params.userId
        blog.getBlogsByUserId(this.userId, { page: this.page })
        .then(res => {
            console.log(res)
            this.page = res.page
            this.total = res.total
            this.blogs = res.data
            if(res.data.length>0){
                this.user=res.data[0].user
            }
        })
    },
    methods: {
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.$route.params.userId, { page: newPage }).then(res => {
                console.log(res)
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: `/user/${userId}`, query: { page: newPage}})
            })
        },
       
    }
}
</script>
<style src="./user.less" lang="less"></style>