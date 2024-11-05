// let mybutton = document.getElementById("service_block");
var servicetab = document.querySelectorAll("button.e-n-tab-title");
console.log(servicetab);
setTimeout(function() {
servicetab.forEach(function(tab) {
if (tab.getAttribute('aria-selected') === 'true') {
    tab.setAttribute("aria-selected", "false");
    //tab.click();
}

});
}, 1000);
//     var servicecontentblock = document.querySelectorAll(".service_content_block");
//       window.onload = function(){
//     if(servicetab.getAttribute("aria-selected") === "true") {
//         servicetab.setAttribute("aria-selected", "false");
//         if(servicecontentblock.hasClass('e-active')) {
//             servicecontentblock.removeClass("e-active")
//         }
//     }

// };
// 	  servicetab.addEventListener("click", function() {
//         if(btn.getAttribute("aria-selected") == "false") {
//             btn.setAttribute("aria-selected", "true");
//             servicecontentblock.addClass("e-active")
//         }
//     });

var thumbSlider = new Swiper(".thumb_slider", {
spaceBetween: 14,
slidesPerView: 1,
freeMode: true,
watchSlidesProgress: true,

breakpoints: {
    400: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 35,
  },
},
});



var mainSlider = new Swiper(".main_slider", {
spaceBetween: 10,
speed: 1000,
delay: 300,
autoplay: true,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
thumbs: {
  swiper: thumbSlider,
},

});


// Get the button
let mybutton = document.getElementById("back_to_top_block");
let header = document.getElementById("top_menu")
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    header.style.backgroundColor = "#0B588D";
    header.style.paddingTop = "10px";
    header.style.paddingBottom = "10px";
  } else {
    mybutton.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.paddingTop = "20px";  // Reset to original top padding
    header.style.paddingBottom = "20px"; 
  }

}
// When the user clicks on the button, scroll to the top of the document
const backtotop = document.querySelectorAll(".back_to_top_ic");

backtotop.forEach(button => {
    button.addEventListener("click", topFunction);
});

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
jQuery(document).ready(function() {
  // Function to scroll to the target element with an offset
  function scrollToTarget(target, offset) {
    jQuery('html, body').animate({
          scrollTop: jQuery(target).offset().top - offset
      }, 1000); // The duration of the scroll animation in milliseconds
  }

  // Check if the URL hash is #consultations
  if (window.location.hash === '#elementor-tab-title-2642') {
    var jQuerytargetElement = jQuery('#elementor-tab-title-2642');
      jQuerytargetElement.click(); // Trigger click event
      scrollFunction();
      var offset = -100; // Adjust this value to set your desired offset
      scrollToTarget('#elementor-tab-title-2642', offset);
  }
});
