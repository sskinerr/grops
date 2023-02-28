let date, code;

clock(); setInterval("clock()", 1000);

function clock(){
date = new Date;

if(date.getDate() < 10){
document.querySelector("#day").innerHTML = "0" + date.getDate();}else{
document.querySelector("#day").innerHTML = date.getDate();}

if(date.getMonth() + 1 < 10){
document.querySelector("#month").innerHTML = "0" + (date.getMonth()+1);}else{
document.querySelector("#month").innerHTML = date.getMonth()+1;}

document.querySelector("#year").innerHTML = date.getFullYear();

if(date.getHours() < 10){
document.querySelector("#hour").innerHTML = "0" + date.getHours();}else{
document.querySelector("#hour").innerHTML = date.getHours();}

if(date.getMinutes() + 1 < 10){
document.querySelector("#minute").innerHTML = "0" + (date.getMinutes());}else{
document.querySelector("#minute").innerHTML = date.getMinutes()+1;}


/*
if(date.getHours() >= 8 && date.getMinutes() >= 30 && date.getHours() <= 10 && date.getMinutes() < 5){
document.querySelector("#para").innerHTML = "Перша пара";
}else if(date.getHours() >= 10 && date.getMinutes() >= 20 && date.getHours() <= 11 && date.getMinutes() < 55){
document.querySelector("#para").innerHTML = "Друга пара";
}else if(date.getHours() >= 12 && date.getMinutes() >= 10 && date.getHours() <= 13 && date.getMinutes() < 45){
document.querySelector("#para").innerHTML = "Третя пара";
}else if(date.getHours() >= 14 && date.getMinutes() >= 15 && date.getHours() <= 15 && date.getMinutes() < 50){
document.querySelector("#para").innerHTML = "Четверта пара";
}else if(date.getHours() >= 16 && date.getMinutes() >= 0 && date.getHours() <= 17 && date.getMinutes() < 35){
document.querySelector("#para").innerHTML = "П'ята пара";
}else if(date.getHours() >= 17 && date.getMinutes() >= 40 && date.getHours() <= 19 && date.getMinutes() < 15){
document.querySelector("#para").innerHTML = "Шоста пара";
}else if(date.getHours() >= 19 && date.getMinutes() >= 20 && date.getHours() <= 20 && date.getMinutes() < 55){
document.querySelector("#para").innerHTML = "Сьома пара";
}else{document.querySelector("#para").innerHTML = "Триває перерва";}
*/

console.log("1");}



let tr1 = localStorage.getItem("tr1"); trr1(); trr1();
let tr2 = localStorage.getItem("tr2"); trr2(); trr2();
let tr3 = localStorage.getItem("tr3"); trr3(); trr3();
let tr4 = localStorage.getItem("tr4"); trr4(); trr4();
let tr5 = localStorage.getItem("tr5"); trr5(); trr5();
let tr6 = localStorage.getItem("tr6"); trr6(); trr6();
let tr7 = localStorage.getItem("tr7"); trr7(); trr7();
let tr8 = localStorage.getItem("tr8"); trr8(); trr8();
let tr9 = localStorage.getItem("tr9"); trr9(); trr9();
let tr10 = localStorage.getItem("tr10"); trr10(); trr10();
let tr11 = localStorage.getItem("tr11"); trr11(); trr11();
let tr12 = localStorage.getItem("tr12"); trr12(); trr12();
let tr13 = localStorage.getItem("tr13"); trr13(); trr13();
let tr14 = localStorage.getItem("tr14"); trr14(); trr14();
let tr15 = localStorage.getItem("tr15"); trr15(); trr15();
let tr16 = localStorage.getItem("tr16"); trr16(); trr16();
let tr17 = localStorage.getItem("tr17"); trr17(); trr17();
let tr18 = localStorage.getItem("tr18"); trr18(); trr18();
let tr19 = localStorage.getItem("tr19"); trr19(); trr19();
let tr20 = localStorage.getItem("tr20"); trr20(); trr20();

function trr1(){if(tr1 != 1){
document.querySelector("#tr1").className = "ye";
document.querySelector("#td1").innerHTML = "Присутній";
tr1 = 1;
localStorage.setItem("tr1",1);
}else{
document.querySelector("#tr1").className = "nema";
document.querySelector("#td1").innerHTML = "Відсутній";
tr1 = 0;
localStorage.setItem("tr1",0);}}

function trr2(){if(tr2 != 1){
document.querySelector("#tr2").className = "ye";
document.querySelector("#td2").innerHTML = "Присутній";
tr2 = 1;
localStorage.setItem("tr2",1);
}else{
document.querySelector("#tr2").className = "nema";
document.querySelector("#td2").innerHTML = "Відсутній";
tr2 = 0;
localStorage.setItem("tr2",0);}}

function trr3(){if(tr3 != 1){
document.querySelector("#tr3").className = "ye";
document.querySelector("#td3").innerHTML = "Присутній";
tr3 = 1;
localStorage.setItem("tr3",1);
}else{
document.querySelector("#tr3").className = "nema";
document.querySelector("#td3").innerHTML = "Відсутній";
tr3 = 0;
localStorage.setItem("tr3",0);}}

function trr4(){if(tr4 != 1){
document.querySelector("#tr4").className = "ye";
document.querySelector("#td4").innerHTML = "Присутній";
tr4 = 1;
localStorage.setItem("tr4",1);
}else{
document.querySelector("#tr4").className = "nema";
document.querySelector("#td4").innerHTML = "Відсутній";
tr4 = 0;
localStorage.setItem("tr4",0);}}

function trr5(){if(tr5 != 1){
document.querySelector("#tr5").className = "ye";
document.querySelector("#td5").innerHTML = "Присутній";
tr5 = 1;
localStorage.setItem("tr5",1);
}else{
document.querySelector("#tr5").className = "nema";
document.querySelector("#td5").innerHTML = "Відсутній";
tr5 = 0;
localStorage.setItem("tr5",0);}}

function trr6(){if(tr6 != 1){
document.querySelector("#tr6").className = "ye";
document.querySelector("#td6").innerHTML = "Присутній";
tr6 = 1;
localStorage.setItem("tr6",1);
}else{
document.querySelector("#tr6").className = "nema";
document.querySelector("#td6").innerHTML = "Відсутній";
tr6 = 0;
localStorage.setItem("tr6",0);}}

function trr7(){if(tr7 != 1){
document.querySelector("#tr7").className = "ye";
document.querySelector("#td7").innerHTML = "Присутній";
tr7 = 1;
localStorage.setItem("tr7",1);
}else{
document.querySelector("#tr7").className = "nema";
document.querySelector("#td7").innerHTML = "Відсутній";
tr7 = 0;
localStorage.setItem("tr7",0);}}

function trr8(){if(tr8 != 1){
document.querySelector("#tr8").className = "ye";
document.querySelector("#td8").innerHTML = "Присутній";
tr8 = 1;
localStorage.setItem("tr8",1);
}else{
document.querySelector("#tr8").className = "nema";
document.querySelector("#td8").innerHTML = "Відсутній";
tr8 = 0;
localStorage.setItem("tr8",0);}}

function trr9(){if(tr9 != 1){
document.querySelector("#tr9").className = "ye";
document.querySelector("#td9").innerHTML = "Присутній";
tr9 = 1;
localStorage.setItem("tr9",1);
}else{
document.querySelector("#tr9").className = "nema";
document.querySelector("#td9").innerHTML = "Відсутній";
tr9 = 0;
localStorage.setItem("tr9",0);}}

function trr10(){if(tr10 != 1){
document.querySelector("#tr10").className = "ye";
document.querySelector("#td10").innerHTML = "Присутній";
tr10 = 1;
localStorage.setItem("tr10",1);
}else{
document.querySelector("#tr10").className = "nema";
document.querySelector("#td10").innerHTML = "Відсутній";
tr10 = 0;
localStorage.setItem("tr10",0);}}

function trr11(){if(tr11 != 1){
document.querySelector("#tr11").className = "ye";
document.querySelector("#td11").innerHTML = "Присутній";
tr11 = 1;
localStorage.setItem("tr11",1);
}else{
document.querySelector("#tr11").className = "nema";
document.querySelector("#td11").innerHTML = "Відсутній";
tr11 = 0;
localStorage.setItem("tr11",0);}}

function trr12(){if(tr12 != 1){
document.querySelector("#tr12").className = "ye";
document.querySelector("#td12").innerHTML = "Присутній";
tr12 = 1;
localStorage.setItem("tr12",1);
}else{
document.querySelector("#tr12").className = "nema";
document.querySelector("#td12").innerHTML = "Відсутній";
tr12 = 0;
localStorage.setItem("tr12",0);}}

function trr13(){if(tr13 != 1){
document.querySelector("#tr13").className = "ye";
document.querySelector("#td13").innerHTML = "Присутній";
tr13 = 1;
localStorage.setItem("tr13",1);
}else{
document.querySelector("#tr13").className = "nema";
document.querySelector("#td13").innerHTML = "Відсутній";
tr13 = 0;
localStorage.setItem("tr13",0);}}

function trr14(){if(tr14 != 1){
document.querySelector("#tr14").className = "ye";
document.querySelector("#td14").innerHTML = "Присутній";
tr14 = 1;
localStorage.setItem("tr14",1);
}else{
document.querySelector("#tr14").className = "nema";
document.querySelector("#td14").innerHTML = "Відсутній";
tr14 = 0;
localStorage.setItem("tr14",0);}}

function trr15(){if(tr15 != 1){
document.querySelector("#tr15").className = "ye";
document.querySelector("#td15").innerHTML = "Присутній";
tr15 = 1;
localStorage.setItem("tr15",1);
}else{
document.querySelector("#tr15").className = "nema";
document.querySelector("#td15").innerHTML = "Відсутній";
tr15 = 0;
localStorage.setItem("tr15",0);}}

function trr16(){if(tr16 != 1){
document.querySelector("#tr16").className = "ye";
document.querySelector("#td16").innerHTML = "Присутній";
tr16 = 1;
localStorage.setItem("tr16",1);
}else{
document.querySelector("#tr16").className = "nema";
document.querySelector("#td16").innerHTML = "Відсутній";
tr16 = 0;
localStorage.setItem("tr16",0);}}

function trr17(){if(tr17 != 1){
document.querySelector("#tr17").className = "ye";
document.querySelector("#td17").innerHTML = "Присутній";
tr17 = 1;
localStorage.setItem("tr17",1);
}else{
document.querySelector("#tr17").className = "nema";
document.querySelector("#td17").innerHTML = "Відсутній";
tr17 = 0;
localStorage.setItem("tr17",0);}}

function trr18(){if(tr18 != 1){
document.querySelector("#tr18").className = "ye";
document.querySelector("#td18").innerHTML = "Присутній";
tr18 = 1;
localStorage.setItem("tr18",1);
}else{
document.querySelector("#tr18").className = "nema";
document.querySelector("#td18").innerHTML = "Відсутній";
tr18 = 0;
localStorage.setItem("tr18",0);}}

function trr19(){if(tr19 != 1){
document.querySelector("#tr19").className = "ye";
document.querySelector("#td19").innerHTML = "Присутній";
tr19 = 1;
localStorage.setItem("tr19",1);
}else{
document.querySelector("#tr19").className = "nema";
document.querySelector("#td19").innerHTML = "Відсутній";
tr19 = 0;
localStorage.setItem("tr19",0);}}

function trr20(){if(tr20 != 1){
document.querySelector("#tr20").className = "ye";
document.querySelector("#td20").innerHTML = "Присутній";
tr20 = 1;
localStorage.setItem("tr20",1);
}else{
document.querySelector("#tr20").className = "nema";
document.querySelector("#td20").innerHTML = "Відсутній";
tr20 = 0;
localStorage.setItem("tr20",0);}}
