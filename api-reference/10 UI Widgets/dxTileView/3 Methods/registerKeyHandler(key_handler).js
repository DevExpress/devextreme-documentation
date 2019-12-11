var tileViewDataSource = new DevExpress.data.DataSource({
    store: [],
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$(function () {
    $("#myTileView").dxTileView({
        dataSource: tileViewDataSource,
        itemMargin: 20,
        baseItemHeight: 130,
        baseItemWidth: 180,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.addClass("tile");
            itemElement.append('<p style="font-size:larger;"><b>' + itemData.name + '</b></p>');
            itemElement.append('<img style="margin: 5px;" src="' + itemData.imagePath + '"/>');
            itemElement.append('<p>Capital: <i>' + itemData.capital + '</i></p>');
        },
        focusStateEnabled: true
    });
    $("#myTileView").dxTileView("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key is pressed", "success", 1500) });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++)
            tileViewDataSource.store().insert(data[i]);
        tileViewDataSource.load();
    }, "json");
});
