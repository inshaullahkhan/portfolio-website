let nav = document.querySelector("nav");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick= function(){

    navBar.classList.add("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow =  "hidden";

}

cancelBtn.onclick= function(){

    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow =  "auto";

}

let navLinks = document.querySelectorAll("a");
for(var i=0; i<navLinks.length; i++){

    navLinks[i].addEventListener("click",function(){

        navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow =  "auto";



    })
}

const counters = document.querySelectorAll('.counter');
const speed = 100; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



// ****** Testimonials Sections ******




$('.slider').slick({
	
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true

  });
		  
$('.team-container').slick({

    dots: true,
    autoplay: true,
    infinite:true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true

});

//   ****** testimonials *******


