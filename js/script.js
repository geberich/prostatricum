/*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
  
  document.querySelector('.copyright-year').textContent = new Date().getFullYear();

  var fullTime = new Date().getTime() + 13500000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
        		'<span class="time time_hours">%H</span>:'
            +'<span class="time time_minutes">%M</span>:'
            +'<span class="time time_seconds">%S</span>'));
    })});

/*---dropdown---*/

$(function() {

$('.dropdown-toggle').click(function(){
  $(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropdown').hide();
  }
});
});

/*---header---*/

var options = {
  offset: '#showHere'
}

var header = new Headhesive('.header_fixed', options);

/*---slowscroll--*/

$(document).ready(function(){
  $('a[href^="#"]').click(function(){
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
      $('body').animate( { scrollTop: destination }, 700 );
    } else{
        $('html').animate( {scrollTop: destination}, 700 );
    }
    return false;
  });
});