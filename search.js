var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var query = urlParams.get('s')
var isurl = query.slice(0, 5);

if (isurl == "https") {
  var query = query.slice(46, query.lenght);
  console.log(1);
}

if (query == "signal") {
  var query = "org.thoughtcrime.securesms";
}

$.ajax({
    url:'./reports/' + query + '.html',
    type:'HEAD',
    error: function()
    {
      $(".report").load("./reports/404.html");
    },
    success: function()
    {
    $(function(){
      $(".report").load("./reports/" + query + ".html");
      setTimeout(
        function()
        {
          var score = $(".score").html();
          if (score > 66) {
            $(".chart .dot").css({"background":"green"});
          } else if (score > 33) {
            $(".chart .dot").css({"background":"orange"});
          } else {
            $(".chart .dot").css({"background":"red"});
          }
          $(".score").html($(".score").html() + "/100");
        }, 100);
    });
    }
});
