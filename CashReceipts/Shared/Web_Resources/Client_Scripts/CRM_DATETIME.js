$(document).ready(function() {
	//For todays date;
	Date.prototype.today = function(){ 
	    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear() 
	};
	//For the time now
	Date.prototype.timeNow = function(){
	     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
	};
	
	var count = 0;
	
	timer = $.timer(function() {
		//Calculate the date and time
		
		//display calculated date and time
	      $('#dateTime').html(function() {
				var newDate = new Date();
				var datetime = newDate.today() + " " + newDate.timeNow();
					return datetime;
			});
			
			if ($('#refresh').val() == 'Y') {
				if(count == 10) {
					$('#btnRefresh').click();
					count = 0;	
				}
					else {
					count ++;
				}
			}
	    });
		
	timer.set({ time : 1000, autostart : true });

});