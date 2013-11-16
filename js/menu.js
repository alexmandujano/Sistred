var control =0;
$(document).ready(function(){
	$('#menuiz').on("click",function(){
		if(control ==0){
			$("#menuface").animate({
				left:"0px"
			});
			$("#menuiz").animate({
				marginLeft:"210px"

			});
			control++;
		}else{
			$("#menuface").animate({
				left:"-200"

			}); 
			$("#menuiz").animate({
				marginLeft:"0px"

			});
			control--;
		}
	});
});