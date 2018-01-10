<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <swiper :options="swiperOption" ref="mySwiper" dir="rtl" >
      <!-- slides -->
      <!--       <swiper-slide>I'm Slide 1</swiper-slide>
             <swiper-slide>I'm Slide 2</swiper-slide>
             <swiper-slide>I'm Slide 3</swiper-slide>
             <swiper-slide>I'm Slide 4</swiper-slide>
             <swiper-slide>I'm Slide 5</swiper-slide>
             <swiper-slide>I'm Slide 6</swiper-slide>
             <swiper-slide>I'm Slide 7</swiper-slide>-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <swiper-slide v-for="(item,index,key) in host_list" :key="index"><span>{{index}}</span></swiper-slide>
      <!--<swiper-slide v-for="(item,index,key) in swiperList" :key="index"><span>{{index}}</span></swiper-slide>-->
    </swiper>




  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        host_list:[1,2,3,4,5,6],
        swiperList:[1,2,3,4,5,6,7,8,9],
        swiperOption: {
          notNextTick: true,
          autoplay: {
          	delay: 1000
          },
          speed:1500,
          autoplay:true,
          slidesPerView: 5,
//          autoplayDisableOnInteraction:true,
          loop:true,
//        spaceBetween: 18,
//        prevButton:'.swiper-button-prev',
//        nextButton:'.swiper-button-next',
//        setWrapperSize :true,
          init: false
        },


      }
    },


    methods:{
      getDate(){
        var that=this;
        this.getResponse('hosts').then((res)=>{
          console.log(res.data,'结果');
          this.host_list=res.data.host_map;
          var result=res.data.host_map;
          var arr=Object.keys(result);
          console.log(arr);
          var len=arr.length;
          console.log(len);

          /*  if(this.swiper.swiperSlider.length)*/

//        this.swiper.autoplay.run();//这样子只能自动走一次，需要使用定时器来控制轮播

          if(len>5){
            console.log(1111111);
            console.log(this.swiper);
//              this.swiper.init();//初始化swiper
            //          this.swiper.autoplay.start();
            /* var timer=setInterval(()=>{
   //            this.swiper.autoplay.run();
   //            console.log(111);
   //            this.swiper.autoplay.start();

               console.log(that.mySwiper);
             },3000)*/
          }

        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
//  	this.swiper.init();
			var _this = this;
    	setTimeout(function(){
    		console.log(this)
    		_this.swiper.init()
    	}, 2000)
      /* if (this.swiperSlides.length < 10) {
         console.log(11111111111);
         console.log(this.swiper);
       }*/
//    this.mySwiper.slideTo(3, 1000, false)//这个是初始化滑动到指定位置，然后停止
//    this.getDate();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .swiper-slide{
    /*width: 50px;*/
    height: 50px;
    background-color: red;
    text-align: center;
  }
  .swiper-wrapper{
    /*display: flex;*/
    /*justify-content: center;*/
  }
</style>
