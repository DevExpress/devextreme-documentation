var keyHandler = function () {
    var zoomLevel = $("#myMap").dxMap("instance").option('zoom');
    $("#myMap").dxMap("instance").option('zoom', zoomLevel - 1);
};

$(function () {
    $("#myMap").dxMap({
        provider: "google",
        center: '40.749825, -73.987963',
        zoom: 22,
        focusStateEnabled: true
    });
    $("#myMap").dxMap("instance").registerKeyHandler('minus', keyHandler);
});
