<template>
  <div id="detail">
      <div class="detail-con">
          <div class="detail-center">
              <div class="detail-main">
                  <div class="detail-title">{{title}}</div>
                  <div class="user-box">
                      <img class="avatar" :src="user.avatar" @click="toUser"></img>
                      <div class="user-detail">
                          <div class="username" @click="toUser">{{user.username}}</div>
                          <div class="time">{{friendlyDate(createdAt)}}</div>
                      </div>
                  </div>
                  <section class="detail-content" v-html="markdown"></section>
              </div>
              <!-- <div class="detail-nav"></div> -->
          </div>
      </div>
  </div>
</template>
<script>
import marked from 'marked'
import blog from '@/api/blog'
export default {
    data () {
        return {
            title: '',
            rawContent: '',
            user: {},
            createdAt: ''
        }
    },
    created() {
        this.blogId = this.$route.params.blogId; //获得文章id
        // console.log(this.blogId)
        blog.getDetail({ blogId: this.blogId }).then((res) => {
            console.log(res);
            this.title = res.data.title;
            this.rawContent = res.data.content;
            this.createdAt = res.data.createdAt;
            this.user = res.data.user;
        });
    },
    methods:{
        toUser(){
            this.$router.push({path:`/user/${this.user.id}`})
        }
    },
    computed: {
        markdown() {
            return marked(this.rawContent);
        },
    },
};
</script>
<style src="./detail.less" lang="less"></style>