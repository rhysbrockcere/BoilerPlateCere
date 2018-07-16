<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
<%
	UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
	String theLang = form.getFieldValue( "$LANGUAGE" );
	String formName = form.getFieldValue( "$USERVAR2" );
%>
    
<div id="hWrapper">
    <div id="langSelect">
   		<% 
			String engTxt = "<div><a href=\"#\" onClick ='setFieldValueExternal(\"$USERVAR1\", \"CY\"); externalSubmitPageBack(); return false;'>Cymraeg</a></div>";
        	String cymTxt = "<div><a href=\"#\" onClick = 'setFieldValueExternal(\"$USERVAR1\", \"EN\"); externalSubmitPageBack(); return false;'>English</a></div>";  
          
            if(theLang.equals("EN")){
                out.println(engTxt);
            }    
            else{
                out.println(cymTxt);
            }
        %>
	</div>
    <div id="logo">
    	<a href="http://www.ceredigion.gov.uk"><img src="ebWebResource/Web_Resources/Images/Clic_Logo.png" alt="Ceredigion Logo" /></a>
    </div>    
</div>





