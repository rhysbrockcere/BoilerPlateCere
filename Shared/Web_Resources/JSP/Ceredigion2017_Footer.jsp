<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
<%
	UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
 	String theLang = form.getFieldValue( "$LANGUAGE" );
%>

<div class="footer">
	<div class="content">
    	<span class="standardText">
        	<div class="pull-left">
            	&copy; <span id="footer-year"><script>document.write(new Date().getFullYear())</script></span>
            	Cyngor Sir CEREDIGION County Council
            </div>
            <div class="pull-right">
            <% 
					String engTxt = "<a href='https://www.ceredigion.gov.uk/your-council/data-protection-freedom-of-information/data-protection/privacy-notice/' target='_blank'>Privacy Notice</a>";
					String cymTxt = "<a href='https://www.ceredigion.gov.uk/eich-cyngor/diogelwch-data-a-rhyddid-gwybodaeth/diogelwch-data/hysbysiad-preifatrwydd/' target='_blank'>Hysbysiad Preifatrwydd</a>"; 							
					
					if(theLang.equals("EN")){
						out.println(engTxt);
					}    
					else{
						out.println(cymTxt);
					}
        		%>
            </div>
        </span>
    </div>  
</div>

