function RandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function RandomPicture(){
	var images = ['cat','butterfly','car','moto','baby','bike','football'];
	var item = images[Math.floor(Math.random()*images.length)];
	$(".imgfile").text("https://tumofreduclips.github.io/BasicOfHTMLCSS_TaskGenerator/img/"+item+".png");

	return (item);
}

function setRandomColor() {
	var acolor = RandomColor();
	$("a").css("color",acolor);
	$(".acolor").html(acolor);

	var linkbgcolor = RandomColor();
	$("a").css("background-color",linkbgcolor);
	$(".linkbgcolor").html(linkbgcolor);

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
		$("img").attr("src","img/"+RandomPicture()+".png");
		$("img").css("width","300px");
		html2canvas(document.body).then(canvas => {
			$("#capture").empty();
			$("body").html(canvas);
		});
	});