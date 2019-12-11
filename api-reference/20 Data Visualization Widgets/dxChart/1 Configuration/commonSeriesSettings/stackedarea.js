var dataSource = [
        { time: 'January', food: 3970, capital: 15366, auto: 7818, goods: 9064 },
        { time: 'March', food: 3875, capital: 15297, auto: 7518, goods: 9147 },
        { time: 'June', food: 4181, capital: 15957, auto: 7603, goods: 9311 },
        { time: 'August', food: 3826, capital: 15706, auto: 8046, goods: 9342 },
        { time: 'October', food: 3899, capital: 14940, auto: 8233, goods: 9244 },
        { time: 'December', food: 3941, capital: 15664, auto: 8642, goods: 10134 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'stackedArea',
            stackedarea: {
                argumentField: 'time'
            }
        },
        series: [
            { valueField: 'food', name: 'Food' },
            { valueField: 'capital', name: 'Capital Goods' },
            { valueField: 'auto', name: 'Automotive Vehicles' },
            { valueField: 'goods', name: 'Customer Goods' }
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
        }
    });
});