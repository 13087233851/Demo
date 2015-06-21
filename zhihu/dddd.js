var getName = function(){
	return($.getJSON("./invite_panel.json",function(data){
		var getInvite = function()
		{
			var getInvite_name = function()
			{
				var name = new Array();
				for(i=0;i<=2;i++)
				{
					var invited_str = data.invited[i].name;
					name.push(invited_str);
				};
				return name;
			};
			var getRecom_name = function()
			{
				var recom_name = new Array();
				for(i=0;i<=3;i++){
					recom_name.push(data.recommended[i].name);
				};
				return recom_name;
			};
			return  getInvite_name().concat(getRecom_name());
		};
	}));
};


var getBio = function(){
	return($.getJSON("./invite_panel.json",function(data){
		var getInvite = function()
		{
			var getInvite_bio = function()
				{
					var invite_bio = new Array();
					for(i=0;i<=2;i++)
					{
						invite_bio.push(data.invited[i].bio);
					};
					return invite_bio;
				};
				var getRecom_bio = function(){
					var recom_bio = new Array();
					for(i=0;i<=3;i++)
					{
						recom_bio.push(data.recommended[i].bio);
					};
					return recom_bio;
				};
				return (getInvite_bio().concat(getRecom_bio()));
		};
	}));
};