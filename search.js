var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var query = urlParams.get('s')
var isurl = query.slice(0, 5);

if (isurl == "https") {
  var query = query.slice(46, query.lenght);
  console.log(1);
}

alert(query);
