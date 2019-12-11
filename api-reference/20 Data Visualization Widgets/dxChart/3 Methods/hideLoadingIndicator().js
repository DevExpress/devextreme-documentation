var data = [
    { year: 2010, europe: 728, americas: 935, africa: 982 },
    { year: 2000, europe: 730, americas: 836, africa: 797 },
    { year: 1990, europe: 721, americas: 721, africa: 623 },
    { year: 1980, europe: 694, americas: 614, africa: 471 },
    { year: 1970, europe: 656, americas: 513, africa: 361 },
    { year: 1960, europe: 605, americas: 417, africa: 283 },
    { year: 1950, europe: 546, americas: 332, africa: 227 }
];

var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        var d = $.Deferred();
        setTimeout(function () {
            d.resolve(data);
        }, 5000);
        return d.promise();
    }
});

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            label: {
                visible: true,
                connector: { visible: true }
            }
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        loadingIndicator: {
            show: true
        }
    });

    $('#showLoadingIndicatorButton').click(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.hideLoadingIndicator();
    });
});