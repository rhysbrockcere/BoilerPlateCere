// create chart
//
function chartSetup() {
   // create chart using data supplied by a server-side function
   //
   plot1 = $.jqplot('chart1', [$eb.executeFunction('buildChartData')], {
              seriesDefaults:{
	               renderer:$.jqplot.PieRenderer,
                 rendererOptions: {padding: 8, showDataLabels: true}
	            },
	            legend: {show:true}
	         });

   // handle data highlight event
   //
   $('#chart1').bind('jqplotDataHighlight', 
	                   function (ev, seriesIndex, pointIndex, data) {
	                      $('#info1').html('Graph value (£) :  ' + data);
	                   }
   );

   // handle data unhighlight event
   //
	 $('#chart1').bind('jqplotDataUnhighlight', 
	                   function (ev) {
	                      $('#info1').html('Nothing selected');
	                   }
	 ); 
}