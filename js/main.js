let slides = document.querySelectorAll('#slides .slide');
let slides_md = document.querySelectorAll('#slides_md .slide');
let slides_sm = document.querySelectorAll('#slides_sm .slide');
let currentSlide = 0;
let paginators = document.querySelectorAll('#paginators .slider-paginator-item');
let paginators_md = document.querySelectorAll('#paginators_md .slider-paginator-item');
let currentpaginator = 0;
let next = document.getElementById('next');
let next_md = document.getElementById('next_md');
let next_sm = document.getElementById('next_sm');
let previous = document.getElementById('prev');
let previous_md = document.getElementById('prev_md');
let previous_sm = document.getElementById('prev_sm');
function nextSlide(size) {
    goToSlide(currentSlide+1,currentpaginator+1,size);

}

function previousSlide(size) {
    goToSlide(currentSlide-1,currentpaginator-1,size);
}

function goToSlide(n,m,size) {
    if (size==="lg"){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
        paginators[currentpaginator].className = 'slider-paginator-item';
        currentpaginator = (m+paginators.length)%paginators.length;
        paginators[currentpaginator].className = 'slider-paginator-item active';
        if(currentpaginator == 0){
            next.src="img/arrow_left_active.png"
            previous.src="img/arrow_right_disactive.png"
        }
        else if(currentpaginator == slides.length-1){
            next.src="img/arrow_left_disactive.png";
            previous.src="img/arrow_right_active.png"
        } else {
            next.src="img/arrow_left_active.png"
            previous.src="img/arrow_right_active.png"
        }

    } else if (size==="md"){
        slides_md[currentSlide].className = 'slide';
        currentSlide = (n+slides_md.length)%slides_md.length;
        slides_md[currentSlide].className = 'slide showing';
        paginators_md[currentpaginator].className = 'slider-paginator-item';
        currentpaginator = (m+paginators_md.length)%paginators_md.length;
        paginators_md[currentpaginator].className = 'slider-paginator-item active';
        if(currentpaginator == 0){
            next_md.src="img/arrow_left_active.png"
            previous_md.src="img/arrow_right_disactive.png"
        }
        else if(currentpaginator == slides_md.length-1){
            next_md.src="img/arrow_left_disactive.png";
            previous_md.src="img/arrow_right_active.png"
        } else {
            next_md.src="img/arrow_left_active.png"
            previous_md.src="img/arrow_right_active.png"
        }
    }
    else {
        slides_sm[currentSlide].className = 'slide';
        currentSlide = (n+slides_sm.length)%slides_sm.length;
        slides_sm[currentSlide].className = 'slide showing';
        if(currentSlide == 0){
            next_sm.src="img/arrow_left_active.png"
            previous_sm.src="img/arrow_right_disactive.png"
        }
        else if(currentSlide == slides_sm.length-1){
            next_sm.src="img/arrow_left_disactive.png";
            previous_sm.src="img/arrow_right_active.png"
        } else {
            next_sm.src="img/arrow_left_active.png"
            previous_sm.src="img/arrow_right_active.png"
        }
    }

}

next.onclick = function() {
    nextSlide("lg");
};
previous.onclick = function() {
    previousSlide("lg");
    console.log(10000);
};
paginators.forEach((i,k)=>{
    i.onclick=()=>{
        console.log(111110000)
        goToSlide(k,k,"lg")
    }
});
next_md.onclick = function() {
    nextSlide("md");
};
next_sm.onclick = function() {
    nextSlide("sm");
};

previous_md.onclick = function() {
    previousSlide("md");
};
previous_sm.onclick = function() {
    previousSlide("sm");
};


paginators_md.forEach((i,k)=>{
    i.onclick=()=>{
        goToSlide(k,k,"md")
    }
});
