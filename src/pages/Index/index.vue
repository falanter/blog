<template>
  <div id="index">
    <div class="con">
        <div class="item-box">
            <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
                <div class="title">
                    {{ blog.title }}
                </div>
                <div class="description">
                {{ blog.description }}
                </div>
                <div class="font-box">
                    <img class="font-avatar" :src="blog.user.avatar" ><span class="font-name">{{ blog.user.username }}</span>
                    <span class="font-star"><i class="el-icon-star-off"></i><span class="star-number">11.3</span></span>
                </div>
            </router-link>
        </div>
        <!-- <div class="nav"></div> -->
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
import blog from "@/api/blog.js";
export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1,
    };
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then((res) => {
      console.log(res);
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
    });
  },
  methods: {
    onPageChange(newPage) {
      console.log(newPage);
      blog.getIndexBlogs({ page: newPage }).then((res) => {
        console.log(res);
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    },
  },
};
</script>
<style src="./index.less" lang="less"></style>