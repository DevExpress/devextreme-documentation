var tagBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
var flag = true;
var keyHandler = function () {
    if (flag) {
        $("#myTagBox").dxTagBox("instance").open();
        flag = false;
    }
    else {
        $("#myTagBox").dxTagBox("instance").close();
        flag = true;
    }
};

$(function () {
    $("#myTagBox").dxTagBox({
        dataSource: tagBoxData,
        placeholder: 'Select states',
        displayExpr: 'name',
        valueExpr: 'capital',
        focusStateEnabled: true
    });
    $("#myTagBox").dxTagBox("instance").registerKeyHandler('enter', keyHandler);
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            tagBoxData.store().insert(data[i]);
        }
        tagBoxData.load();
    }, "json")
});
