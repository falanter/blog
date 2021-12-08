<template>
    <div id="edit">
        <div class="con">
            <h1>编辑文章</h1>
            <h3>标题</h3>
            <el-input
            type="text"
            placeholder="请输入内容"
            v-model="title"
            maxlength="30"
            show-word-limit
            >
            </el-input>
            <h3>简介</h3>
            <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="description"
            :autosize="{ minRows: 2, maxRows: 6}"
            maxlength="300"
            show-word-limit
            >
            </el-input>
            <h3>内容</h3>
            <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="content"
            :autosize="{ minRows: 4, maxRows: 30}"
            maxlength="1000"
            show-word-limit
            >
            </el-input>
            <div class="isShow">
                是否展示到主页
                <el-switch
                    v-model="atIndex"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
            </div>
            <el-button class="submit" @click="submit">确定</el-button>
        </div>
    </div>
</template>
<script>
import blog from '@/api/blog.js'
export default {
    data(){
        return{
            title:'',
            description:'',
            content:'',
            atIndex: false
        }
    },
    created(){
        this.blogId = this.$route.params.blogId; //获得文章id
        console.log(this.blogId)
        blog.getDetail({ blogId: this.blogId }).then((res) => {
            console.log(res);
            this.title = res.data.title;
            this.description=res.data.description
            this.content = res.data.content;
            this.atIndex=res.data.atIndex
        });
    },
    methods:{
        submit(){
            blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
            .then(res => {
                this.$message.success(res.msg)
                this.$router.push({ path: `/detail/${res.data.id}`})
            })
        }
    }
}
</script>
<style lang="less">
#edit{
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center;
    .con{
        margin-top:20px;
        width: 1000px;
        text-align: left;
        .submit{
            border-color: #EA6F5A;
            color:#EA6F5A;
            &:hover{
                background-color:#fff6f6;
                border-color: #e95e45;
            }
        }
        @media (max-width:1250px){
            width: 800px;
        }
        @media (max-width:900px){
            width: 650px;
        }
        @media (max-width:700px){
            width: 450px;
        }
        
    }
}

</style>