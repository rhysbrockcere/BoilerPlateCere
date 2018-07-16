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