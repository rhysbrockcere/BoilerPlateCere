<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
<%
	UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
	String theLang = form.getFieldValue( "$LANGUAGE" );
	String formName = form.getFieldValue( "$USERVAR2" );
%>
    
<div class ="header">
    <div id="hWrapper">
    	<div id="logo">
	    	<img src="images/Clic/Clic_Web_Small.png" />
        </div>
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
    </div>
</div>





