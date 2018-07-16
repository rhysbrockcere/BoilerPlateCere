jQuery(document).ready(function($) {
	var errorcode = $("#errorcode").val();
	if (errorcode == 99) {
		//Payment Error
		$("#errorcode").val(0);
		$("#statusCancel").click();
	}
	var status = $("#status").val();
	if (status !== "") {
		//Payment success
		$("#resXml").val(status);
		$("#status").val("");
		$("#statusButton").click();
	}
});