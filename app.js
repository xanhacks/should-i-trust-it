$(".search-icon").click(function() {
  window.location = "./search.html?s=" + $(".search input").val();
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
      window.location = "./search.html?s=" + $(".search input").val();
      }
});
