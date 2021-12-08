<template>
    <div id="my">
        <div class="con">
            <div class="item-box">
                <div class="user-box">
                    <img class="avatar" :src="user.avatar" ></img>
                    <div class="user-detail">
                        <div class="username">{{user.username}}</div>
                    </div>
                </div>
                <div class="item" v-for="blog in blogs" :key="blog.id">
                    <DropBox :blog="blog" v-on:updateBlog="changeBlog"></DropBox>
                    <router-link class="title" :to="`/detail/${blog.id}`">
                        {{ blog.title }}
                    </router-link>
                    <div class="description">
                    {{ blog.description }}
                    </div>
                </div>
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
<script src="./my.js">

</script>
<style src="./my.less" lang="less">

</style>