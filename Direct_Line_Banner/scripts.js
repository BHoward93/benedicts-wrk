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
	var bg_exit = El("bg_exit");	
	var frame_1 = El("frame_1");
	var f1_copy1 = El("f1_copy1");
	var f1_copy2 = El("f1_copy2");
	// var hook = El("hook");
	var frame_2 = El("frame_2");
	var f2_copy1 = El("f2_copy1");
//	var f2_copy2 = El("f2_copy2");
	var ribbon = El("ribbon");
	var frame_3 = El("frame_3");
	var f3_copy = El("f3_copy");
	var frame_4 = El("frame_4");
	var f4_copy = El("f4_copy");
	var icons = El("icons");
	var icon_briefcase = El("icon_briefcase");
	var icon_warning = El("icon_warning");
	var icon_lamp = El("icon_lamp");
	var end_frame = El("end_frame");
	var end_frame_copy = El("end_frame_copy");
	var checkbox = El("checkbox");
	var tick = El("tick");
	var question_mark = El("question_mark");
	var chevron = El("chevron");
	var logo = El("logo");
    //var hook_copy = El("f1_copy2");

	// pause, resume, restart buttons defined
    var pauseBtn = El("pauseBtn");
    var resumeBtn = El("resumeBtn");
    var restartBtn = El("restartBtn");

	var tl = new TimelineMax();
	//var tl = new TimelineMax({repeat:1});
	var tween = tl.to(frame_1, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(f1_copy1, 0.5, {opacity:1, ease: Expo.easeInOut})
    
    /////////////////added a different set of tweens for the Hook Copy////////////
    .to(f1_copy2, 3.5, {y:140, ease: Expo.easeInOut}, "-=1")
    //.to(f1_copy2, 1, {rotation: -15, x:25})
    .fromTo(f1_copy2, 1.5, {y:140, immediateRender: false}, {y:130, yoyo: true, repeat: 2}, "-=.5")
    ///////////////end of new tweens//////////////////////
	.to(checkbox, .5, {opacity:1, ease: Expo.easeInOut}, "-=7")
    //////////////added a fromTo for the stamping effect for each ticks//////////////
	.fromTo(tick, .75, {opacity:0, scale: 2}, {opacity:1, scale: 1, ease: Expo.easeInOut}, "-=4.5")
	.to(frame_1, 0.2, {opacity:0, ease: Expo.easeInOut}, "-=1.5")
	.to(checkbox, 0.2, {opacity:0, ease: Expo.easeInOut}, "-=1.5")
	.to(tick, 0.3, {opacity:0, ease: Expo.easeInOut}, "-=1.5")
	.to(frame_2, 0.5, {opacity:1, ease: Expo.easeInOut}, "-=0.8")
	.to(f2_copy1, 0.5, {opacity:1, ease: Expo.easeInOut}, "-=0.8")
    /*.to(f2_copy2, 0.5, {opacity:1, ease: Expo.easeInOut}, "-=0.5")*/
	.to(ribbon, 0.5, {opacity:1, scale: 1, ease: Expo.easeInOut}, "-=0.8")
	.to(checkbox, .5, {opacity:1, ease: Expo.easeInOut}, "-=0.5")
	.fromTo(tick, .75, {opacity:0, scale: 2}, {opacity:1, scale: 1, ease: Expo.easeInOut})
	.to(frame_2, 0.5, {opacity:0, delay: 2, ease: Expo.easeInOut})
	.to(checkbox, 0.5, {opacity:0, ease: Expo.easeInOut}, "-=0.5")
	.to(tick, 0.5, {opacity:0, ease: Expo.easeInOut}, "-=0.5")
	.to(frame_3, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(f3_copy, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(checkbox, .5, {opacity:1, ease: Expo.easeInOut}, "-=0.5")
    ///////to get the effect on the question mark I made the checkbox transparent in the middle
    ///////and slid the question mark underneath///////////////
    .to(question_mark, 0.1, {opacity:1})
	.to(question_mark, 0.7, {y: 48, ease: Expo.easeInOut})
	.to(frame_3, 0.5, {opacity:0, delay: 1, ease: Expo.easeInOut})
	.to(checkbox, 0.5, {opacity:0, ease: Expo.easeInOut}, "-=0.5")
	.to(question_mark,0.5, {opacity:0, ease: Expo.easeInOut}, "-=0.5")
	.to(frame_4, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(f4_copy, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(icons, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(icon_briefcase, 1, {opacity:1, ease: Expo.easeInOut})
    .to(icon_lamp, 1, {opacity:1, ease: Expo.easeInOut}, "-=0.25")
	.to(icon_warning, 1, {opacity:1, ease: Expo.easeInOut}, "-=0.25")
    .to([f4_copy,icons], .5, {opacity:0, ease: Expo.easeInOut}, "+=1")
	.to(chevron, 1, {css:{left:"-20px"}, delay: 1, ease: Expo.easeInOut}, "-=1.8")
	.to(end_frame, 0.5, {opacity:1, ease: Expo.easeInOut})
	.to(end_frame_copy, 0.5, {opacity:1, ease: Expo.easeInOut})


	/*fall(fall_distance / 3, speed * 1.5);
	fall(fall_distance / 3, speed * 1.5);
	level(fall_distance / 3, speed * 2);*/

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