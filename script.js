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
slideshow[1]="assets/slider/slide-2.png";
var i=0;

function Slide(){
i++;
if (i>1)i=0;
pic.src=slideshow[i]
return
}

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