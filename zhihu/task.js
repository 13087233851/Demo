




//创建一个函数  用来获取json数据

/*var getJson = function()
{
	function loadJson(url,myfunc)
	{
		var xml = null;
		if(window.XMLHttpRequest)
		{
			xml = new XMLHttpRequest();
		}
		else
		{
			xml = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xml.onreadystatechange = myfunc;
		xml.open("GET",url,true);
		xml.send();
	};

	function myFunction(){
		loadJson("invite_panel.json",function(){
			if(xml.readyState ==4 && xml.status ==200)
				{
					window["result"] = xml.responseText;
				};
		});
	};
	alert(result);
};

