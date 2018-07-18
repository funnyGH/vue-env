<template>
    <header class="header">
        <i class="left iconfont icon-goback" @click="goBack()"></i>
        <div class="title" v-html="headTitle"></div>
        <span class="right">
            <i class="iconfont icon-refresh" v-if="refresh" @click="Refresh"></i>
            <i class="right right-finish" v-if="finish" @click="Finish">完成</i>
        </span>
    </header>
</template>
<script>
	import { mapGetters,mapState } from 'vuex'
	export default {
		data () {
			return {}
		},
		props: ['headTitle', 'refresh', 'finish'],
		computed:{
			...mapGetters([
				"direction",
				"includePage"
			])
		},
		methods: {
			goBack () {
				this.$router.go(-1);
			},
			Refresh () {
				this.$emit('refresh', '刷新')
			},
			Finish () {
				this.$emit('finish', '完成')
				this.goBack()
			},
		},
	}
</script>
<style lang="scss" scoped>
    @import '../styles/mixin';

    .header {
            position: relative;
            z-index: 10;
            @include fj;
            padding: 0 10px;
            line-height: 2rem;
            box-sizing: border-box;
            color: $co333;
            background-color:dodgerblue;

        .left, .right {
            width: 2rem;
        }

        .right {
            text-align: right;
        }

        .right-finish {
            width: 1.8rem;
            font-size: .8rem;
        }

        .icon-goback, .title, .icon-refresh {
            font-size: .9rem;
        }

        .title {
            @include fx;
            text-align: center;
        }

        .icon-refresh {
            color: $co37c;
        }

        .icon-onewaylongarrow {
            font-size: 12px;
        }

    }
</style>