window.alert("starting js.js");

$(document).ready(function() { 
						   
	var hash = window.location.hash.substr(1);
	var i=1;
	var href = $('.button').each(function(){ 
		var href = $(this).attr('href');
	//	window.alert("button" + i+" = "+href);
		i +=1;
		if(hash==href.substr(0,href.length-5)){ 
			var toLoadm = hash+'.html #content';
			window.alert(" toLoad = " + toLoadm);
			$('#content').load(toLoadm)
		}										
	}); 
window.alert("endOf ready");

	$('.button').click(function(){ 
	
		var toLoad = $(this).attr('href')+' #content';
		window.alert(toLoad);		
//				$('#content').hide('fast',loadContent);
		window.alert("done!");
		$('#content').load(toLoad);
	//	$(".side").hide();
		// '',function(responseTxt, statusTxt, xhr){
		
    	//	    if(statusTxt == "success")
      //	      window.alert("External content loaded successfully!");
    	//	    if(statusTxt == "error")
    	//	        window.alert("Error: " + xhr.status + ": " + xhr.statusText)
   	//	 }); 
		
		return false;
		
	}); 
	

});