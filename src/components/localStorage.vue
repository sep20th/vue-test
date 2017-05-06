
<template>
	<div>
		<h4>localstorage</h4>
		<hr>
		<div class="wrapper">
			<input type="text" placeholder="请输入内容" v-model="goods">
			<button @click='search'>点击搜索</button>
			<button @click='clear'>清空历史搜索</button>
			<ul>
			<li>搜索历史</li>
			<li>搜索历史</li>
			<li v-for="item in history" >{{item}}</li>
		</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				history:[],
				goods:'',
			}
		},//data end
		
		methods:{
			search(){
				location.reload();
				let item = this.goods
				localStorage.setItem(item, item)

				this.goods = ''
			},
			clear(){
				location.reload();
				localStorage.clear();
			}
		},//methods end

		created(){

			console.log('created')
			let arr = []
			for(let k in localStorage){
				arr.push(localStorage[k])
			}
			console.log(arr)
			this.history = arr;

			//清除ios系统localStorage的bug
			var sua = navigator.userAgent.toLowerCase();	
			if (/iphone|ipad|ipod/.test(sua)) {
					let length = this.history.length - 6
					this.history = this.history.slice(0,length)
			    // alert(this.history.length);
			} else if (/android/.test(sua)) {
						//检测安卓
				    alert("android");	
			}

		},//created end
			
	}
</script>
<style scoped>
	.wrapper {
		margin:0 auto;
		width: 500px;
		height: 600px;
		padding: 1rem;
		border: 1px solid #f00;
	}
	input {
		text-indent: 1rem;
		display: block;
	}
	li{
		text-align: left;
		padding: 1rem 0;
		border-bottom: 1px solid #ddd;
	}
</style>