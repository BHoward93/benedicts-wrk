document.getElementById('c1').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // if checked ...
        TweenLite.to("#email_panel", 0.5, {opacity:1, ease:Linear.easeNone});
    } else {
        // if not checked ...
        TweenLite.to("#email_panel", 0.5, {opacity:0, ease:Linear.easeNone});
    }
};

//document.getElementById('submit').onclick = function confirmation() {
//    var tl = new TimelineMax;
//        tl.to(".form", 0.5, {opacity:0, ease:Power1.easeInOut})
//        .to(".confirmation", 0.5, {opacity:1, ease:Power1.easeInOut}, "-=0.25");
//}

document.getElementById('submit').onclick = function validateForm() {
    var x = document.forms["myForm"]["fname", "sname"].value;
    if (x == "") {
        alert("Fill in the fields marked *");
        return false;
    } else { 
         var tl = new TimelineMax;
        tl.to(".form", 0.5, {opacity:0, ease:Power1.easeInOut})
        .to(".confirmation", 0.5, {opacity:1, ease:Power1.easeInOut}, "-=0.25");                          
    }
}