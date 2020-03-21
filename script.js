const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('forminputs_submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
    var container = document.querySelector("#menu");
    container.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

var slideshow = new Array();
slideshow[0] = "assets/slider/slide1.png";
slideshow[1] = "assets/slider/slide2.png";
var i = 0;

function Slide() {
    i++;
    if (i > 1) i = 0;
    pic.src = slideshow[i]
    if (i === 0) {
        document.getElementById('img_home').style.zIndex = '7';        
        document.getElementById('img_home_goriz').style.zIndex = '7';        
        document.getElementById('display').style.zIndex = '2';       

    } else {
        document.getElementById('img_home').style.zIndex = '-1';
        document.getElementById('img_home_goriz').style.zIndex = '-1';
        document.getElementById('display').style.zIndex = '-1';
    }
}

var k = 0;

var blackmonitor = new Array();
blackmonitor[0] = "assets/slider/normal_display.png";
blackmonitor[1] = "assets/slider/black_display.png";

function home() {
    k++;
    if (k > 1) k = 0;
    display.src = blackmonitor[k];
}

function popup() {
    let elem5 = document.getElementById('message_block');
    elem5.style.zIndex = '8';
    const subject = document.getElementById('forminputs_subject').value.toString();
    const desc = document.getElementById('forminputs_describe').value.toString();
    const name555 = document.getElementById('forminputs_name').value.toString();
    const email555 = document.getElementById('forminputs_email').value.toString();

    

    if (/^\s*$/.test(subject)) {
        document.getElementById('result').innerText = 'Без темы';
    }
    else document.getElementById('result').innerText = 'Тема:' + subject.toString();

    if (/^\s*$/.test(desc)) {
        document.getElementById('description').innerText = 'Без описания';
    }
    else document.getElementById('description').innerText = 'Описание:' + desc.toString();

    if (/^\s*$/.test(name555) || /^\s*$/.test(email555)) {
        document.getElementById('stroka').innerText = 'Письмо не отправлено - заполните обязательные поля';
        document.getElementById('description').innerText = '';
        document.getElementById('result').innerText = '';            
    } else {
        document.getElementById('stroka').innerText = 'Письмо отправлено';
    }  
    
}

function closebutton() {
    document.getElementById('message_block').style.zIndex = '-1';
    document.getElementById('headform').reset();
}

function allpicture() {
    let elem1 = document.getElementById("gallery");
    elem1.style.gridTemplateAreas = '"a1 b1 c1 d1" "a2 b2 c2 d2" "a3 b3 c3 d3"';
};

function web() {
    let elem2 = document.getElementById("gallery");
    elem2.style.gridTemplateAreas = '"a1 a2 a3 b1" "b2 b3 c1 c2" "c3 d1 d2 d3"';
};

function graphic() {
    let elem3 = document.getElementById("gallery");
    elem3.style.gridTemplateAreas = '"a2 a3 b1 b2" "b3 c1 c2 c3" "d1 d2 d3 a1"';
};

function artwork() {
    let elem4 = document.getElementById("gallery");
    elem4.style.gridTemplateAreas = '"a3 b1 b2 b3" "c1 c2 c3 d1" "d2 d3 a1 a2"';
};