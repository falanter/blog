import blog from '@/api/blog'
import { mapGetters } from 'vuex'
import DropBox from '@/components/dropbox.vue'
export default {
    components: {DropBox},
    data(){
        return{
            blogs:[],
            page:1,
            total:0,
            editBox:false
        }
    },
    computed: {
        ...mapGetters(['user'])   //获得user
    },
    created(){
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id, { page: this.page })
        .then(res => {
            console.log(res)
            this.page = res.page
            this.total = res.total
            this.blogs = res.data
        })
    },
    methods:{
        splitDate(dataStr) {
            let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        },
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.$route.params.userId, { page: newPage }).then(res => {
                console.log(res)
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: `/user/${userId}`, query: { page: newPage}})
            })
        },
        changeBlog(blogId){
            this.blogs = this.blogs.filter(blog => blog.id != blogId)
        }
    }
}