//part_3  照片轮换

var movePhoto = function(){
	var num = 3;
	for(i=2;i<6;i++)
		{
			var div_photo = document.getElementById("photo_"+i);//清除所有样式编程none
			div_photo.style.display = "none";
		}
	var btn_1 = document.getElementById("part_3_left");
	var btn_2 = document.getElementById("part_3_right");
	var pic =  document.getElementById("photo");
	document.getElementById("part_3_"+num).style.background = "#FF33cc";
	btn_2.onclick = function(){
		num+=1;
		if(num>=6)
		{
			num = 1;
		}
		for(i=1;i<6;i++)
		{
			document.getElementById("part_3_"+i).style.background = "#666FFF";
			var div_photo = document.getElementById("photo_"+i);
			div_photo.style.display = "none";
		}
		document.getElementById("photo_"+num).style.display = "block";
		document.getElementById("part_3_"+num).style.background = "#FF33cc";
	}

	btn_1.onclick = function(){
		num-=1;
		if(num<1)
		{
			num = 5;
		}
		for(i=1;i<6;i++)
		{
			document.getElementById("part_3_"+i).style.background = "#666FFF";
			var div_photo = document.getElementById("photo_"+i);
			div_photo.style.display = "none";
		}
		document.getElementById("photo_"+num).style.display = "block";
		document.getElementById("part_3_"+num).style.background = "#FF33cc";
	}

	
}
this.movePhoto();

