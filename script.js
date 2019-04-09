function RandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColor() {
	var acolor = RandomColor();
	$("a").css("color",acolor);
	$(".acolor").html(acolor);
	var bgcolor = RandomColor();
	$(".bg").css("background-color",bgcolor);
	$(".bgcolor").html(bgcolor);
	var pcolor = RandomColor();
	$("p").css("color",pcolor);
	$(".pcolor").html(pcolor);
	var h1color = RandomColor();
	$("h1").css("color",h1color);
	$(".h1color").html(h1color);
	var h2color = RandomColor();
	$("h2").css("color",h2color);
	$(".h2color").html(h2color);
}

$(document).ready(
	function(){
		setRandomColor();
		html2canvas(document.body).then(canvas => {
			$("#capture").empty();
			$("#capture").html(canvas);
			$("#capture").css("border","none");
		});
	});