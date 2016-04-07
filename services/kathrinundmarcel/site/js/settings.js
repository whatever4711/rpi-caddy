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
