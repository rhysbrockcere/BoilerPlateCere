/*
    JQuery 1.7+ does not support namespaced XML parsing such as returned from Ebase Webservices.
    Certainly it does not support it consistently amoungst browsers.
    
    An example of the previously correct syntax: $(xml).find("ebas\\:ROWS"); 
    
    This plug-in is a workaround for this (while performing consistently better than the previous method across browsers).
    It should be compatible with all versions of jQuery as it only uses basic functions.
    
    Use: $(xml).findNameSpacedXMLNode('ebas:ROWS');
    
    Add (as a Client Script) after the jQuery library and before something uses it.
*/
;
(function( $ )
{
    $.fn.findNameSpacedXMLNode = function(nameSpacedName) 
    {
        return this.find("*").filter(function()
                                     {
                                         return this.nodeName === nameSpacedName;
                                     });
    };
})( $ );