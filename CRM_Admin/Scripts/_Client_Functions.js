
/** Category Autocomplete **/
function filterCategories(request, response) {
	var categories = $eb.executeFunction("getSubCategories", request.term);
	response(categories);
}