

scrollDistance = ko.observable(200);

//Scrolls the widget content by the "scrollDistance" value
doScroll = function () {
    $("#scrollView").dxScrollView("instance").scrollBy(scrollDistance());
};

//Loads the scroll view content
$.ajax({
    type: "POST",
    url: "/LoremService.asmx/LoremIpsum",
    data: JSON.stringify({ count: Math.ceil(Math.random() * 30) }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        $.each(data.d, function (index, value) {
            $("#textContainer").append("<p>" + value + "</p>");
        });
    }
});