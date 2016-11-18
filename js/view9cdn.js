var responseHTML = document.createElement("body");

function getBody(content) 
{
   test = content.toLowerCase();    // to eliminate case sensitivity
   var x = test.indexOf("<body");
   if(x == -1) return "";

   x = test.indexOf(">", x);
   if(x == -1) return "";

   var y = test.lastIndexOf("</body>");
   if(y == -1) y = test.lastIndexOf("</html>");
   if(y == -1) y = content.length;    // If no HTML then just grab everything till end

   return content.slice(x + 1, y);   
} 

function loadHTML(url, fun, storage, param)
{
	var xhr = createXHR();
	xhr.onreadystatechange=function()
	{ 
		if(xhr.readyState == 4)
		{
			//if(xhr.status == 200)
			{
				storage.innerHTML = getBody(xhr.responseText);
				fun(storage, param);
			}
		} 
	}; 

	xhr.open("GET", url , true);
	xhr.send(null); 

} 

function view(){
	var img = document.getElementById("9gagID").value;
	var image = "http://img-9gag-fun.9cache.com/photo/" + img + "_700b.jpg";
	var gif =  "http://img-9gag-fun.9cache.com/photo/" + img + "_460sa.gif";
	
	document.getElementById("result").src = image;
	document.getElementById("gif").src = gif;
}