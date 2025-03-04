var settings = {
  "url": "https://api.iamobaro.com/visitor",
  "method": "POST",
};
$.ajax(settings).done(function (response) {
  $("#uv" ).text(response.unique_visits);      
  $("#nv" ).text(response.visits);
});
