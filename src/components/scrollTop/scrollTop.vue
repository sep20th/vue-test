<template>
	<div>
		<h4>scrollTop</h4>
		<hr>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consectetur quis dicta delectus voluptatem recusandae ea error, repellat ex fugiat beatae non totam nobis fugit aliquid laborum dolorem laboriosam quod.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consectetur quis dicta delectus voluptatem recusandae ea error, repellat ex fugiat beatae non totam nobis fugit aliquid laborum dolorem laboriosam quod.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consectetur quis dicta delectus voluptatem recusandae ea error, repellat ex fugiat beatae non totam nobis fugit aliquid laborum dolorem laboriosam quod.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consectetur quis dicta delectus voluptatem recusandae ea error, repellat ex fugiat beatae non totam nobis fugit aliquid laborum dolorem laboriosam quod.</p>
		<hr>
		<div class="foo">
			<router-link to = '/ScrollTopA'>
				<span class='scroll-item scroll-A' @click='scollA'>Scroll-A</span>
			</router-link>
			<router-link to='ScrollTopB'>
				<span class='scroll-item scroll-B' @click="scrollB">Scroll-B</span>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		methods:{
			scollA(){
				this.$router.push('/ScrollTopA')
				let F = document.getElementsByClassName('foo')[0]
				let top = F.offsetTop
				window.scroll(0,top); 
			},

			scrollB(){
				let F = document.getElementsByClassName('foo')[0]
				// let B = document.getElementsByClassName('scroll-B')[0]
				let top = F.offsetTop
				window.scroll(0,top)
			}
		}
	}
	
</script>
<style scoped>
	p{
		display: inline-block;
		width:300px;
		height: 600px;
		border:1px solid #666;
		padding: 1rem; 
		margin: 1rem
	}
	.foo{
		width: 500px;
		height: 50px;
		line-height: 50px;
		border:1px solid #888;
		margin: 1rem auto;
	}
	.scroll-item{
		display:inline-block;
		padding: 0 1rem;
	}
</style>