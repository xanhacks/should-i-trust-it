$(".search-icon").click(function() {
  window.location = "./report.html?s=" + $(".search input").val();
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
      window.location = "./report.html?s=" + $(".search input").val();
      }
});
