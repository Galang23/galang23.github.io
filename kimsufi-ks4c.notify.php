<?php
ini_set('max_execution_time', 10); //300 seconds = 5 minutes
function httpget($address,$timeout=3){
	$context = stream_context_create(array(
		'http' => array(
			'timeout' => $timeout
		)
	)
);
return file_get_contents($address,0,$context);
}
while(true){
	$content = httpget('https://www.kimsufi.com/en/order/kimsufi.cgi?hard=162sk42',10);
	$content2 = httpget("https://127.0.0.1",10);
	if($content){
		if(strpos($content,'est invalide')==false){
			api_notify("[kimsufi]Appear! ","Time: " . date("Y-m-d-H:i",time()+46800),1,2);//Here should go your notify function
		}
	}else{
		if(strpos($content2,'est invalide') == true){
			api_notify("[kimsufi]Doesn't appear. Sorry :(! ", "Time: " . date("Y-m-d-H:i",time()+46800),1,2);//Here should go your notify function
		}
	}
sleep(60);
}
?>