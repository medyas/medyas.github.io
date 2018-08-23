var hidden = true;
var browser = navigator.userAgent.toLowerCase();
console.log(browser);
var mobile = browser.indexOf('chrome') > -1 ? (browser.indexOf("mobile")>-1 ? true :false) : false;
console.log(mobile);


$( document ).ready(function() {
	if(mobile && document.documentElement.clientWidth <= 767) {
		$("#main-menu").css({"left": "94%"});
	}

	$("#show-menu").click(function() {
		if(hidden) {
			$("#main-menu #menu").css({"visibility":"visible"});
			$("#show-menu").css({"visibility":"hidden"});
			hidden = false;
		}
		else {
			$("#main-menu #menu").css({"visibility":"hidden"});
			$("#show-menu").css({"visibility":"visible"});
			hidden = true;
		}
	});

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    $("#main-menu ul").css({"background-color": "#02cbbc"});
	    $("#main-menu span").css({"background-color": "#02cbbc", "border-color": "#02cbbc transparent transparent #02cbbc"});
	    $("#main-menu #custom").css({"border-color": "#02cbbc transparent transparent #02cbbc"});
	  } else {
	    $("#main-menu ul").css({"background-color": "#14a5d0"});
	    $("#main-menu span").css({"background-color": "#14a5d0", "border-color": "#14a5d0 transparent transparent #14a5d0"});
	    $("#main-menu #custom").css({"border-color": "#14a5d0 transparent transparent #14a5d0"});
	  }
	} 

	$("#main-menu span").click(function() {
		if(hidden) {
				$("#show-menu").css({"visibility":"visible"});
			}
			else {
				$("#show-menu").css({"visibility":"visible"});
				$("#main-menu #menu").css({"visibility":"hidden"});
				hidden = true;
			}
	})
});