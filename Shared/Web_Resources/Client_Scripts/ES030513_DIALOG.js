$(document).ready(function () {
   // bind click events to launch dialog windows
   $(".urlLaunchPanel").click(function(){showDialog(this); return false;});

   // bind hover event to highlight panels
   $(".urlLaunchPanel").hover(function(){$(this).toggleClass("highlight");});

   // define the dialog box
   $("#dialogPanelId").dialog({
      autoOpen: false,
      modal: true,
      height: 400,
      width: 400,
      zIndex: 100000,
      autoOpen: false
   });
});

// launch form in dialog window
function showDialog(panel){
   // create an iframe with ID = modalFrameId in the dialog window, then open the dialog
   $("#dialogPanelId").html('<iframe id="modalIframeId" width="100%" height="100%" marginWidth="0" marginHeight="0" frameBorder="0" scrolling="auto" />').dialog("open");

   // locate the iFrame and set the iFrame source to be the Xi form to run. Add in the form parameter by locating the value of the hidden form field contained in the panel that was clicked.
   $("#modalIframeId").attr("src","/ufs/ufsmain?formid=ES030513_DIALOG_POPUP&P1="+$(panel).find('.panelValue').first().val());
}