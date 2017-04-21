<template>
	<div>
		<h4>my QRcode</h4>
		<div class="fir">
			<h5>方法A qrcode</h5>
			<div><input type="text" placeholder="请输入网址" v-model='textA'></div>
			<div><button @click='clickA'>点击生成二维码</button></div>
			<img :src="urlA" width="200" height="200">
		</div>
	</div>
</template>

<script>
	//方法一
	import QRCode from 'qrcode'

	export default{
		data(){
			return{
				urlA:'',
				textA:'',
			}
		},//data end

		methods:{
			clickA(){
				console.log(this.textA)
				let web = this.textA
				QRCode.toDataURL(web,{ errorCorrectionLevel: 'H' },(err,url)=>{
					this.urlA = url
				})
			},
			
			
		},//methods end

		created(){
			
		}
	}
</script>

<style>
	h4,h5{
		margin: 1rem;
	}
	img{
		border:1px solid #ADADAD;
		padding: 0;
	}
	input {
		height: 2rem;
		width:15rem;
		margin: .5rem;
	}
	button {
		height: 1.5rem;
		width:10rem;
		margin: .5rem;
	}
	
</style>