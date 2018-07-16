// JavaScript Document

$(document).ready(function() {
	// Smart Menu
	$(function () {
		$(function() {
			var $hiddenInputs = $("#NavPanel input").detach();
			$("#NavPanel").append($hiddenInputs);
			$("#NavPanel").find("*").wrapAll('<ul id="main-menu" class="sm sm-blue"></ul>');
			
			$("#NavPanel a").each(function() {
				if ($(this).hasClass("menu-top")) {
					$(this).wrapAll("<li class='mnuTop'></li>");
				} else {
					var $parent = $(this).prev("li");
					var $element = $(this).detach();
					$parent.append($element);
					$(this).wrap('<li></li>');
				}
			});
			$('#main-menu li a').each(function() {
				$(this).nextUntil('a').wrapAll('<ul>');
			});
		});
	
	});
});

function smartMenu() {
	$('#main-menu').smartmenus();
}
	
function toolTip() {
	var position = {
		my: 'left center',
		at: 'right+15 center'
	};
	position.collision = 'none';
	$(".spHelpStyle").each(function() {
		$(this).prev().find(":input").prop("title", $(this).find("input").val());
		$(this).prev().find(":input").tooltip();
		$(this).prev().find(':input[value="right"]').trigger('change');
		$(this).prev().find(":input").tooltip('option', 'position', position);
		$(this).prev().find(":input").tooltip('option', 'tooltipClass', 'right');
		$(this).find(":input").css("display", "none");
	})
}

function dropDown() {
	$(':input.chosen-select').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		allow_single_deselect: true
	});
}

function spinner(type) {
	switch (type) {
		case 'currency':
			$(":input.currencySpinner").spinner({
				max: 100,
				min: 0,
				numberFormat: "C",
				step: 0.01
			});
			break;
		default:
			$(":input.spinner").spinner({
				max: 100,
				min: 0
			});
	}
}

function datePicker() {
	$(':input.datePicker').datepicker({
		dateFormat: "dd/mm/yy",
		showOn: "both",
		buttonImage: "ebWebResource/Web_Resources/Images/ico_calendar.png",
		buttonImageOnly: true
	});
}


function currency() {
	$('.currency').currency({
		region: 'GBP'
	});
}
