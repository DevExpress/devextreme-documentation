var dataSource = [
    { state: 'Germany', young: 6.7, middle: 28.6, older: 5.1 },
    { state: 'Japan', young: 9.6, middle: 43.4, older: 9},
    { state: 'Russia', young: 13.5, middle: 49, older: 5.8 },
    { state: 'USA', young: 30, middle: 90.3, older: 14.5 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'stackedBar',
            stackedbar: {
                argumentField: 'state'
            }
        },
        series: [
            { valueField: 'young', name: '0-14' },
            { valueField: 'middle', name: '15-64' },
            { valueField: 'older', name: '65 and older' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: {
            text: 'Male Age Structure'
        }
    });
});