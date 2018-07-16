
<style media="all" type="text/css">
#header_links {
	color: #ccc;
	padding: 3px;
	margin-bottom: 25px;
	margin-left: 250px;
	text-align: right;
	position:absolute;
	top:5px;
	right:10px
}
#header_links ul {
	margin-left: 0;
	padding-left: 0;
	display: inline;
	border: none;
}
#header_links ul li {
	margin-left: 0;
	padding-left: 2px;
	border: none;
	list-style: none;
	display: inline;
}
#header_links ul li a:active {
	color: #000000;
}
#header_links ul li a, #header_links ul li a:hover {
	color: #FFFFFF;
}
a.autilnav:link, a.autilnav:visited, a.autilnav:active, a.autilnav:hover, a.autilnav:focus, a.autilnavs:link, a.autilnavs:visited, a.autilnavs:active, a.autilnavs:hover, a.autilnavs:focus, a.autilnavn:link, a.autilnavn:visited, a.autilnavn:active, a.autilnavn:hover, a.autilnavn:focus, a.autilnavsn:link, a.autilnavsn:visited, a.autilnavsn:active, a.autilnavsn:hover, a.autilnavsn:focus {

	color : #ffffff;

	font-weight: bold;

	padding : 0 5px;

	font-size: 0.71em;

}

a.autilnav:link, a.autilnav:visited, a.autilnav:active, a.autilnav:hover, a.autilnav:focus, {

	border-right : 1px #ffffff solid;

}

a.autilnavsn:link, a.autilnavsn:visited, a.autilnavsn:active, a.autilnavsn:hover, a.autilnavsn:focus, a.autilnav:hover, a.autilnavn:hover {

	color : #ffcc33;

}
a.autilnav:link, a.autilnav:visited, a.autilnav:active, a.autilnav:hover, a.autilnav:focus, a.autilnavs:link, a.autilnavs:visited, a.autilnavs:active, a.autilnavs:hover, a.autilnavs:focus {

	border-right : 1px #ffffff solid;

}

</style>

<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td background="ceredigion_header_title.jpg"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td height="107px" "width=643px" valign="bottom" style="background-image:url(ceredigion_header.jpg); background-repeat:no-repeat;background-position: left; "></td>
        </tr>
      </table></td>
  </tr>
</table>
<%@ page language="java" import="com.ebasetech.ufs.kernel.*" %>

<%
    
String engTxt = "<div id=\"header_links\"><ul><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=4295&amp;splashpage=false&amp;articleaction=chooselanguage_eng\" accesskey=\"1\" title=\"Link to Home\">Home</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=14&amp;articleaction=chooselanguage_eng\" accesskey=\"3\" title=\"Link to  Site Map\">Site&nbsp;Map</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=116&amp;articleaction=chooselanguage_eng\" title=\"Link to  Services A-Z\">Services&nbsp;A-Z</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=161&amp;articleaction=chooselanguage_eng\" accesskey=\"9\" title=\"Link to  Contact Us\">Contact&nbsp;Us</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnavn\" href=\"#\" onClick = 'setFieldValueExternal(\"$USERVAR1\", \"CY\"); externalSubmitPageBack(); return false;'>CYMRAEG</a></li></ul></div>";

String cymTxt = "<div id=\"header_links\"><ul><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=4295&amp;splashpage=false&amp;articleaction=chooselanguage_cym\" accesskey=\"1\" title=\"Link to Home\">Hafan</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=14&amp;articleaction=chooselanguage_cym\" accesskey=\"3\" title=\"Link to  Site Map\">Map&nbsp;o'r&nbsp;Wefan</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=115&amp;articleaction=chooselanguage_cym\" title=\"Link to  Services A-Z\">Gwasanaethau&nbsp;A-Y</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnav\" href=\"http://www.ceredigion.gov.uk/index.cfm?articleid=161&amp;articleaction=chooselanguage_cym\" accesskey=\"9\" title=\"Link to  Contact Us\">Cysylltwch&nbsp;&acirc;&nbsp;ni</a></li><li class=\"hidelistbullet navinline\"><a class=\"autilnavn\" href=\"#\" onClick = 'setFieldValueExternal(\"$USERVAR1\", \"EN\"); externalSubmitPageBack(); return false;'>ENGLISH</a></li></ul></div>";

    UFSFormInterface form = (UFSFormInterface) session.getAttribute("FormInterface");
    String theLang = form.getFieldValue( "$LANGUAGE");
   
    if(theLang.equals("EN")){
        out.println(engTxt);
    }    
    else{
        out.println(cymTxt);
    }

%>






