var dataSource = [
    { time: 10, car1: 110 },
    { time: 20, car1: 130 },
    { time: 30, car1: 143 },
    { time: 40, car1: 157 },
    { time: 50, car1: 169 },
    { time: 60, car1: 181 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            { argumentField: 'time', valueField: 'car1', name: 'Car #1' }
        ],
        valueAxis: {
            label: {
                customizeText: function () {
                    return this.value + ' mph';
                }
            }
        },
        legend: { visible: false }
    });
});

