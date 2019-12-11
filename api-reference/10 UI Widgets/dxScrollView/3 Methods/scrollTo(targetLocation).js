scrollPosition = ko.observable(300);

//Scrolls the widget content to the "scrollPosition" position
doScroll = function () {
  $("#scrollView").dxScrollView("instance").scrollTo(scrollPosition());
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
