
$(document).ready(function() {
   // Assign autocomplete to our search fields
   $(".search").autocomplete({
			//var searchword = $('.search').val();

      // Define the source for the list of values to choose from
      source: function(request, response){
                 // Define the soap message to send to the Xi web service. The soap message can be cut and paste from theweb service test window.
                 var soapEnv = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
                       '<soap-env:Envelope xmlns:soap-env="http://www.w3.org/2003/05/soap-envelope">' +
                       '<soap-env:Body>' +
                       '<ebas:Request xmlns:ebas="http://www.ebasetech.com">' +
                       // pick up the search field value
                       '<ebas:SEARCHWORD>' + $('.search').val() + '</ebas:SEARCHWORD>' +
                       '</ebas:Request>' +
                       '</soap-env:Body>' +
                       '</soap-env:Envelope>';
                 // Define web service URL, use relative address of the Xi server
                 var wsURL = "http://eformsdev4.ceredigion.gov.uk:3030/ufs/integration/crmGetAlias";
                 // call a web service using jQuery ajax
                 $.ajax({
                    // The URL can also be found from the web service test window
                    url : wsURL,					
                    type : "POST",
                    dataType : "xml",
                    data : soapEnv,
                    // On successfully calling to the web service parse the returned XML response document to create an item object of properties and associated values.
                    // Autocomplete uses label property values to create the list that drops down, and value properties to be the value that gets put into
                    // the search field when you choose from the list. In our example we use the organisation's name for both.
                    // Our web service also returns the organisation's ID value so we create an additional property called orgId to hold those values.
                    // Watchouts: note the \\ to escape the : in the jQuery find. This is a workaround for later versions of the jQuery find() method not handling XML nodenames
                    //            containg namespaces.
  			            success: function(xml, status, jqXHR) {
				                        response( $(xml).findNameSpacedXMLNode("ebas:RESULTS").map(function(item){ 
					                         return {
						                          label: $(this).findNameSpacedXMLNode("ebas:ALIAS_EN").text(),
						                        	value: $(this).findNameSpacedXMLNode("ebas:ALIAS_ID").text(),
						                          categoryId: $(this).findNameSpacedXMLNode("ebas:CATEGORY_ID").text()
					                         }
				                     }));},
                    // success: ajSuccess,
                    // the ajax call failed so respond in some way
                    failure : function() {
                                 alert($(xml).text());
                              },
                    contentType : "text/xml; charset=\"utf-8\""
                 });
	            },
      // Stuff to when the user selects from the drop down list of matched values. In our example we just pick up the value of the orgId property (set above when the XML
      // response document was parsed during the ajax call) and put in in the form field with an ID locator orgId. 
      select: function( event, ui ) {
								$("#alias_id").val(ui.item.value);
								$(".search").val(ui.item.label);
								$(".cmdSearch").click();
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