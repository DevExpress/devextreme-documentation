var nextParagraph = 0;
var paragraphCount = 20;

//Loads new content to scrollView if reload is true. Otherwise adds 5 paragraphs to scroll view.
loadScrollViewData = function (reload) {
    if (reload) {
        nextParagraph = 0;
        $("#textContainer").empty();
        paragraphCount = 20;
    }
    $.ajax({
        type: "POST",
        url: "/LoremService.asmx/LoremIpsum",
        data: JSON.stringify({ count: paragraphCount }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var targetParagraph = nextParagraph + 5 < paragraphCount ? nextParagraph + 5 : paragraphCount;
            while (nextParagraph < targetParagraph) {
                $("#textContainer").append("<p>" + data.d[nextParagraph] + "</p>");
                nextParagraph++;
            }
            $("#scrollView").dxScrollView("instance").release(false);
        }
    });
};

$("#scrollView").dxScrollView({
    onPullDown: function () {
        loadScrollViewData(true);
    },
    onReachBottom: function () {
        if (nextParagraph < paragraphCount)
            loadScrollViewData(false);
        else
            $("#scrollView").dxScrollView("instance").release(true);
    }
});

loadScrollViewData(true);