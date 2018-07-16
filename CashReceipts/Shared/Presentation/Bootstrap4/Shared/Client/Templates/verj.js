var verj = (function(){
	return {
		pageReady: function(){

			// find verj table navs and replace them with bootstrap pagination navs
			$('[class*=-tableNavRow]').each(function(){
				
						// use the class to identify the verj nav
				var id = $(this).attr("class"),
						// get the outer table
						parent = $(this).parents("table").first(),
						// get the table row that contains the navigation
						tr = $(this).find('[class*=-navSpacer]').closest('tr'),
						// get the table cells in the row
						cells = tr.children(),
						// determine the alignment of the nav row
						tbl = tr.closest("table"),
						alignment = tbl.attr("align"),
						justify = alignment == "left" ? "start" :
											alignment == "right" ? "end" : "center",

						// find a bootstrap nav that might exist for this table
						container = parent.next('nav');
			
				// if the bootstrap nav doesn't already exist, create it
				if(!container.length){
					container = $("<nav class='table-pagination' for='" + id + "'></nav>");

					// build a list from the verj nav table cells
					var list = list = buildNavListFromTableCells(cells, $("<ul class='pagination justify-content-" + justify + "'></ul>"));
			
					container.append(list);
			
					parent.after(container);
				}
				// if the container already exists, update its texts and links
				else{
					var list = container.children("ul");

					// empty the existing list
					list.empty();

					// and rebuild it
					list = buildNavListFromTableCells(cells, list);
				}

				// takes an array of table cells and a list, turns the cells into list items and appends them to the list
				function buildNavListFromTableCells(cells, list){
					// for each cell
					cells.each(function(i){

								// using the content of the cell, determine the state of the page control
						var a = $(this).children("a"),
								d = $(this).children("div"),
								img = $(this).find("img"),
								alt = img.attr("alt"),

								// create a list item and a link
								li = $("<li class='page-item'></li>"),
								link = $("<a class='page-link'></a>"),
								string = "";

						// handle the first, prev, next and last pages
								 if(alt == "Scroll to the top")			link.append("First");		// first page
						else if(alt == "Scroll up one page") 		link.append("&laquo;");	// prev page
						else if(alt == "Scroll down one page")	link.append("&raquo;");	// next page
						else if(alt == "Scroll to the bottom")	link.append("Last");		// last page
						else														string = a.text() || d.text();	// all the numbers inbetween
						
						if(string) link.text(string);

						// add the link to the list item
						li.append(link);
			
						if(!a.length) a = false;
						if(!d.length) d = false;
			
						// if there's no link or div, disable the cell
						if(!a && !d) li.addClass("disabled");
						// if there's no link but there is a div, it's the active cell
						if(!a && d)	 li.addClass("active");

						// copy the href from the existing anchor
						if(a) link.attr("href", a.attr("href"));

						// if this cell had any content, add the list item to the list
						if(a || d || alt) list.append(li);
					});

					return list;
				}
			});
			
			// hide or show table nav containers depending on whether the original is showing or not
			$('nav.table-pagination').each(function(){
				if($("[class*=" + $(this).attr("for") + "]").length){
					$(this).show();
				}
				else{
					$(this).hide();
				}
			});
		}
	}
})();