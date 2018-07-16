if(!com) var com={};
if(!com.ebasetech) com.ebasetech={};
if(!com.ebasetech.template) com.ebasetech.template={};


$(document).ready(function() {
	$(".noteShow").on( "click", function(e) {
		$(this).closest('div').find(".help-box" ).slideToggle(); 
		e.preventDefault();
	});

	/*$(".hide").hide();*/
	
	$(".toggleTitle").each(function() {
		$(this).closest('tbody').find('tr').last().hide();
	});

	$('td.toggleTitle').click(function(e) {
		var nextRow = $(this).closest('tr').next('tr').find(".panel").first();
		nextRow.slideToggle(500);
		
		if ($(this).hasClass('DOWN')){
			$(this).removeClass('DOWN');
		}
		else {
			$(this).addClass('DOWN');
		}
		e.preventDefault();
	});

/*
	$(".expandRow").each(function() {
		$(this).closest('tbody').find('tr').last().hide();
	});
*/

	$('.expandPanel').click(function(e) {
		
		$(this).next(".contentPanel").slideToggle(500);
		
		if ($(this).hasClass('DOWN')){
			$(this).removeClass('DOWN');
		}
		else {
			$(this).addClass('DOWN');
		}
		e.preventDefault();
	});

	$('.btnToggleNestedTable').click(function(e) {
		$(this).closest('table').next('.pnlNestedDetail').slideToggle(500);
		var text = $(this).text();
  	$(this).text(text == "Show Details" ? "Hide Details" : "Show Details"); 
		e.preventDefault();
	});

});

com.ebasetech.template.highlightTableRows = function()
{
	$(".tableHighlight").each(function() 
	{ 		
		var innerTable = $(this).find('[class*=tableContent]'); 		
		$(innerTable).addClass("highlightableTable");
	});
	
	$('.highlightableTable td').bind( "mouseenter", function(evt) 		
	{ 			
		$('*').removeClass( "highlightedCell" ); 			
		
		$( this).parent('tr').find("*:not(input, select, option, textarea)").each(function()
		{
			$(this).addClass("highlightedCell");
		});
	});
	
	$('.highlightableTable td').bind( "mouseleave", function(evt) 	
	{ 		
		$('*').removeClass( "highlightedCell" );
	});

}

function testInput(input, regex){
	if(input.value && !regex.test(input.value)){
		$(input).addClass('error-field');
		$(input).closest(".fieldPanel").addClass('error-field');
	}
	/* Otherwise, reset to normal */
	else{
		$(input).removeClass('error-field');
		$(input).closest(".fieldPanel").removeClass('error-field');
	}
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

function datepicker() {
	$(':input.datepicker').datepicker({dateFormat: 'dd/mm/yy'});
}