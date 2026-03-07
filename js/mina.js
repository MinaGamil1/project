
    /* 
    let landing = document.querySelector(".landing");

    let imgsArray=[ "1.jpg" , "5.jpg" ,  "6.jpg" ];
 */



/* setInterval(() => { 

    let randomnumber = Math.floor(Math.random() * imgsArray.length);

    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")';


} ,5000); */

let btn1 = document.querySelector('.btn-1');



let btn2 = document.querySelector('.btn-2');

let btn3 = document.querySelector('.btn-3');

let btn4 = document.querySelector('.btn-4');

let btn5 = document.querySelector('.btn-5');

let mega = document.querySelector('.mega-menu');

let btn6 =document.querySelector('.btn-6');

let links = document.querySelector('.nave');

btn1.addEventListener('click' ,() => {

    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")' ;
});

btn2.addEventListener('click' ,() => {
  
    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")' ;
});


btn3.addEventListener('click' ,() => {
  
    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")' ;
});


btn4.addEventListener('click' ,() => {
  
    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")' ;
});


btn5.addEventListener('click' ,() => {
  
    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    landing.style.backgroundImage = 'url("image/background/'+imgsArray[randomnumber]+'")' ;
});


let menuOpen = false;

btn6.addEventListener('click' , ()=>{
    if (menuOpen) {
        mega.style.opacity = "0";
        mega.style.zIndex = "-100";
        mega.style.top = "calc(100% + 1px)";
        menuOpen = false;
    } else {
        mega.style.opacity = "1";
        mega.style.zIndex = "100";
        mega.style.top = "calc(100% + 1px)";
        menuOpen = true;
    }
});


