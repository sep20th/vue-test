<template>
	<section>
	<h4>scroll</h4>
	<hr>
	<div class="wrapper">
		<div class="left"></div>
		<div class="right">
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipolor sit etur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur , harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
			<li>Lorem ipsumor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dxit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipolor sit etur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur , harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
			<li>Lorem ipsumor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, harum.</li>
			<li>Lorem ipsum dxit amet, consectetur adipisicing elit. Iusto, harum.</li>
		</div>
	</div>
	</section>
</template>

<style scoped>
li{
	line-height: 80px;
}
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
		flex:0 0 50px;
		background:#E9ECEC;
	}
	.right{
		overflow-y:scroll;
		-webkit-overflow-scrolling: touch;
		flex:1;
		background: #8CF25F;
	}
</style>