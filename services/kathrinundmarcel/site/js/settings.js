/* http://keith-wood.name/countdown.html
   German initialisation for the jQuery countdown extension
   Written by Samuel Wulf. */
(function($) {
	$.countdown.regionalOptions['de'] = {
		labels: ['Jahre', 'Monate', 'Wochen', 'Tage', 'Stunden', 'Minuten', 'Sekunden'],
		labels1: ['Jahr', 'Monat', 'Woche', 'Tag', 'Stunde', 'Minute', 'Sekunde'],
		compactLabels: ['J', 'M', 'W', 'T'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['de']);
})(jQuery);

$(function () {
  	$('#example').countdown({until: new Date(2016, 11-1, 4)});
	//Replace above date with your own, to find out more visit http://keith-wood.name/countdown.html
});

$(".impressum").click(function () {
    $("#container").html("impressum.html");
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76121515-1', 'auto');
ga('send', 'pageview');

$(function () {
	$(".seperator").html("&hearts;&emsp;&hearts;&emsp;&hearts;&emsp;&hearts;&emsp;&hearts;");
});

function modal(elem){
	$('.modal-body').empty();
	var title = elem.alt;
	$('.modal-title').html(title);
	$($(elem).parents('div').html()).attr('onclick','').css({"cursor":"default"}).appendTo('.modal-body');
	$('#myModal').modal({show:true});
}
