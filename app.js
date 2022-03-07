$(document).ready(function(){
 
  var typed = new Typed(".typing", {
      strings: ["YouTuber", "Full Stack Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["YouTuber", "Full Stack Developer",  "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled')
  })


  
});
