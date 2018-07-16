
<style media="all" type="text/css">
@font-face {
  font-family: 'PT Sans';
  font-weight: 400;
  font-style: normal;
  src: url('../Fonts/PT-Sans-regular/PT-Sans-regular.eot');
  src: url('../Fonts/PT-Sans-regular/PT-Sans-regular.eot?#iefix') format('embedded-opentype'),
       local('PT Sans'),
       local('PT-Sans-regular'),
       url('../Fonts/PT-Sans-regular/PT-Sans-regular.woff2') format('woff2'),
       url('../Fonts/PT-Sans-regular/PT-Sans-regular.woff') format('woff'),
       url('../Fonts/PT-Sans-regular/PT-Sans-regular.ttf') format('truetype'),
       url('../Fonts/PT-Sans-regular/PT-Sans-regular.svg#PTSans') format('svg');
}

#hWrapper {
	background-color:#fff;
	font-family: "PT Sans";
	background-repeat:no-repeat;
	height:80px;
	margin: 0px auto;
	max-width:900px;
	padding: 10px 30px;
	border-bottom: solid 1px #f2f2f2;
}

#logo {
	float:left;
}

#langSelect {
	color: #ccc;
	text-align: right;
	float: right;	
}

#langSelect a {
	color: #575757;
	padding: 10px;
	font-family: "PT Sans";
	font-size: 12px;
	text-decoration: none;
}

</style>


<div id="hWrapper">
	<div id="langSelect">
	<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>
        
        <%
                String engTxt = "<div><a href=\"#\" onClick ='setFieldValueExternal(\"$USERVAR1\", \"CY\"); externalSubmitPageBack(); return false;'>Cymraeg</a></div>";
        
        String cymTxt = "<div><a href=\"#\" onClick = 'setFieldValueExternal(\"$USERVAR1\", \"EN\"); externalSubmitPageBack(); return false;'>English</a></div>";
            UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
            String theLang = form.getFieldValue( "$LANGUAGE");
            String userName = form.getFieldValue( "ONLINE_CMP_PORTAL__NAME");
           
       
            if(theLang.equals("EN")){
                out.println(engTxt);
            }    
            else{
                out.println(cymTxt);
            }
        
        %>
        </div>
	<div id="logo"><a href="http://www.ceredigion.gov.uk"><img src="ebWebResource/Web_Resources/Images/crest_ceredigion.jpg" alt="Ceredigion Logo" /></a></div>





