// 使用動畫連結錨點
$(function () {

           $('a[href*=#]:not([href=#])').click(function() {

               var target = $(this.hash);

               $('html,body').animate({

                   scrollTop: target.offset().top

               }, 1000);

               return false;
           }); 
       });



// youtube 撥放器
$(document).ready(function() {
// Gets the video src from the data-src on each button
var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
  
// when the modal is opened autoplay it  
$('#mimimp4').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  
// stop playing the youtube video when I close the modal
$('#mimimp4').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
})      
// document ready  
});



$("#ajaxForm").submit(function(e){
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    contentType: "multipart/form-data",
    processData: false,
    contentType: false,
    headers: {
      "Accept": "application/json"
    }
  }).done(function() {
     $('.success').addClass('is-active');
  }).fail(function() {
     alert('An error occurred please try again later.')
  });
});
