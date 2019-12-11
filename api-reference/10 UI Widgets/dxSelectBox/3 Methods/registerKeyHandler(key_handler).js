var selectBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
var flag = true;
var keyHandler = function () {
    if (flag) {
        $("#mySelectBox").dxSelectBox("instance").open();
        flag = false;
    }
    else {
        $("#mySelectBox").dxSelectBox("instance").close();
        flag = true;
    }
};

$(function () {
    $("#mySelectBox").dxSelectBox({
        dataSource: selectBoxData,
        placeholder: 'Select a state',
        displayExpr: 'name',
        valueExpr: 'capital',
        focusStateEnabled: true
    });
    $("#mySelectBox").dxSelectBox("instance").registerKeyHandler('enter', keyHandler);
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            selectBoxData.store().insert(data[i]);
        }
        selectBoxData.load();
    }, "json")
});