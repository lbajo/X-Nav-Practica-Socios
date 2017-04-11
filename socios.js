var ref=false;
$(document).ready(function () {
	$.getJSON("timeline.json").done(function(data) {
		var n = data.length;
		for (i = 0; i < n; i++) {
			var user = data[i].user;
			var photo = data[i].photo;
			var title =data[i].title;
			var text = data[i].content;
			var date = data[i].date;
			var sep= "_____________________________________________________________________________________________";
			var cab ='<div align="center"> <p align="center">'+sep+'</p><h3>' + user +" ("+date+")"+"</h3><img id="+i +" src="+ photo + "><h4>" + title + "</h4><div>";
			var msg='<div align="center"><p></p>' + text + "</div>";
			$("#msgs").append(cab);
			$("#msgs").append(msg);
		}
		$(function() {
    		$("#msgs" ).accordion({
      			heightStyle: "content"
    		});
 		});
	});


	$.getJSON("myline.json").done(function(data) {
		var n = data.length;
		for (i = 0; i < n; i++) {
			var user = data[i].user;
			var photo = data[i].photo;
			var title =data[i].title;
			var text = data[i].content;
			var date = data[i].date;
			var sep= "_____________________________________________________________________________________________";
			var cab ='<div align="center"> <p align="center">'+sep+'</p><h3>' + user +" ("+date+")"+"</h3><img id="+i +" src="+ photo + "><h4>" + title + "</h4><div>";
			var msg='<div align="center"><p></p>' + text + "</div>";
			$("#my_msgs").append(cab);
			$("#my_msgs").append(msg);
		}
		$(function() {
    		$("#my_msgs" ).accordion({
      			heightStyle: "content"
    		});
 		});
	});


	$("#refresh").click(function(){
		if(!ref){
			alert("Tiene 3 mensajes nuevos");
			$.getJSON("update.json").done(function(data) {
				var n = data.length;
				for (i = 0; i < n; i++) {
					var user = data[i].user;
					var photo = data[i].photo;
					var title =data[i].title;
					var text = data[i].content;
					var date = data[i].date;
					var sep= "_____________________________________________________________________________________________";
					var cab ='<div align="center"> <p align="center">'+sep+'</p><h3>' + user +" ("+date+")"+"</h3><img id="+i +" src="+ photo + "><h4>" + title + "</h4><div>";
					var msg='<div align="center"><p></p>' + text + "</div>";
					$("#msgs_refresh").append(cab);
					$("#msgs_refresh").append(msg);
				}
				$(function() {
    				$("#msgs_refresh").accordion({
      					heightStyle: "content"
    				});
 				});
				ref=true;
			});
		}else{
			alert("Tiene 0 mensajes nuevos");
		}
	});
});