var dataSource = [
    { x: 0, y: 3 },
    { x: 0.5, y: 5 },
    { x: 1, y: 12 },
    { x: 1.5, y: 15 },
    { x: 2, y: 12 },
    { x: 2.5, y: 13 },
    { x: 3, y: 9 },
    { x: 3.5, y: 7 },
    { x: 4, y: 5 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            {
                argumentField: 'x',
                valueField: 'y',
                type: 'line'
            }
        ],
        legend: { visible: false },
        argumentAxis: {
            label: {
                format: {
                    type: 'fixedPoint',
                    precision: 2
                }
            }
        }
    });
});