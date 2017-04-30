<template>
	<section>
	<h4>scroll</h4>
	<hr>
	<div class="wrapper">
		<div class="left"></div>
		<div class="right"></div>
	</div>
	</section>
</template>

<style scoped>
	.wrapper{
		display: flex;
		width: 90%;
		height: 1000px;
		margin:50px auto;
		border:1px solid red;
		overflow: hidden;
		
	}
	.wrapper::-webkit-scroll-bar{
		display: none;
	}
	.left{
		overflow-y:scroll;
		-webkit-overflow-scrolling: touch;
		flex:0 0 150px;
		background:#E9ECEC;
	}
	.right{
		overflow-y:scroll;
		-webkit-overflow-scrolling: touch;
		flex:1;
		background: #8CF25F;
	}
</style>