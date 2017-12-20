var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var canvasWidth = $('#canvas').width();
console.log(canvasWidth)
var canvasHeight = $('#canvas').height();
canvas.width = canvasWidth * 2;
canvas.height = canvasHeight * 2;
ctx.scale(2, 2)

//滑板
var img_slide = new Image();
img_slide.src = '../../img/hg_silde.png'
var bigSlideHeight = 50,
		bigSlideY = canvasHeight-bigSlideHeight - 10,
		smallSlideHeight = 25,
		smallSlideY = canvasHeight-bigSlideHeight-smallSlideHeight - 30;


//钩子
var img_hook = new Image()
img_hook.src = '../../img/hg_hook.png'
img_hook.onload = function(){
	console.log(this.height)
}


//钩子对象
var hook = {
	width: 83,
	height: 85,
	allHeight: 367,
	y: -367+50+85+10,
	originY: -367+50+85+10,
	x: (canvasWidth - 83)/2,
	canGo: false, //是否下去
	canBack: false, //是否回来
	index: 0, //0是收起来，1是张开
	draw: function(){
		ctx.drawImage(img_hook, this.width*this.index, 0, this.width, this.allHeight, this.x, this.y, this.width, this.allHeight)
	},
	go: function(){
		if(this.canGo){
			this.y+=2;
			//下到临界点
			if(this.y >= (smallSlideY+25 - this.allHeight)){
				this.catchDoll()
				
				this.canGo = false;
			}
			this.draw()
		}
		
	},
	catchDoll: function(){
		this.index = 0 
		console.log('判断拉不拉')
		
		this.canBack = true;
	},
	back: function(){
		if(this.canBack){
			this.y -= 2;
			if(this.y <= this.originY){
				this.canBack = false
			}
			
		}
	}
}


//点击下爪
$(".btn_go").click(function(){
	hook.canGo = true;//可以动
	hook.index = 1;
})

drawStaticEle()
function drawStaticEle(){
	//滑板
	ctx.drawImage(img_slide, 0, bigSlideY, canvasWidth, bigSlideHeight)
	ctx.drawImage(img_slide, 0, smallSlideY, canvasWidth, smallSlideHeight)

	//钩子
	hook.draw()
	
}

startGame()
//幀動畫
function startGame(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight)
	drawStaticEle()	
	hook.go()
	hook.back()
	
	
	window.requestAnimationFrame(startGame)
}
