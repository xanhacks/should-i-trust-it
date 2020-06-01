var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var query = urlParams.get('s');
var query = query.toLowerCase();
var isurl = query.slice(0, 5);
$(".popup").hide();

function popup() {
  $(".popup").show();
}

function hide_popup() {
  $(".popup").hide();
}

if (isurl == "https") {
  var query = query.slice(46, query.lenght);
  console.log(1);
}

if (query == "signal") {
  var query = "org.thoughtcrime.securesms";
}

if (query == "whatsapp") {
  var query = "com.whatsapp";
}

if (query == "telegram") {
  var query = "org.telegram.messenger";
}

setTimeout(
  function()
  {
    var exodus = parseInt($(".1").html()) / 3 * 25;
    var policy = parseInt($(".2").html()) / 3 * 25;
    var cipher = parseInt($(".3").html()) / 3 * 17.5;
    var opensource = parseInt($(".4").html()) / 3 * 17.5;
    var company = parseInt($(".5").html()) / 3 * 15;
    var total = exodus + policy + cipher + opensource + company;
    $(".score").html(Math.round(total));
  }, 300);


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
        }, 300);
    });
    }
});
