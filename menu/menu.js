var control =0;
$(document).ready(function(){
	$('#menu').on("click",function(){
		if(control ==0){
			$("#pagina").animate({
				marginLeft:"240px"
			});
			control++;
		}else{
			$("#pagina").animate({
				marginLeft:"0"
			}); 
			control--;
		}
	});
});