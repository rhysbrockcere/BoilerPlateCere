$(document).ready(function () {
   // bind click events to launch dialog windows
   $(".cmdGotoLogin").click(function(){showDialog(this); return false;});

   // define the dialog box
   $("#dialogPanelId").dialog({
      autoOpen: false,
      modal: true,
			show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "blind",
        duration: 500
      },
      height: 300,
      width: 500,
      zIndex: 100000,
      resizable: false,
			title: "Log In",
			closeOnEscape: true,
			close: function (event, ui)
				{
					$('#reloadForm').trigger('click');
				}
   });
});

function closeiFrame() {
	$("#dialogPanelId").dialog("close");
}

// launch form in dialog window
function showDialog(panel){
   // create an iframe with ID = modalFrameId in the dialog window, then open the dialog
   	$("#dialogPanelId").html('<iframe id="modalIframeId" width="100%" height="100%" marginWidth="0" marginHeight="0" frameBorder="0" scrolling="none" />').dialog("open");

   // locate the iFrame and set the iFrame source to be the Xi form to run.
   	$("#modalIframeId").attr("src","/ufs/ufsmain?formid=CRM_LOGIN_POPUP");
}