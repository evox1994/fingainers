$(document).ready(function(){

	function liNumber(){
		var i = 0;
		$('.b-3-list .li-name').find('span b').each(function(){
			i++;
			$(this).text(i);
		});
	}
	liNumber();

});