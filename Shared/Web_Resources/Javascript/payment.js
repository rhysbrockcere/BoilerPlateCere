jQuery(document).ready(function($)
{
	var errorcode = $("#errorcode").val();
	if (errorcode == 99)
	{
		$("#errorcode").val(0);
		$("#statusCancel").click();
	}
	var status = $("#status").val();
	if (status !== "")
	{
		$("#resXml").val(status);
		$("#status").val("");
		$("#statusButton").click();
	}
});