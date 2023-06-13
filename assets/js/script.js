$(window).on("load", function () {
	"use strict";

	$(".anchor-menu li:first-child a").addClass("active");
	$(".animated-section:first").addClass("section-visible");

	$(".anchor-menu li a, a.section-link").on("click", function () {
		$(".anchor-menu li a").removeClass("active");
		$(this).addClass("active");
		$(".animated-section").removeClass("section-visible");

		var activeTab = $(this).attr("href");
		$(activeTab).addClass("section-visible");
		return false;
	});

	if (window.location.hash) {
		$(".animated-section").removeClass("section-visible");
		$(window.location.hash).addClass("section-visible");
	} else {

	}

	$("#preloader").delay(400).fadeOut("slow");
	$(".site-wrapper").delay(400).fadeIn("slow");

});


$(function () {
	"use strict";

	$(".menu-icon button").on("click", function () {
		$("header.header, main.content").toggleClass("open");
	});

	$(".menu-icon button").on("click", function () {
		$("header.mobile-header").toggleClass("open");
		$(".menu-icon button span").toggleClass("open");
	});

	$("main.content").on("click", function () {
		$("header.header, main.content, header.mobile-header").removeClass("open");
		$(".menu-icon button span").removeClass("open");
	});

	$(".main-menu li a, .main-menu li").on("click", function () {
		$("header.header, main.content, header.mobile-header").removeClass("open");
		$(".menu-icon button span").removeClass("open");
	});

	var list = document.getElementsByClassName("data-bg-color");

	for (var i = 0; i < list.length; i++) {
		var bgcolor = list[i].getAttribute("data-bg-color");
		list[i].style.backgroundColor = "" + bgcolor + "";
	}

	var list = document.getElementsByClassName("data-color");

	for (var i = 0; i < list.length; i++) {
		var color = list[i].getAttribute("data-color");
		list[i].style.color = "" + color + "";
	}

	var list = document.getElementsByClassName("data-border-color");

	for (var i = 0; i < list.length; i++) {
		var border_color = list[i].getAttribute("data-border-color");
		list[i].style.borderColor = "" + border_color + "";
	}


	var list = document.getElementsByClassName("progress-bar");

	for (var i = 0; i < list.length; i++) {
		var barwidth = list[i].getAttribute("data-width");
		list[i].style.width = "" + barwidth + "%";
	}

	$(".submenu").before("<i class=\"ion-md-add switch\"></i>");

	$(".vertical-menu li i.switch").on("click", function () {
		var $submenu = $(this).next(".submenu");
		$submenu.slideToggle(300);
		$submenu.parent().toggleClass("openmenu");
	});


	$(".section-inner").each((index, element) => new SimpleBar(element), {autoHide: false});

});
