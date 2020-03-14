const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('forminputs_submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
    var container = document.querySelector("#menu");
    container.querySelectorAll('li').forEach(el => el.classList.remove('active'));     
    event.target.classList.add('active');  
});

var slideshow=new Array();
slideshow[0]="assets/slider/slide1.png";
slideshow[1]="assets/slider/slide2.png";
var i=0;

function Slide(){
i++;
if (i>1)i=0;
pic.src=slideshow[i]
return
}

/*var blackmonitor=new Array();
blackmonitor[0]="assets/monitor/normal_monitor.png";
blackmonitor[1]="assets/monitor/black_monitor.png";
var i=0;

function home(){
i++;
if (i>1)i=0;
monitor.src=blackmonitor[i]
return
}*/

function allpicture(){
	let elem1 = document.getElementById("gallery");
	elem1.style.gridTemplateAreas = '"a1 b1 c1 d1" "a2 b2 c2 d2" "a3 b3 c3 d3"';  	
};

function web(){
	let elem2 = document.getElementById("gallery");
	elem2.style.gridTemplateAreas = '"a1 a2 a3 b1" "b2 b3 c1 c2" "c3 d1 d2 d3"';  	
};

function graphic(){
	let elem3 = document.getElementById("gallery");
	elem3.style.gridTemplateAreas = '"a2 a3 b1 b2" "b3 c1 c2 c3" "d1 d2 d3 a1"';  	
};

function artwork(){
	let elem4 = document.getElementById("gallery");
	elem4.style.gridTemplateAreas = '"a3 b1 b2 b3" "c1 c2 c3 d1" "d2 d3 a1 a2"';  	
};

/** 
BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('forminputs_name').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message_block').classList.remove('hidden');


});
CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message_block').classList.add('hidden');
});*/