
show();//鼠标经过退出显示隐藏图片的方法
setClick();//点击后定位方法


//图片轮播
	 var CurrentHotScreen = 0 ;
      function setHotQueryList(screen){
        var MaxScreen = 5 ;
        if (screen >= MaxScreen) {
          screen = 0 ;
        }
        cleanallstyle();
        document.getElementById("focus_"+screen).style.background = "red" ;
        for (i=0;i<MaxScreen;i++) {
        document.getElementById("switch_"+i).style.display = "none" ;
         document.getElementById("p_"+i).style.display = "none" ;
        }
        document.getElementById("p_"+screen).style.display = "block" ;
        document.getElementById("switch_"+screen).style.display = "block" ;

        CurrentHotScreen = screen ;
      }
      function refreshHotQuery(){
        refreshHotQueryTimer = null;
        setHotQueryList(CurrentHotScreen+1);
        refreshHotQueryTimer = setTimeout('refreshHotQuery();', 2000);
      }

      function cleanallstyle() {
				for (i=0;i<5;i++) {
					document.getElementById("focus_"+i).style.background = "#ccccff" ;
				}
			}
		//	function setClick() {
			//	clearTimeout(refreshHotQueryTimer);
			//}
		  var refreshHotQueryTimer = null ;
		  setHotQueryList(CurrentHotScreen);
		  refreshHotQueryTimer = setTimeout('refreshHotQuery();', 2000);
      


//点击后停止播放 
      function setClick()
      {
          for(i=0;i<5;i++)
          {
            change(i);
          }
          function change(i)
          {
             var thing = document.getElementById("focus_"+i);
             thing.onclick = function()
             {
                clearTimeout(refreshHotQueryTimer);
                setHotQueryList(i);
                refreshHotQueryTimer = setTimeout('refreshHotQuery();', 1000);
             }
          }
      }






function show()//鼠标经过事件和推出事件模块响应
{

  for(i=0;i<5;i++)
  {
    change(i);
  }
  function change(i)
    {
      var d = document.getElementById("div_"+i);
      d.onmouseover = function(){
        document.getElementById("focus_img_"+i).style.display = "block";
      }
      d.onmouseout = function(){
        document.getElementById("focus_img_"+i).style.display = "none";
      }
    }
}



