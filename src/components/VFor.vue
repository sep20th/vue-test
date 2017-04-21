<template>
	<div>
		<p class='notes'>遍历获取数据且操作DOM</p>
		<hr>
		<p>请点击想要购买的水果</p>
		<ul class="fruits" 
			v-for='(item,index,key) in items'
			@click = 'click(item,index,key)'
			:id = "index"
		>
			<li>名称：{{item.label}}</li>
			<li>价格：￥{{item.value}}</li>
			<li>折扣：{{item.discount}}</li>
		</ul>
		<div class="clear"></div>
		<div>
			<p>您选择的水果是：{{name}}</p>
			<p>该水果目前折扣是：{{discount}}</p>
			<p>您应付款 {{total}} 元</p>
		</div>
		<br>
		<div>
			<h5>测试 index key value</h5>
			<p v-for="(value,key,index) in options">
				index:{{index}}
				key:{{key}}
				value:{{value}}
			</p>
		</div>
		<br>
		<div>
			<h5>测试index key value</h5>
			<p v-for='(value,key,index) in items'>{{index}}.{{key}} :{{value}} </p>
			<p>只能用在对象中生效，数组无效</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				discount:'',
				total:'',
				items:[
					{ label : 'apple',  value :'10', discount:'0.5'},
					{ label : 'orange', value :'20', discount:'0.6'},
					{ label : 'banana', value :'30', discount:'0.7'},
					{ label : 'lemon',  value :'40', discount:'0.8'},
					{ label : 'blueberry',  value :'50', discount:'0.9'},
					{ label : 'pear',  value :'60', discount:'0.65'},
					{ label : 'peach',  value :'70', discount:'0.75'},	
					{ label : 'strawberry',  value :'80', discount:'0.95'},	
				],
				options:{
					name:'tom',
					age:'40',
					gender:'male',
					job:'teacher'
				}
			}
		},//data end

		methods:{
			click(item,index,key){

				this.name = item.label
				this.discount = item.discount
				this.total = item.discount * item.value

				//获取DOM
				let choseItem = document.getElementById(index)

				for(let i=0;i<this.items.length;i++){
					console.log(i)
					document.getElementById(i).style.backgroundColor = ''
				};
				choseItem.style.backgroundColor = '#0f0'
			},
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	.notes{
		padding: 1rem;
		text-align:left;
	}
	.clear{
		clear:both;
	}
	.fruits {
		width:10rem;
		margin: 1rem;
		padding: .5rem;
		border:1px solid #9E9C9C;
		float: left;
		cursor:pointer;
	}

</style>