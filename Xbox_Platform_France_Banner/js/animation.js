// JavaScript Document

//getElementById shortcut
var El = function(a){
    return document.getElementById(a);
}// Detecting IE
var div = document.createElement("div");
div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
var isIeLessThan10 = (div.getElementsByTagName("i").length == 1);
window.onload = function() {
    var stage = El("stage");
    var backup = El("backup");
    if (isIeLessThan10) {
        //show back up image
        stage.style.display='none';
        backup.style.display='block';
    } else {
        stage.style.display='block';
        yourAnim();
    }  
};

// your greensock animation here
function yourAnim() {
    
    var catchall = El("wrapper");
    var cta = El("ctaHit");
    var smoothStuff = ["#game01", "#game02", "#game03", "#game04", ".xBoxLogo", "#CTA", "#xBoxProduct"]; 
    var games = ['#game01', '#game02', '#game03', '#game04'];

    // pause, resume, restart buttons defined
    var pauseBtn = El("pauseBtn");
    var resumeBtn = El("resumeBtn");
    var restartBtn = El("restartBtn");

    CSSPlugin.defaultTransformPerspective = 500;
    TweenLite.ticker.fps(30);
    TweenLite.set("#stage",{perspective: 800, opacity: 1});
    TweenLite.set(".game",{transformOrigin: "0% 0%"});
    TweenLite.set(games, {transformStyle: "preserve-3d"});
    TweenLite.set("#copy1_3", {transformOrigin: "50% 50%", opacity: 0});
    TweenLite.set("#copy1_1", {transformOrigin: "50% 26.8%", opacity: 0});
    TweenLite.set("#copy1_2", {transformOrigin: "50% 39.7%", opacity: 0});
    TweenLite.set("#copy1_4", {transformOrigin: "50% 64.3%", opacity: 0});
    TweenLite.set("#jump_copy1", {transformOrigin: "50% 30.5%", opacity: 0});
    TweenLite.set("#jump_copy2", {transformOrigin: "50% 44.3%", opacity: 0});
    TweenLite.set("#jump_copy3", {transformOrigin: "50% 62.5%", opacity: 0});
    TweenLite.set("#offer_promo", {transformOrigin: "50% 8.7%", opacity: 0});
    TweenLite.set("#offer_price", {transformOrigin: "25.9% 71.2%", opacity: 0});
    TweenLite.set("#offer_now", {transformOrigin: "25.9% 59.1%", opacity: 0});

    var tl = new TimelineMax(); 
    //helps smooth animation in IE and FF
    tl.set(smoothStuff,{z: 1, transformStyle: "preserve-3d"});

    tl.addLabel("frame01", "-=0.3");

    tl.from("#footer", 0.7, {y: 250, ease: Power3.easeOut}, "frame01");
    tl.to("#copy_footer3", 0.5, {opacity:1, ease: Linear.easeNone}, "frame01+=0.6");
    
    tl.staggerFromTo(["#copy1_1", "#copy1_2", "#copy1_3", "#copy1_4"], .3, {scale: 5, opacity: 0, immediateRender: false, force3D: true}, {opacity: 1, scale: 1, ease: Circ.easeInOut}, .2, "frame01+=1");
    
    tl.to("#fr1_copy", .5, {opacity: 0, ease: Power2.easeInOut, z:0}, "frame01+=2.5");

    //GAME TRANSITIONS//////
    tl.addLabel("gameSeq");

    //game 1 and logo in//////
    tl.set(games, {transformOrigin:'center center -200'}, 'gameSeq');
    
    /*tl.to("#copy_footer01", 0.5, {opacity: 0, ease: Linear.easeNone}, "gameSeq+=0.25");
    tl.to("#copy_footer3", 0.5, {opacity: 1, ease:Linear.easeNone}, "gameSeq+=0.25");*/

    tl.to("#game01", 0.1, {opacity: 1, ease: Power2.easeIn}, "gameSeq+=0.25");
    tl.fromTo("#game01", 0.7, {zIndex: 3, force3D: true, rotationY: "-90", x: "0"}, {zIndex: 4, force3D: true, rotationY: 0, x: "0", ease: Power4.easeInOut}, "gameSeq");

    tl.from("#gmLogo01", 0.8, {force3D: true, x: "-=250px", ease: Power4.easeInOut}, "gameSeq");

    tl.set("#game01", {className: "+=shadow"}, "gameSeq");

    //game 1 and logo out//////
    tl.set(games, {transformOrigin:'center center -130'}, 'gameSeq+=1.3');

    tl.fromTo("#game01", 0.6, {zIndex: 4, force3D: true, rotationX: '0'}, {zIndex: 3, force3D: true, rotationX: '+=80', ease: Power4.easeInOut}, "gameSeq+=1.3");
    tl.to("#gmLogo01", 0.6, {force3D: true, y: "-=240px", opacity: 0, ease: Power4.easeInOut, }, "gameSeq+=1.3");
    tl.set("#game01", {opacity: 0}, 'gameSeq+=2.4');
        
    //game 2 and logo in//////
    tl.fromTo("#game02", 0.6, {zIndex: 3, force3D: true, rotationX: '-=80'}, {zIndex: 4, force3D: true, rotationX: '0', ease: Power4.easeInOut}, "gameSeq+=1.3")
      .to("#game02", 0.2, {force3D: true, opacity: 1, ease: Power4.easeInOut}, "gameSeq+=1.3");
    tl.from("#gmLogo02", 0.7, {force3D: true, y: "+=140px", opacity: 0, ease: Power4.easeInOut}, "gameSeq+=1.3");

    tl.to("#copy_footer3", 0.5, {opacity: 0, ease: Linear.easeNone}, "gameSeq+=1.5");
    tl.to("#copy_footer02", 0.5, {opacity: 1, ease:Linear.easeNone}, "gameSeq+=1.5");

    //game 2 shadow//////
    tl.set("#game02", {className: "+=shadow"}, "gameSeq+=1.2");

    //game 2 and logo out//////
    tl.set(games, {transformOrigin:'center center -200'}, 'gameSeq+=2.7');

    tl.fromTo("#game02", 0.6, {zIndex: 4, rotationY: '0'}, {zIndex: 3, rotationY: '-=75', ease: Power4.easeInOut}, "gameSeq+=2.7");
    tl.to("#gmLogo02", 0.6, {force3D: true, x: "-=280px", opacity: 0, ease: Power4.easeInOut}, "gameSeq+=2.7");
    tl.set("#game02", {opacity: 0}, 'gameSeq+=3.1');

    //GAMES DONE//////

    tl.addLabel("frame02", "-=0.1");
    
    tl.to("#copy_footer02", 0.5, {opacity: 0, ease: Linear.easeNone}, "frame02-=0.3");
    tl.to("#copy_footer3", 0.5, {opacity: 1, ease:Linear.easeNone}, "frame02-=0.3");

    //Jump ahead IN
    tl.staggerFromTo(["#jump_copy1", "#jump_copy2", "#jump_copy3"], 0.5, {immediateRender: false, opacity: 0, force3D: true,  scale: 5}, {opacity: 1, scale: 1, ease: Power3.easeInOut}, .2, "frame02+=0.2"), 

    tl.to("#fr4_copy", 0.5, {opacity: 0, ease: Power4.easeOut}, "frame02+=1.8");
    	
    //Jump ahead OUT
    tl.to("#copy_footer3", 0.6, {opacity: 0, ease: Linear.easeNone}, "frame02+=1.8");

    ////END CARD////
    tl.addLabel("endCard", "-=.5");

    //endcard bg color
    tl.fromTo("#footer", 1, {immediateRender: false, transformOrigin: "center bottom", scaleY: 1}, {scaleY: 2.5, ease: Power4.easeIn}, "endCard-=1")
    .fromTo("#footer", 0.2, {immediateRender: false, transformOrigin: "center bottom", scaleY: 2.5}, {scaleY: 8.5}, "endCard")
    .to("#footer", 1, {scaleY: 11, ease: Power3.easeOut}, "endCard+=0.2"); // this scaleY is the height of the banner divided by the height footer bar

    //out with the old and in with the new
    tl.fromTo(".xBoxLogo", 1.2, {immediateRender: false, scale: 1, opacity: 0, y: "+=25"}, {opacity: 1, y: "0", ease: Power3.easeOut}, "endCard+=0.2");

    //XboxOne Bundle Headline
    tl.fromTo("#offer_promo", 1, {immediateRender: false, opacity: 0.1, force3D: true,  scale: 4, transformOrigin: "15% 50%"}, {opacity: 1, scale: 1, ease: Linear.easeNone}, "endCard+=0.4");

    //Now starting at
    tl.fromTo("#offer_now", 0.11, {immediateRender: false, opacity: 0.3, force3D: true,  scale: 3}, {opacity: 1, scale: 1, ease: Linear.easeNone}, "endCard+=1");

    tl.fromTo("#offer_price", 0.11, {immediateRender: false, opacity: 0.3, force3D: true,  scale: 4}, {opacity: 1, scale: 1, ease: Linear.easeNone}, "endCard+=1.3");

    TweenLite.set(["#ctaBG_dark", "#ctaCopy"], {transformOrigin: "50% 50%"}); 

    //CTA
    tl.from("#cta-new", 0.9, {y:"-=20", opacity: 0, ease: Power4.easeOut}, "endCard+=1.6");
    
    //XBOX CONSOLE AND CONTROLLER
    tl.from("#console", 0.6, {force3D: true, y: "-=40", opacity: 0, ease: Power4.easeOut}, "endCard+=1.4");
    tl.from("#plus", 0.6, {opacity: 0, ease: Power4.easeOut}, "endCard+=1.9");
    tl.from("#headset", 0.6, {force3D: true, y: "-=40", opacity: 0, ease: Power2.easeInOut}, "endCard+=2.4");
    tl.from("#ou_1", 0.6, {opacity: 0, ease: Power2.easeInOut}, "endCard+=2.9");
    tl.from("#controller", 0.6, {force3D: true, y: "-=40", opacity: 0, ease: Power2.easeInOut}, "endCard+=3.4");
    tl.from("#ou_2", 0.6, {opacity: 0, ease: Power2.easeInOut}, "endCard+=3.9");
    tl.from("#gold_card", 0.6, {force3D: true, y: "-=40", opacity: 0, ease: Power2.easeInOut}, "endCard+=4.4");
    
    //tl.to("#logo_partner", 0.3, {opacity:1, ease:Power4.easeOut}, "endCard+=2.3");
    tl.to("#legal", 0.3, {opacity:1, ease:Power4.easeOut}, "endCard+=5.4");

    console.log(tl.totalDuration());
};