<script language="JavaScript">
sfHover = function() {
var sfEls = document.getElementById("nav").getElementsByTagName("LI");
for (var i=0; i<sfEls.length; i++) {
sfEls[i].onmouseover=function() {
this.className+=" ie_does_hover";
}
sfEls[i].onmouseout=function() {
this.className=this.className.replace(new RegExp(" ie_does_hover\\b"), "");
}
}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
</script>