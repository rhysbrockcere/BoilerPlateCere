/* -------------------------------------
	Bind the jQuery Treeview to an 
	Ebase panel with an ID of navigation
--------------------------------------*/
$(document).ready(function(){
   $("#navigation").treeview({
	    persist: "location",
		  collapsed: true,
		  unique: true
	 });
});

/* --------------------------------------
	When an entry on the tree is clicked
	populate the form fields
 --------------------------------------*/
function setNode(parentId,childId,parentName,childName){
	 $('.parentId').val(parentId);
	 $('.childId').val(childId);
	 $('.parentName').val(parentName);
	 $('.parentNameText').text(parentName).css("color", "red");
	 $('.childName').val(childName);
	 $('.childNameText').text(childName).css("color", "red");
}