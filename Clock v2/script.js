function DigitalClock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var hour = today.getHours();
    var ampm = 'AM';
    if(h>11) ampm = 'PM';
    if(h > 11) h = h - 12;
    if(h == 0) h = 12;
    if(h < 10) h = '0' + h;
    if(hour < 10) hour = '0' + hour;
    if(m < 10) m = '0' + m;
    if(s < 10) s = '0' + s;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('hour-24').innerHTML = hour;
    document.getElementById('minutes-24').innerHTML = m;
    document.getElementById('seconds-24').innerHTML = s;
}
function AnalogClock(){
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    let today = new Date();
    let hh = today.getHours() * 30;
    let mm = today.getMinutes() * 6;
    let ss = today.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}
setInterval(DigitalClock, 1000);
setInterval(AnalogClock, 1000);
const btn = document.querySelector(".btn");
const ClockTwelve = document.querySelector('.clock12');
const ClockTwentyfour = document.querySelector('.clock24');
const change = document.querySelector('.change');
const ClockDigital = document.querySelector('.digi-con');
const ClockAnalog = document.querySelector('.analog-con');

btn.addEventListener('click', function(){
    ClockTwentyfour.classList.toggle('hide');
    ClockTwelve.classList.toggle('hide');
});
change.addEventListener('click', function(){
    ClockDigital.classList.toggle('hide');
    ClockAnalog.classList.toggle('hide');
});
