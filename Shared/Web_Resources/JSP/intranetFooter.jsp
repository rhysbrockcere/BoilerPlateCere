<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
<%
	UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
	String systemName = form.getFieldValue( "$UFS_SERVER_NAME");
	String systemVersion = ("(" + form.getFieldValue( "$USERVAR2") + ")");
	String CurrentUser = form.getFieldValue( "$USERVAR3");
%>

<div id="Footer">
    <div id="fWrapper">
        <div id="f1">
            <div id="serverName">
                <% out.println("System Name: " + systemName); %>
                <% out.println(systemVersion); %>
            </div>
           
            <div id="userName">
                <% 
                out.println(CurrentUser);
                %>
            </div>
        </div>
       
    </div>
</div>

