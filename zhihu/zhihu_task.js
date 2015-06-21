var clicknumber=0;
var a_clicknumber = true;//用来标志收起还是展开
var num=0;//邀请的人数
var self=this;
var  a=document.getElementById("a");

a.onclick=function()
{
	if(a_clicknumber==true)
	{
		for(k=4;k<8;k++)
			{	
				var id="id_items"+(k);
				var conten=document.getElementById(id);
				conten.style.display="block";
				document.getElementById("a").innerHTML="no";
			};
		self.a_clicknumber =false;
	}
	else 
	{
		for(k=4;k<8;k++)
		{	
			var id="id_items"+(k);
			var conten=document.getElementById(id);
			conten.style.display="none";
			document.getElementById("a").innerHTML = "yes";
			self.a_clicknumber =true;
		};
	};
};


	
	
window.onload=function()
{
	for(i=0;i<8;i++)
	{	
		var g=i-3;
		//alert(jsonword.invited[i-1].name);
		var number="s_"+i;
		var number_bottom="i_"+i;
		var span=document.getElementById(number);
		var span_bottom = document.getElementById(number_bottom);
		if(i<3)
		{
			span.innerHTML="<span>"+jsonword.invited[i].name+" <span>";
			span_bottom.innerHTML="<span>"+jsonword.invited[i].slug+" <span>";
		}
		else
		{
			span.innerHTML="<span>"+jsonword.recommended[g].name+"</span>";
		};
	};
};

var setClick = function()
{
	for(d=0;d<=7;d++)
	{	
		var button=document.getElementById("button_"+d);
		button.onclick=function()
		{
			this.style.color="white";
			if(this.getAttribute("value")=="邀请回答")
			{
				num++;
				this.style.background = "#ccccdd";
				this.setAttribute("value","取消邀请");
			}
			else
			{
				if(num<=0)
					{num=0}else{num--};
				this.style.background = "blue";
				this.setAttribute("value","邀请回答");
			};
			var p=document.getElementById("p_first");
			p.innerHTML="你已经邀请了"+num+"人";
		};
	};	
};


setClick();
	
