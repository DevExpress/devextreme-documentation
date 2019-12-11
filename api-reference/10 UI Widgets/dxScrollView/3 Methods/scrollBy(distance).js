$(function () {
    var scrollDistance = 200;
    $("#scrollViewContainer").dxScrollView();
    $("#numberBoxContainer").dxNumberBox({
        value: scrollDistance,
        min: -1000,
        max: 1000,
        onValueChanged: function (e) {
            scrollDistance = e.value;
        }
    });
    $("#buttonContainer").dxButton({
        text: 'Scroll by',
        onClick: function () {
            $("#scrollViewContainer").dxScrollView("instance").scrollBy(scrollDistance);
        }
    });

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
});