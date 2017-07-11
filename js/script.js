/**
 * Created by ahmed on 10/29/2016.
 */

var el = document.getElementById("main");
var e2 = document.getElementById("foot");
el._originalBackgroundColor = el.style.backgroundColor;
e2._originalBackgroundColor = e2.style.backgroundColor;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("foot").style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#ecf0f1";
    el.style.backgroundColor = el._originalBackgroundColor;
    e2.style.backgroundColor = e2._originalBackgroundColor;
}


