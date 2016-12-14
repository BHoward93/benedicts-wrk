"use strict";
// addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
(function(win, doc){
	if(win.addEventListener)return;		//No need to polyfill

	function docHijack(p){var old = doc[p];doc[p] = function(v){return addListen(old(v))}}
	function addEvent(on, fn, self){
		return (self = this).attachEvent('on' + on, function(e){
			var e = e || win.event;
			e.preventDefault  = e.preventDefault  || function(){e.returnValue = false}
			e.stopPropagation = e.stopPropagation || function(){e.cancelBubble = true}
			fn.call(self, e);
		});
	}
	function addListen(obj, i){
		if(i = obj.length)while(i--)obj[i].addEventListener = addEvent;
		else obj.addEventListener = addEvent;
		return obj;
	}

	addListen([doc, win]);
	if('Element' in win)win.Element.prototype.addEventListener = addEvent;			//IE8
	else{																			//IE < 8
		doc.attachEvent('onreadystatechange', function(){addListen(doc.all)});		//Make sure we also init at domReady
		docHijack('getElementsByTagName');
		docHijack('getElementById');
		docHijack('createElement');
		addListen(doc.all);	
	}
})(window, document);

//getElementById shortcut
var El = function(a){
    return document.getElementById(a);
}
// Detecting IE
var div = document.createElement("div");
div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
var isIeLessThan9 = (div.getElementsByTagName("i").length == 1);
window.onload = function() {
	yourAnim();
}

// global variabes
var wrapper = El("wrapper");
var stageWidth = El("stage").offsetWidth;
var stageHeight = El("stage").offsetHeight;

// your greensock animation here
function yourAnim() {
	//set up your variables to be animated
	var stage = El("stage");
	var red_bg = El("red_bg");	
	var frame_1 = El("frame_1");
	var f1_copy = El("f1_copy");
	var eng_img = El("eng_img");
	var getIn_img = El("getIn_img");
	var frame_2 = El("frame_2");
	var f2_copy = El("f2_copy");
	var frame_3 = El("frame_3");
	var f3_copy = El("f3_copy");
	var frame_4 = El("frame_4");
	var lock_up = El("lock_up");
	//var eng_badge = El("eng_badge");
	//var vxl_badge = El("vxl_badge");
	var end_frame = El("end_frame");
	var hashtag_copy = El("hashtag_copy");
	var cta = El("cta");
	var logo = El("logo");
	var logo_2 = El("logo_2");

	// pause, resume, restart buttons defined
    var pauseBtn = El("pauseBtn");
    var resumeBtn = El("resumeBtn");
    var restartBtn = El("restartBtn");

	var tl = new TimelineMax();
	//var tl = new TimelineMax({repeat:1});
	var tween = tl.to(frame_1, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(red_bg, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(logo, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(eng_img, 1, {x:150, ease: Expo.easeInOut}, "-=0.5")
	.to(red_bg, 1, {x:150, ease: Expo.easeInOut}, "-=1")
	.from(f1_copy, 1, {x:300, ease: Expo.easeInOut})
	.to(f1_copy, 0.5, {autoAlpha: 0, ease: Linear.easeNone, delay:1.5})
	.to(red_bg, 0.75, {x: 0, ease: Expo.easeInOut})
	.to(eng_img, 0.75, {x:0, ease: Expo.easeInOut}, "-=0.75")
	.to(frame_1, 0.25, {autoAlpha: 0, ease: Linear.easeNone}, "-=0.25")
	.to(getIn_img, 0.25, {opacity: 1, ease: Linear.easeNone})
	.to(red_bg, 0.75, {x:300, ease: Expo.easeInOut}, "-=0.25")
	.to(frame_2, 0.5, {opacity:1})
	.to(frame_2, 0.5, {opacity: 0, ease:Linear.easeNone, delay:2})
	.to(frame_3, 0.5, {opacity:1, delay:0.5})
	.to([frame_3, logo], 0.5, {opacity: 0, ease:Linear.easeNone, delay:2})
	.to(frame_4, 1, {opacity: 1, ease: Expo.easeInOut})
	.to(frame_4, 0.5, {opacity:0, delay: 2})
	.to(end_frame, 0.5, {opacity: 1})
	.to(cta, 0.75, {y: '-120', ease: Expo.easeInOut}, "-=0.25")
	;

	

	// pause, resume, restart buttons actions
	pauseBtn.onclick = function() {
        tween.pause();
    };
    resumeBtn.onclick = function() {
        tween.resume();
    };
    restartBtn.onclick = function() {
        tween.restart();
    };

    //total time of banner
	console.log(tl.totalDuration());
}