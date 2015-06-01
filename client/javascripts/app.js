var evntHandler = function() {

    var prefixURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    var suffixURL = "&format=json&jsoncallback=?";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").html("");

    var displayImg = function(index) {

        $.getJSON(requestURL, function(flickrResponse) {
            var photoArr = flickrResponse.items;
            
            var $img = $("<img>").hide();
            $img.attr('src', photoArr[index].media.m).hide();
          	$(".photos").empty();
            $("main .photos").append($img);
            $img.fadeIn();

            setTimeout(function() {
                index = (index + 1) % 20;
                displayImg(index);
            }, 1000);
        });
    };
    displayImg(0);
};

$("button").on("click", evntHandler);
