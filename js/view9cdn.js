function view(){
	var img = document.getElementById("9gagID").value;
	if(img.length  === 0) {
		document.getElementById("result").src = "https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png";
	} else {
		var image = "https://img-9gag-fun.9cache.com/photo/" + img + "_700b.jpg";
		//var gif =  "http://img-9gag-fun.9cache.com/photo/" + img + "_460sa.gif"; //gif is  deprecated. MP4 used instead.
		var vid =  "https://img-9gag-fun.9cache.com/photo/" + img + "_460svvp9.webm";
		document.getElementById("result").src = image;
		// document.getElementById("gif").src = gif; //GIF is deprecated. MP4 is not working. Use webm VP9.
		document.getElementById("vid").src = vid;
	}
}

function getQuery(field) {
	var regex = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var results = regex.exec(window.location.href);
	return results ? results[1] : results === 0;
}

function setPostID(){
	var PostID = getQuery("postID");
}
