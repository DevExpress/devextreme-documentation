var dataSource = [
    { time: 10, car1: 110, car2: 104, car3: 112 },
    { time: 20, car1: 130, car2: 124, car3: 132 },
    { time: 30, car1: 143, car2: 135, car3: 141 },
    { time: 40, car1: 157, car2: 157, car3: 160 },
    { time: 50, car1: 169, car2: 166, car3: 174 },
    { time: 60, car1: 181, car2: 180, car3: 185 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'time'
        },
        series: [
            { valueField: 'car1', name: 'Car #1' },
            { valueField: 'car2', name: 'Car #2' },
            { valueField: 'car3', name: 'Car #3' }
        ],
        argumentAxis: {
            label: {
                customizeText: function () {
                    return this.value + ' sec';
                }
            }
        }
    });
});
