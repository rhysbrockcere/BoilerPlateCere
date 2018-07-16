if(!com) var com={};
if(!com.ebasetech) com.ebasetech={};
if(!com.ebasetech.template) com.ebasetech.template={};
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


	$(".noteShow").bind( "click", function(evt)
	{
			$(this).closest('div').find(".help-box" ).toggle(); 
			evt.preventDefault();
		}); 

}