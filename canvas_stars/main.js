var can;
var ctx;
var girlPic = new Image();//女孩图片
var starPic = new Image();//星星图片
var num = 60;//星星个数
var stars = new Array();
var lastTime;//上一次的时间
var deltaTime;//两次时间的差

var switchy = false;
var life = 0;

function init()
{
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;
	document.addEventListener("mousemove",mousemove,false);
	girlPic.src = "images/girl.jpg";
	starPic.src = "images/star.png";
	for(var i = 0;i<num;i++)//六十个星星  每一个都是星星对象
	{
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}
	lastTime = Date.now();//获取当前时间的函数  毫秒数
	gameloop();
}
document.body.onload = init;

function gameloop()
{
	window.requestAnimFrame(gameloop);//重绘  给定的时间不是一个固定的值
	var now = Date.now();
	deltaTime = now-lastTime;
	lastTime = now;
	//console.log("小木爱上了冯月蓉");
	drawBackground();//
	drawGirl();
	drawStar();
	aliveUpdate();

	
}

//绘制背景函数
function drawBackground(){
	ctx.fillStyle = "#393550";//定义颜色
	ctx.fillRect(0,0,w,h);//画矩形的函数
}
//绘制女孩图片   
function drawGirl()
{
	ctx.drawImage(girlPic,100,150,600,300);//图片对象，x，y，宽  高

}
function mousemove(e)
{
	if(e.offsetX || e.layerX)
	{
		var px = e.offsetX ==undefined?e.layerX:e.offsetX;
		var py = e.offsety ==undefined?e.layerY:e.offsetY;

		if(px >100 && px<700 && py>150 && py<450)
		{
			switchy = true;
		}
		else
		{
			switchy = false;
		}
	}
}
