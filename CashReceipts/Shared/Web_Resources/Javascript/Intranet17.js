
$(document).ready(function() {

	$('.pnlNestedDetail').hide();
		
	$('.btnToggleNestedTable').click(function(e) {
		e.preventDefault();
		$(this).closest('table').next('.pnlNestedDetail').slideToggle(500);
		var text = $(this).text();
  	$(this).text(text == "Show Details" ? "Hide Details" : "Show Details"); 				
	});


		$(".spTableGrid").each(function() { 			
			$(this).addClass("highlightableTable");
		});
		
		$('.highlightableTable td').bind( "mouseenter", function(evt) { 			
			$('*').removeClass( "highlightedCell" ); 			
			
			$( this).parent('tr').find("*:not(input, select, option, textarea)").each(function() {
				$(this).addClass("highlightedCell");
			});
		});
		
		$('.highlightableTable td').bind( "mouseleave", function(evt) { 		
			$('*').removeClass( "highlightedCell" );
		});


});

function testInput(input, regex){
	if(input.value && !regex.test(input.value)){
		$(input).addClass('error-field');
		$(input).closest(".fieldPanel").addClass('error-panel');
	}
	/* Otherwise, reset to normal */
	else{
		$(input).removeClass('error-field');
		$(input).closest(".fieldPanel").removeClass('error-field');
		$(input).closest(".fieldPanel").removeClass('error-panel');
	}
}

function dropDown() {
	$('select.chosen').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		width:'100%'
	});

	$('select.chosen-small').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		width:'120px'
	});

	$('select.chosen-medium').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		width:'200px'
	});

	$('select.chosen-large').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		width:'400px'
	});

	$('chosen-table-cell').chosen({
		search_contains: true,
		disable_search_threshold: 10,
		width:'400px'
	});
}

function highlightDropdowns() {
	//Reset first
	$('.chosen-container').each(function(i, obj) {
		$(this).removeClass('error-field');
	});
		
	//Find select controls with error-field class
	$('select.error-field').each(function(i, obj) {
		//Find the next div and apply the class to the DIV - this highlights the chosen dropdown
    $(this).next('.chosen-container').addClass('error-field');
	});
}

function highlightPriority() {
	var ctrl = $('#PriorityCombo');
	var selected = ctrl.find('option:selected').text();
	//var selected = $(this).text();
	//alert("Selected = " + selected);
	
	//Remove any previousley set classes before starting
	ctrl.nextAll('.chosen-container-single').removeClass('inputHighlight');
	ctrl.nextAll('.chosen-container-single').removeClass('inputWarning');
	
	//Change the colour of the dropdown depending on the text
	if (selected == 'High') {
		ctrl.nextAll('.chosen-container-single').addClass('inputHighlight');
	}
	else if (selected == 'Medium') {
		ctrl.nextAll('.chosen-container-single').addClass('inputWarning');
	}
}

/*
	//Vertical Tabs
  $( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );
*/	

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
	
/*	function datePicker() {
		$(':input.datePicker').datepicker({
			dateFormat: "dd/mm/yy",
			showOn: "both",
			buttonImage: "ebWebResource/Web_Resources/Images/ico_calendar.png",
			buttonImageOnly: true
		});
	}
*/
function datePicker() {
	$(':input.datePicker').datepicker({dateFormat: 'dd/mm/yy'});
}


function currency() {
	$('.currency').currency({
		region: 'GBP'
	});
}



//Disable the enter key action unless the user is in a text area.
$(document).keypress(function (e) { 
	if(e.which == 13 && e.target.nodeName != "TEXTAREA") return false; 
});


/*** jQuery Tabs ***
Create a cookie to store the selected tab so if the page is refreshed you are returned back to the same tab
This is performed on document ready so we have access to the DOM to retrieve the form name
(Need form name to create a seperate cookie for each page)
*****/

/* old cookie method
	
function tabs(){
	var formName = $("input[name=formid]").val();
	var tabCookieName = formName.trim().replace(/\//g,'_') + "-ui-tabs";
	$(function() {
    $( "#tabs" ).tabs({
    	//When tabs load check to see if cookie exists
    	active : (Cookies.get(tabCookieName) || 0),
    	activate : function( event, ui ) {
        var newIndex = ui.newTab.parent().children().index(ui.newTab);
        // my setup requires the custom path, yours may not
        Cookies.set(tabCookieName, newIndex);
    	}
    });
  });
};

 */
 
/* New HTML5 storage method */
function tabs(){
	var formName = $("input[name=formid]").val();
	var tabID = formName.trim().replace(/\//g,'_') + "-ui-tabs";
	$(function() {
    $( "#tabs" ).tabs({
    	//When tabs load check to see if cookie exists
    	active : (localStorage.getItem(tabID) || 0),
    	activate : function( event, ui ) {
        var newIndex = ui.newTab.parent().children().index(ui.newTab);
        // my setup requires the custom path, yours may not
        localStorage.setItem(tabID, newIndex);
    	}
    });
  });
};


function accordion() {
	var formName = $("input[name=formid]").val();
	var accordionID = formName.trim().replace(/\//g,'_') + "-ui-accordion";
  $(function() {
  	$( ".accordion" ).accordion({
   		heightStyle: "content",
   		collapsible: true,
   		activate: function( event, ui ) {
        //var newIndex = ui.options.active;
        var newIndex = $(this).accordion( "option", "active" )
        localStorage.setItem(accordionID, newIndex);
    	},
			active: + localStorage.getItem(accordionID)	
  	});
  });
}

/*** End jQuery Tabs****/

function WYSIWIG() {
	tinymce.remove();

	tinymce.init({
		selector: 'textarea.WYSIWIG',
		menubar: false,
		browser_spellcheck: true,
		contextmenu: false,
	  plugins: [
	    'advlist autolink lists link image charmap print preview anchor textcolor',
	    'searchreplace visualblocks code fullscreen',
	    'insertdatetime media table contextmenu paste code help'
	  ],
	  toolbar: 'undo redo |  styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link |help'
	  //content_css: [
	   // '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
	    //'//www.tinymce.com/css/codepen.min.css']
	});
 
}
	