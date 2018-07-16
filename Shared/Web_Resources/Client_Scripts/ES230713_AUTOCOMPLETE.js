$(document).ready(function() {   
   // Assign autocomplete to our search fields
   $("#searchWord").autocomplete({
      // Define the source for the list of values to choose from
      source: $eb.executeFunction('search', $('#searchWord').val()),
      // Stuff to when the user selects from the drop down list of matched values. In our example we just pick up the value of the orgId property
      // returned from our function call and put in in the form field with an ID locator orgId. 
      select: function( event, ui ) {
                 $("#orgId").val(ui.item.orgId);																								
	            },
      // Stuff to do when the drop down list of matched values appears. In our example we add/remove some styling.		
	    open: function() {
               $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
	          },
      // Stuff to do when the drop down list of matched values disappears. Again, in our example we add/remove some styling.		
	    close: function() {
                $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
	           }			
   });
});