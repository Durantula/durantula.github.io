$(function() {

  

  $( document ).ready(function() {

    $("#heading-fade").animate({
      opacity: 1,
    }, 1500 );
    $("#subheading-fade").animate({
      opacity: 1,
    }, 1500 );
  });


  var snailPace = (1000 * 60 * 60 * 24 * 5)
  var snail = $("#load-fundme")  
  var speedy = $("#load-amount");

  snailLoaderAnimate(snail)
  loaderAnimate(speedy)


  function snailLoaderAnimate(self){
    self.animate({
      width: 300
    }, snailPace, function() {
      // Animation complete.
      $("#snail-track").text("Done");
      setTimeout(function() { loop(self) }, 2000);
      
    });
  }

  function loaderAnimate(self){
    self.animate({
      width: 300
    }, 1000, function() {
      // Animation complete.
      $("#speedy-track").text("Instant");
      $("#moneyWings").show();
      setTimeout(function() { loop(self) }, 2000);
      
    });
  }

  function loop(self){
    $("#moneyWings").hide();
    $("#speedy-track").text("1s");
    self.css({width: 0})
    loaderAnimate(self)
  }

  // Set the date we're counting down to
  var countDownDate = new Date().getTime() + (5 *86400000);


  // Update the count down every 1 second
  setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Display the result in the element with id="demo"
    $("#snail-track").text(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");

  }, 1000);


  // setInterval(function() {
  //   console.log("yippe")
  //   $("#speedy-track").text(seconds + "s ");

  //   seconds = seconds - 1;

  // }, 1000);


 


})