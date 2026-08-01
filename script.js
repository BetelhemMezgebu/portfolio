// Scroll Animation

const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


hiddenElements.forEach((element)=>{

    observer.observe(element);

});