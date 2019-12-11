var maxIndex = 3;
var keyHandler = function () {
    var curIndex = $("#myGallery").dxGallery("instance").option("selectedIndex"),
        index = curIndex + 1;
    if (curIndex === maxIndex) {
        index = 0;
    }
    $("#myGallery").dxGallery("instance").option("selectedIndex", index);

};
$(function () {
    $("#myGallery").dxGallery({
        dataSource: [
            "/Content/images/doc/16_2/PhoneJS/person1.png",
            "/Content/images/doc/16_2/PhoneJS/person2.png",
            "/Content/images/doc/16_2/PhoneJS/person3.png",
            "/Content/images/doc/16_2/PhoneJS/person4.png"
        ],
        width: '100%',
        height: 370,
        focusStateEnabled: true
    });
    $("#myGallery").dxGallery("instance").registerKeyHandler('enter', keyHandler);
});