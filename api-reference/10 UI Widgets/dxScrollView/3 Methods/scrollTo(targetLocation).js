$(function () {
    var scrollPosition = 300;
    $("#scrollViewContainer").dxScrollView();
    $("#numberBoxContainer").dxNumberBox({
        value: scrollPosition,
        min: 0,
        max: 5000,
        onValueChanged: function (e) {
            scrollPosition = e.value;
        }
    });
    $("#buttonContainer").dxButton({
        text: 'Scroll to',
        onClick: function () {
            $("#scrollViewContainer").dxScrollView("instance").scrollTo(scrollPosition);
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