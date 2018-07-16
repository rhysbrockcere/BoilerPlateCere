/**
 * 30mins (1800000)
 * 20mins (1200000)
 * 15mins (900000)
 * 10Mins(600000)
 */

//var serverName = $eb.executeFunction("getServerName");
// TEST - var idleTime = 5000; // number of miliseconds until the user is considered idle
var idleTime = 1800000; // number of miliseconds until the user is considered idle
var reFresh = 600000; // number of miliseconds that a call is made to the server to keep the session alive
var initialSessionTimeoutMessage = 'Your session will expire in <span id="sessionTimeoutCountdown"></span> seconds.<br /><br />Click on <b>OK</b> to continue your session.';
var sessionTimeoutCountdownId = 'sessionTimeoutCountdown';
var redirectAfter = 10; // number of seconds to wait before redirecting the user
//var redirectTo = 'http://' + serverName + '/ufs/CLIC_HUB.eb?'; // URL to relocate the user to once they have timed out
var expiredMessage = 'Your session has expired.'; // message to show user when the countdown reaches 0
var running = false; // var to check if the countdown is running
var timer; // reference to the setInterval timer so it can be stopped
var EBfield = 'DUMMY_FIELD'; //Field on eBase
 
$(function() {
	$('<div id="timer"></div>').appendTo('body');
	 $('<div id="sessionTimeoutWarning" style="display: none"></div>').appendTo('body');
	
    // create the warning window and set autoOpen to false
    var sessionTimeoutWarningDialog = $("#sessionTimeoutWarning");
    $(sessionTimeoutWarningDialog).html(initialSessionTimeoutMessage);
    $(sessionTimeoutWarningDialog).dialog({
        title: 'Session Expiration Warning',
        autoOpen: false,    // set this to false so we can manually open it
        closeOnEscape: false,
        draggable: false,
        width: 460,
        minHeight: 50,
        modal: true,
        beforeClose: function() { // bind to beforeclose so if the user clicks on the "X" or escape to close the dialog, it will work too
            // stop the timer
            clearInterval(timer); 
            // stop countdown
            running = false;
		  			var date = new Date(); 
		        $eb.setFieldValue(EBfield, date, false);            
        },
        buttons: {
            OK: function() {
                // close dialog
                $(this).dialog('close');
            }
        },
        resizable: false,
        open: function() {
            // scrollbar fix for IE
            $('body').css('overflow','hidden');
        },
        close: function() {
            // reset overflow
            $('body').css('overflow','auto');
        }
    }); // end of dialog
 
 
   // bind to idleTimer's idle.idleTimer event
   // $(document).bind("idle.idleTimer", function(){
    $( document ).on( "idle.idleTimer", function(event, elem, obj){

    	
        	// if the user is idle and a countdown isn't already running
					//if($.data(document,'idleTimer') === 'idle' && !running){
        	if($( document ).idleTimer("isIdle") && !running){
        		console.log('Run');
            var counter = redirectAfter;
            running = true;
 
            // intialisze timer
            $('#'+sessionTimeoutCountdownId).html(redirectAfter);
            // open dialog
            $(sessionTimeoutWarningDialog).dialog('open');
 
            // create a timer that runs every second
            timer = setInterval(function(){
                counter -= 1;
 
                // if the counter is 0, redirect the user
                if(counter === 0) {
                    $(sessionTimeoutWarningDialog).html(expiredMessage);
                    $(sessionTimeoutWarningDialog).dialog('disable');
                    var serverName = $eb.executeFunction("getServerName");
                    window.location = serverName + 'CLIC_HUB.eb?'
                    //window.location = redirectTo;
                } else {
                    $('#'+sessionTimeoutCountdownId).html(counter);
                };
            }, 1000);
        };
    });

    //Submit a call every 20mins 
    setInterval(function(){
    	var date = new Date(); 
    		$eb.setFieldValue(EBfield, date, false);    	    	
    	}, reFresh);

      // start the idle timer
    $( document ).idleTimer(idleTime);
 
});

