<template>
    <div class="twopage-wrap">

        <myheader head-title="我是标题2"></myheader>
        <h5 @click="goThree">我是测试页面2</h5>
        <p>
            用户名：<input placeholder="请输入用户名" class="inputname" type="text" v-model="username">
        </p>
        <p>
            密码：<input placeholder="请输入密码" class="inputpwd" type="text" v-model="password">
        </p>
        <button class="sure" @click="sureLogin">确定</button>
    </div>
</template>

<script>
	import { mapGetters,mapState } from 'vuex'
	import store from '../vuex/store'

	import { LoginMethod } from '../common/HttpService'
	export default {
		name: 'qwe',
		data () {
			return {
				username:'',
				password:''
            }
		},
		computed: {
			...mapGetters([
				'direction',
			])
		},
		methods: {
			goThree () {
				this.$router.push(`/threePage`)
			},
            //请求接口
			sureLogin(){
				let para = {
					"memberName":this.username,
                    "password":this.password
                }
				LoginMethod(para, true).then(res => {
					console.log(res);
				});
			}
		},
		mounted(){
			console.log(this.direction)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .twopage-wrap{
        font-size: 1.4rem;
        h5 {
            font-size: 2rem;
        }
        p{
            margin:1rem 0;
        }
        .inputname,.inputpwd{
            width: 60%;
            height:2rem;
            border:1px solid #000;
        }
        .sure{
            padding:1rem 1.5rem;
        }
    }

</style>
