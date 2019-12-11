var data = [
    { arg: 10, y1: 0, y2: 10 },
    { arg: 15, y1: 6, y2: 12 },
    { arg: 20, y1: 8, y2: 15 },
    { arg: 30, y1: 10, y2: 10 },
    { arg: 50, y1: 16, y2: 5 },
    { arg: 150, y1: 12, y2: 6 },
    { arg: 180, y1: 8, y2: 10 }
];

var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        var d = $.Deferred();
        setTimeout(function () {
            d.resolve(data);
        }, 5000);
        return d.promise();
    },
});

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        chart: {
            series: [
                { valueField: 'y1' },
                { valueField: 'y2' }
            ],
        },
        loadingIndicator: {
            show: true
        }
    });
    
    $('#showLoadingIndicatorButton').click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        rangeSelector.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        rangeSelector.hideLoadingIndicator();
    });
});