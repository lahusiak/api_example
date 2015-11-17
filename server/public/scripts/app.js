$(document).ready(function() {
    gameSearch();
});

function gameSearch() {
    var apikey = "6f68ae181e9edaf52307655da892446fafe34326";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            console.log(data);
        }
    });

}

function searchCallback(data) {
    console.log(data);
}