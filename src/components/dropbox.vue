<template>
    <div class="dropbox edit-box" :class="{show: isShow}" @click="isShow=!isShow">
        <i class="el-icon-more"></i>
        <div class="panel">
            <router-link class="edit" :to="`/edit/${blog.id}`">编辑</router-link>
            <a class="delete" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
    </div>
</template>
<script>
import blog from '@/api/blog'
export default {
    props: ['blog'],
    data(){
        return{
           isShow: false,
        }
    },
    methods:{
        onDelete(blogId){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                blog.deleteBlog({ blogId })
                console.log(blogId)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.$emit('updateBlog',blogId)
            }).catch(action => {
                if(action==='cancel'){
                    this.$message({
                        message: '已取消删除'
                    });          
                }
            });      
        }
    }
};
</script>
<style lang="less" scoped>



</style>