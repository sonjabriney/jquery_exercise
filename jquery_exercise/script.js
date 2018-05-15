console.log ("javascript here");

var index=1;

setInterval (function(){
	for (var i=2;i<8;i++){
		$("#cage img").eq(i).hide();
	}
	index=index+1;
	$("#cage img").eq(index).show();
	if (index==7) {
		index=2;
	}
},1000);
