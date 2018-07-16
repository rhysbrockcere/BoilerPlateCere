function showPopup(employeeId, e)
{
  // Call the server - load employee details into the popup panel
  $eb.executeFunction('getEmployeeDetails', employeeId, true);
	
	// display the popup panel
	var moveLeft = 20;
	var moveDown = 10;
	$('div#popup').show()
	 .css('top', e.pageY + moveDown)
	 .css('left', e.pageX + moveLeft);
}

function hidePopup()
{
	$('div#popup').hide();
}