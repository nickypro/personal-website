function menu() {
document.writeln('<li> <a href="tp.html"> 	TCD TP	</a></li>');
document.writeln('<li> <a href="posters.html"> 	Posters	</a></li>');
document.writeln(" ");
document.writeln(" ");
document.writeln(" ");
document.writeln(" ");
document.writeln(" ");
document.writeln(" ");
document.writeln(" ");
}

function styl() {
	document.writeln('<link rel="icon" sizes="192x192" href="pic/nickyTP.png">');
}


function simpleLink() {
	document.writeln('');
}


function swapImage( imageNameStart , numberOfImages ) {
	document.getElementByID( imageNameStart ).src("pic/", imageNameStart, numberOfImages)
}