<div id="hWrapper" class="flexWrap">
    <div id="logo" class="flex"><a href="http://www.ceredigion.gov.uk"><img src="ebWebResource/Web_Resources/Images/Ceredigion_Logo.png" alt="Ceredigion Logo" /></a></div>
    <div id="brand" class="flex"><img src="ebWebResource/Web_Resources/Images/MyAccount_Brand.png" alt="Ceredigion Logo" /></div>
    <div id="langSelect" class="flex">
        <%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
            <%
                String engTxt = "<div><a href=\"#\" onClick ='setFieldValueExternal(\"$USERVAR1\", \"CY\"); externalSubmitPageBack(); return false;'>Cymraeg</a></div>";
                String cymTxt = "<div><a href=\"#\" onClick = 'setFieldValueExternal(\"$USERVAR1\", \"EN\"); externalSubmitPageBack(); return false;'>English</a></div>";
                UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
                String theLang = form.getFieldValue("$LANGUAGE");
                if(theLang.equals("EN")){out.println(engTxt);}    
                else{out.println(cymTxt);}
            %>
    </div>
</div>




