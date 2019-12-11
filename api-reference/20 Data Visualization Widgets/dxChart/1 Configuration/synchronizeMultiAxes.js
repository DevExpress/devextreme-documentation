var dataSource = [
    { time: 'January', food: 3970, capital: 15366, auto: 7818, goods: 9064, total: 36218 },
    { time: 'March', food: 3875, capital: 15297, auto: 7518, goods: 9147, total: 35837 },
    { time: 'June', food: 4181, capital: 15957, auto: 7603, goods: 9311, total: 37052 },
    { time: 'August', food: 3826, capital: 15706, auto: 8046, goods: 9342, total: 36920 },
    { time: 'October', food: 3899, capital: 14940, auto: 8233, goods: 9244, total: 36316 },
    { time: 'December', food: 3941, capital: 15664, auto: 8642, goods: 10134, total: 38381 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            fullstackedarea: {
                axis: 'percentAxis'
            },
            type: 'fullstackedArea',
            argumentField: 'time'
        },
        animation: false,
        series: [
            { valueField: 'food', name: 'Food' },
            { valueField: 'capital', name: 'Capital Goods' },
            { valueField: 'auto', name: 'Automotive Vehicles' },
            { valueField: 'goods', name: 'Customer Goods' },
            { valueField: 'total', name: 'Goods in total', type: 'line', axis: 'valueAxis' }
        ],
        title: {
            text: 'Exports of Good in USA by End-Use Category (2005)'
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        tooltip: {
            enabled: true
        },
        valueAxis: [
            { name: 'percentAxis' },
            { name: 'valueAxis', position: 'right', grid: { color: 'green' }, label: { font: { color: 'green' } } }
        ],
        synchronizeMultiAxes: true
    });

    $("#synchronizeMultiAxesCheckbox").change(function () {
        var chart = $("#chartContainer").dxChart("instance");
        chart.option("synchronizeMultiAxes", this.checked);
    });
});