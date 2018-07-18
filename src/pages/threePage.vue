<template>

    <div>
        <myheader head-title="我是标题3"></myheader>

        我是第三个页面
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: 'three',
		data () {
			return {}
		},
		component: {
			//someComponent
		}
	}
</script>

<style scoped>
    div {
        font-size: 50px;
        color: red;
    }
</style>
