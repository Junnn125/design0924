// 슬라이드 1
slideIndex = 1;
showslides(slideIndex);

function showslides(n){
    slides = document.getElementsByClassName("sl_1");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    if(n>slides.length){ slideIndex = 1; }
    if(n<1){ slideIndex = slides.length; }
    slides[slideIndex-1].style.display="block";
    dots = document.getElementsByClassName("box");
    for(i=0; i<dots.length; i++){
        dots[i].classList.remove("active");
    }
    dots[slideIndex-1].classList.add("active");
}

function nextslide(n){
showslides(slideIndex+=n);
}
function point(n){
    showslides(slideIndex = n);
}
id =setInterval("nextslide(1);",5000);



//슬라이드 2

slideIndex2 = 1;
showslides2(slideIndex2);


function showslides2(n){
    slides = document.getElementsByClassName("sl_3");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    if(n>slides.length){ slideIndex2 = 1; }
    if(n<1){ slideIndex2 = slides.length; }
    slides[slideIndex2-1].style.display="block";
    dots = document.getElementsByClassName("box");
    for(i=0; i<dots.length; i++){
        dots[i].classList.remove("active");
    }
    dots[slideIndex2-1].classList.add("active");
}
function point_2(n){
    showslides2(slideIndex2 = n);
}
function nextslide2(n){
    showslides2(slideIndex2+=n);
    }

id_2 =setInterval("nextslide2(1);",5000);
