<template>
 <div class="footer">
   <ul>
   	 <li>首页</li>
   	 <li>我的</li>
   	 <li>详情</li>
   	 <li>设置</li>
   </ul>
 </div>
</template> 
<style>
	.footer{
		position: fixed;
		left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 55px;
	    background:#CCCCCC;
	}
	.footer ul{
		width: 100%;
		height: 100%;
		display: -webkit-box;
	}
	.footer ul li{
		-webkit-box-flex: 1;
		display: -webkit-box;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	}
	
</style>