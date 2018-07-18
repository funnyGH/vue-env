<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!--<router-view/>-->
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')" >
            <keep-alive :include='includePage'>
                <router-view class='router-view'></router-view>
            </keep-alive>
        </transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'App',
		data (){
			return{

			}
		},
        methods:{
            forDirection(){
            	console.log(this.direction);
            }
        },
		computed:{
			...mapGetters([
				"direction",
				"includePage"
			])
        }

	}
</script>

<style lang="scss">
    @import './styles/common';
    @import './styles/mixin';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }


    .router-view{
        width: 100%;
        -webkit-overflow-scrolling: touch;
    }
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 400ms;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }
    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    /*淡入淡出的方法*/
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity 1s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
