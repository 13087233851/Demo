var starObj = function()
{
	this.x  ;
	this.y  ;
	this.picNo;
	this.timer;

	this.xSpd;
	this.ySpd;

	this.xSpd = Math.random()*3-1.5;
	this.ySpd = Math.random()*3-1.5;
}
starObj.prototype.init = function()//画很多张图的类  prototype
{
	this.x = Math.random()*600+100;
	this.y = Math.random()*300+150;
	this.picNo = Math.floor(Math.random()*7);//向上取整
	this.timer = 0;
}
starObj.prototype.draw = function()
{
	//save
	ctx.save();
	//globalAlpha  全局透明度
 	ctx.globalAlpha = life;
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	//img  sx,sy  swidth,sheight, x,y   width,height   
	//图片  图片上xy坐标   图片上的长宽  canvas的xy坐标   canvas上的宽度和高度
}
starObj.prototype.update = function()
{
	this.x +=this.xSpd * deltaTime * 0.003;
	this.y +=this.ySpd * deltaTime * 0.003;
	//如果超出了范围  重生
	//this.x   init
	if(this.x<100 || this.x>700)
	{
		this.init();
		return;
	}
	if(this.y<150 || this.y>450)
	{
		this.init();
		return;
	}
	this.timer +=deltaTime;
	if(this.timer>50)
	{
		this.picNo+=1;
		this.picNo %=7; 
		this.timer = 0;
	}
}
function drawStar()//画一张图的函数
{
	for(var i = 0;i<num;i++)
	{
		stars[i].update();
		stars[i].draw();

	}
}
function aliveUpdate()
{
	if(switchy)
	{
		life +=0.03 * deltaTime *0.05;
		if(life>1)
		{
			life = 1;
		}
	}
	else
	{
		life-=0.03 *deltaTime *0.05;
		if(life<0)
		{
			life = 0;
		}
	}
}
