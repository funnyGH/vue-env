<template>
    <div class="hello">
        <div>
            <h2>Essential Links</h2>
            <button @click="savaOneValue">存储vuex中saveonevalue的值</button>
            <h5>我是测试</h5>
            <h3 @click="goQWE">跳到第二个页面</h3>

            <div>
                saveonevalue的值:
                <div>{{saveOneValue}}</div>
            </div>

            <div @click="getData()">请求接口</div>


        </div>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import store from './../vuex/store.js'

	import { GetLocalMethod } from '../common/HttpService'
	export default {
		name: 'HelloWorld',
		data () {
			return {

			}
		},
        computed:{
            ...mapGetters([
            	'saveOneValue',
                'direction'
            ])
        },
		methods: {
			goQWE () {
				this.$router.push(`/twoPage`);
			},
			savaOneValue(){
                store.commit('UPDATE_SAVEONEVALUE','我是改变后的saveOneValue的值');
            },
            //请求本地数据
			getData(){
				GetLocalMethod('./static/data.json', '', true).then(res => {
					console.log(res);
				});
            }
		},
		mounted() {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    h5 {
        font-size: 40px;
    }
</style>
