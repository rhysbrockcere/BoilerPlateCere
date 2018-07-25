<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
<%
	UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
 	String theLang = form.getFieldValue( "$LANGUAGE" );
 	String formName =  form.getText("FormHeader","Local");
%>
<div class="controlBackgroundColor controlText">
    <div class="content">
    	<table cellpadding="0" cellspacing="0" style="width:100%">
        	<colgroup>
            	<col style="width: 10%;">
              	<col style="width: 80%;">
              	<col style="width: 10%;">
         	</colgroup>
            	<tr style="height:1px">

            	 <td style="text-align:left;">
                  	<img src="ebWebResource/Web_Resources/Images/CLIC_Logo_Light.png" alt="Ceredigion Logo" class="headerLogo" />
               </td>
               
               <td style="text-align:center;">
                	<h1 class="headerTitle">
						<% if(formName != null && formName != ""){
                           		out.println(formName); 
                           }
                        %>
                    </h1>
               </td>
               <td id="language-select">              	
                        <% 
							String engTxt = "<a href='#' data-lang='CY' title='Change language to Welsh'><span>Cymraeg <i class='fa fa-comment-o' aria-hidden='true'></i></span></a>";
							String cymTxt = "<a href='#' data-lang='EN' title='Change language to English'><span>English  <i class='fa fa-comment-o' aria-hidden='true'></i></span></a>"; 							
							if(theLang.equals("EN")){
								out.println(engTxt);
							}    
							else{
								out.println(cymTxt);
							}
        				%>
                    </td>                  
                </tr>
        </table>
  </div>
</div>
<script>
$(function() {
	$('#language-select a').on( "click", function(e) {		
		$eb.executeFunctionAsynchronously(null,null,"setLanguage",$(this).data("lang"),true,true);
		e.preventDefault();
	});	
});
</script>