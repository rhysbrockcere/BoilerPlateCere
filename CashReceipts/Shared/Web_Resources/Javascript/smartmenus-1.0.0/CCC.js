// JavaScript Document

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
	});
}

function currency() {
	$('.currency').currency({
		region: 'GBP'
	});
}

function dropDown(a) {
	$(':input.chosen-select').chosen({
		search_contains: true,
		allow_single_deselect: true,
		disable_search_threshold: a
	});
}

function datePicker() {
	$(".datePicker").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "dd/mm/yy",
		yearRange: "-100:+5"
	});
}

function mainMenu() {
	$('#main-menu').smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8
	});
}

// Smart Menu

$(function() {
	var $hiddenInputs = $("#NavPanel input").detach();
	$("#NavPanel").append($hiddenInputs);
	$("#NavPanel").find("*").wrapAll('<ul id="main-menu" class="sm sm-clean"></ul>');
	
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

$(function() {
	var $hiddenInputs = $("#UserMenu input").detach();
	$("#UserMenu").append($hiddenInputs);
	$("#UserMenu").find("*").wrapAll('<ul id="user-menu" class="sm sm-clean"></ul>');
	
    $(".TestDiv a").each(function() {
        if ($(this).hasClass("menu-top")) {
            $(this).wrapAll("<li class='mnuTop'></li>");
        } else {
            var $parent = $(this).prev("li");
            var $element = $(this).detach();
            $parent.append($element);
            $(this).wrap('<li></li>');
        }
    });
    $('#user-menu li a').each(function() {
        $(this).nextUntil('a').wrapAll('<ul>');
    });
});


/*
$(function() {
    $(".TestDiv input").detach(), $(".TestDiv a").wrapAll('<ul id="main-menu" class="sm sm-clean"></ul>').each(function() {
        $(this).hasClass("menu-top") ? $(this).wrapAll("<li class='mnuTop'></li>") : ($(this).prev("li").append($(this).detach()), $(this).wrap("<li></li>"))
    }), $("#main-menu li a").each(function() {
        $(this).nextUntil("a").wrapAll("<ul>")
    })
});
*/

$(function() {
  $('#main-menu').smartmenus();
});

$(function() {
  $('#user-menu').smartmenus();
});