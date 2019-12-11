$(function () {
    $("#myList").dxList({
        dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
            itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
        },
        focusStateEnabled: true
    });
    $("#myList").dxList("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key is pressed", "success", 1500) });
});