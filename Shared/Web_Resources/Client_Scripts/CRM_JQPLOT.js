// create chart
//
function createChart(Type) {
   // create chart using data supplied by a server-side function
	//alert('Type=' + Type);

	try {
	   switch (Type) {
	   	case 'Pie':
	   		   		
				 plot1 = $.jqplot('chart1', [$eb.executeFunction('getPieData')], {
     
	          grid: {
	            drawBorder: false, 
	            drawGridlines: false,
	            background: '#ffffff',
	            shadow:false
			      },
			      axesDefaults: {
			             
			      },
			      seriesDefaults:{
			          renderer:$.jqplot.PieRenderer,
			          rendererOptions: {showDataLabels: true}
			      },
			      legend: {show: true}
		     });

			// handle data highlight event
	   //
	   $('#chart1').bind('jqplotDataHighlight', 
		                   function (ev, seriesIndex, pointIndex, data) {
		                      $('#info1').html(data[0] + ' (' + data[1] + ')');
		                   }
	   );
	
	   // handle data unhighlight event
	   //
		 $('#chart1').bind('jqplotDataUnhighlight', 
		                   function (ev) {
		                      $('#info1').html('Nothing selected');
		                   }
		 ); 
		 
	   	break;

	   	case 'Bar':
	   		//var s = $eb.executeFunction('getBarData');
	   		   		//alert (s.Ticks[0]);
	   		   		//alert (s.Data[0]);
	   		var s1 = [2, 6, 7, 10];
        var ticks = ['a', 'b', 'c', 'd'];
	   		   		
				plot2 = $.jqplot('chart2', [s1], {
	          // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
           seriesDefaults:{
                renderer:$.jqplot.BarRenderer,
                rendererOptions: {
	                  barDirection: 'vertical'
                },
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    //ticks: ticks
                }
            },
            highlighter: { show: false }
        });

         $('#chart2').bind('jqplotDataClick', 
            function (ev, seriesIndex, pointIndex, data) {
                $('#info2').html('series: '+seriesIndex+', point: '+pointIndex+', data: '+data);
            }
        );
 	
	   	break;
	   }
	
	}
	catch (e) {
		$('#chart1').html("<strong>Please select a dataset...</strong>");
	}
}