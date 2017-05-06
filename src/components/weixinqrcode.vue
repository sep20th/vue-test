<template>
	<section>
		<h4 class="title"  @click="show">微信qrcode</h4>
		<hr>
		<img class="bg" src="../assets/bg.jpg">
		<div class="wrapper" v-show='mask'  @touchmove.prevent>
			<div class="code-wrapper">
				<p>长按识别二维码</p>
				<img class="qrcode" src="../assets/qrcode.png">
			</div>
		</div>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				mask:false
			}
		},//data end

		methods:{
			show(){
				this.mask = !this.mask
			}
		},//methods end
	}
</script>
<style scoped>

	h4{
		font-size: 16px;
	}
	p{
		font-size: 15px;
	}
	section{
		overflow-x: hidden;
	}	
	
	.title{
		position: fixed;
		top: 30px;
		left: 0;
		width: 100%;
		height: 46px;
		line-height: 46px;
		background: #999;
		color: #fff;
		padding: 0;
		margin: 0;
		z-index: 11;
	}
	.wrapper{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 10;
	}
	.qrcode{
		
		width: 200px;
		height:200px;
		border: none;
	}
	.code-wrapper{
		position: absolute;
		top: 200px;
		left: 50px;
		width: 300px;
		height: 250px;
		background: #fff;
		border-radius: 20px;

	}
</style>