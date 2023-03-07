function getPOTD (){
    var POTDURL = "https://api.nasa.gov/planetary/apod?api_key=HtijubiAOgIAt2267b0GcmJgmCM3ZouFNwKUWv8J";
    fetch(POTDURL).then(function (response) {
        
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        setImageBackground(data)
      })
}
getPOTD()

function setImageBackground(result){
    $( "body").css("background-image", "url(" + result.hdurl + ")");
}


