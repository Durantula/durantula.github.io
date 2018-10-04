$(function() {

  $(".dropdown-exit").on("click", function(e){
    e.preventDefault();
    $("#content").removeClass("blurEverything");
    $("#nav-icon1").dropdown("toggle");
    return false;
  })

  $("#nav-icon1").on("click", function(){
    $("#content").addClass("blurEverything");
  })
  

  $(".video-exit, .video-content, .video-header").on("click",function(){
    $("#content").removeClass("blurEverything");
    $(".navbar").removeClass("blurEverything");
    $(".video").fadeOut();
  })

  $(".logo-action").on("click",function(){
    $("#content").addClass("blurEverything");
    $(".navbar").addClass("blurEverything");
  
    $(".video").fadeIn();
   
  })
  
//
//   $('.base-lead-form').on('submit', function(event) {
//     var that = this
//     event.preventDefault();
//     var data = $("input", this).serializeArray();
//
//     $.ajax({
//       url: $(this).attr('action'),
//       type: "POST",
//       data: $(this).serialize(),
//     }).done(function() {
//       $(that.id+'.unsubmitted').hide();
//       $(that.id+'.submitted').show();
//     }).fail(function(xhr) {
//       alert(xhr.responseText)
//     });
//   });
//
//   $('.pricing-plans .number-of-staff-slider').on('input', function(e) {
//     var costOfEmployee = 60; // 60$ per hour for a fully laden employee (benefits etc)
//     var workWeeksPerYear = 52; // full time employee is paid for all weeks in the year
//
//     var licenses = $(this).val()
//     $('.number-of-staff .val').text(licenses);
//     $('.pricing-plans .number-of-staff-slider').val(licenses);
//     $('.pricing-block .plan-button a').each(function(i, el) {
//       var url = $(el).uri().setSearch("licenses", licenses);
//       $(el).attr('href', url.toString());
//     });
//
//     if (licenses == "30") {
//       $('.pricing-block .inner').addClass('s30');
//     } else {
//       $('.pricing-block .inner').removeClass('s30');
//     }
//
//     var calcCostPerLicense = function(licenses, monthlySpend) {
//       return monthlySpend / licenses;
//     }
//
//     var calcMonthlySpend = function(licenses, basePrice) {
//       var lt10 = Math.min(10, licenses);
//       var lt20 = Math.min(10, licenses - lt10);
//       var gt20 = licenses - lt10 - lt20;
//
//       return lt10 * basePrice + lt20 * basePrice * 0.7 + gt20 * basePrice * 0.5;
//     }
//
//     var calcHoursPerMonth = function(costPerLicense) {
//       var hoursPerMonth = costPerLicense / costOfEmployee;
//       var weeksPerMonth = workWeeksPerYear / 12;
//       return hoursPerMonth / weeksPerMonth;
//     }
//
//     $('div[data-plan]').each(function(i, el) {
//       var planName = $(this).data('plan');
//       var basePrice = $(this).data('base-price');
//
//       var monthlySpend = parseInt(calcMonthlySpend(licenses, basePrice));
//       var costPerLicense = parseInt(calcCostPerLicense(licenses, monthlySpend));
//       var hoursPerMonth = calcHoursPerMonth(costPerLicense);
//
//       $('.pricing-' + planName + ' .cost-per-license .val').text(costPerLicense);
//       $('.pricing-' + planName + ' .monthly-spend .val').text(monthlySpend);
//       $('.pricing-' + planName + ' .hours-per-month .val').text(hoursPerMonth.toFixed(1));
//     });
//
//   });
//
//   $('.scroll-down').click(function() {
//     $('html, body').animate({
//       scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
//   });
//
//   $('.mobile-menu').click(function() {
//     $(this).toggleClass("open");
//     $('.navbar-nav').slideToggle();
//   });
//
//   $(window).on("resize", function () {
//     if ($(window).width() > 767) {
//       $(".mobile-menu").removeClass("open");
//     } else {
//       if(!$(".mobile-menu").hasClass("open")){
//         $(".navbar-nav").hide();
//       }
//     }
//   });
//
//   $('#lightSlider-field').lightSlider({
//     item: 4,
//     auto: true,
//     slideMove: 2,
//     loop: true,
//     pager: true,
//     controls: false,
//     responsive: [
//         { breakpoint:767, settings: { item: 3 } },
//         { breakpoint:480, settings: { item: 2 } }
//     ]
//   });
//
//   $('#lightSlider-facilities').lightSlider({
//     item: 4,
//     slideMove:2,
//     loop: false,
//     pager: true,
//     controls: false,
//     responsive : [
//         { breakpoint:767, settings: { item: 3 } },
//         { breakpoint:480, settings: { item: 2 } }
//     ]
//   });
//
//   $('body.section-home .home-network .item ul li img').click(function() {
//
//   });
//
  $('.fs-feature-grid div.inner').click(function() {
    $('.fs-feature-detail .container').removeClass('active');
    $(".fs-feature-detail #" + $(this).data('title')).addClass('active');
  });
});

$(".capability-select").on('click', function(e){
  name = $(this)[0].innerHTML;
  $("#dropdownMenuButton")[0].innerHTML = name;
  parent = $(this).closest(".dropdown");
  parent.find(".active").removeClass("active");
  $(this).addClass("active");
  change_capability_image($(this)[0].tabIndex);

})


function change_capability_image(tab_index){
  id = "#capability" + tab_index
  content = $(id)[0].innerHTML;
  $("#capability_dynamic")[0].innerHTML = content;
}

$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  


$('textarea').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('textarea').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  
var tabs = $('.tabs');
var items = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});

// jQuery(window).on('load', function(){
//   console.log("made it");
//   jQuery(".product-flat").animate({"right": "0px", "opacity": "1"}, 1500)

// })
// opacity: 1; transform: translate(-50%, -50%) scale(1) perspective(2038px) rotateY(33deg) rotateX(12deg);


// setInterval('reviewAnimation()',10000)

$(".customer-review").on("click", function(){
  reviewAnimation();
})


function reviewAnimation(){
  reviews = $(".customer-review")
  reviews.each(function(){
    tabIndex = $(this)[0].tabIndex;
    $(this)[0].tabIndex = (tabIndex + 1) % 4
    newTab = $(this)[0].tabIndex;
    switch(newTab) {
      case 0:
          first = $(this);
          break;
      case 1:
          fourth = $(this);
          break;
      case 2:
          third = $(this);
          break;
      case 3: 
          second = $(this);
      default:
    }
  })
  first.css({"z-index": "4"})
  second.css({"z-index": "3"})
  third.css({"z-index": "2"})
  fourth.css({"z-index": "1"})
  // recycleContent = first.contents();

  first.addClass("rotateXTransition fastOpacity");
  second.animate({"left": "0px", "top": "0px"}, 400);
  third.animate({"left": "-20px", "top": "-20px"}, 400);
  fourth.animate({"left": "-40px", "top": "-40px", "opacity": "1"}, 400);
  setTimeout(function() {
    first.removeClass().addClass("customer-review").css({"left": "-60px", "top": "-60px", "opacity": "0"})
  }, 300);
}

  
