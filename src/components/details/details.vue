<template>
  <div class="good">
      <headerHtml :text="text"></headerHtml>
      <div class="swiperImg">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="food in data.goods_photo">
                  <img :src="food.goods_main_url" >
                </div>
               
              </div>
          </div>
      </div>
      <div>
        <h1>{{data.goods_name}}</h1>
        <router-link to="/login">
          登录
        </router-link>
      </div>
  </div>
</template>  
<script type="text/ecmascript-6">
 import jquery from 'jquery';
 import headerHtml from '../header/header.vue';
 import swiper from '../../../static/js/swiper.min.js';
  export default {
    data() {
       return {
          scroll: '',
          data:"",
          text:"首页"
       };
    },
    beforeMount(){
     console.log(this.$el) 
    },
    updated(){
      console.log(this.data)
    },
    mounted(){
      let that = this;
      jquery.ajax({
        url:"https://ywapi.youngworld.com.cn/server.php/product_details",
        type:"post",
        data:{
          goods_id:605
        },
        dataType:"json",
        success:function(e){
          that.data = e.data;
          that.$nextTick(function(){
            let mySwiper = new swiper('.swiper-container', {
                     autoplay: 5000,//可选选项，自动滑动
               })
          })
        }
      });
     
      
    },
    components: {
     headerHtml
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "/static/css/swiper.min.css";
   .good{
   	  height: 1000px;
   }
   .swiperImg{
    width: 100%;
    padding-top: 45px;
    overflow: hidden;
   }
   .swiperImg img{
        display: block;
        width: 100%;
        height: auto;
   }
</style>