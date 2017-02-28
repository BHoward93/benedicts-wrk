var aboutBtn = 
document.getElementById("aboutBtn"),
    workBtn = 
document.getElementById("workBtn"),
    contactBtn = 
document.getElementById("contactBtn"),
    homeBtn = 
document.getElementById("homeBtn");

    aboutBtn.onclick = function() {
        TweenLite.to(window, 1, {scrollTo:{y:"#about", offsetY:70, autoKill:false}});
    };
    
    workBtn.onclick = function() {
        TweenLite.to(window, 1, {scrollTo:{y:"#work", offsetY:70}});
    };

    contactBtn.onclick = function() {
        TweenLite.to(window, 1, {scrollTo:{y:"#contact"}});
    };

    homeBtn.onclick = function() {
        TweenLite.to(window, 1, {scrollTo:{y:"#home"}});
    };