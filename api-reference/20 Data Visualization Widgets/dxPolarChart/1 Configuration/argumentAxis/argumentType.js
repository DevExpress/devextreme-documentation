var dataSource = [
    { year: -631166400000, val: 546},
    { year: 2524593600000, val: 650 },
    { year: 2208974400000, val: 680 },
    { year: 1893441600000, val: 704 },
    { year: 1577822400000, val: 721 },
    { year: 1262289600000, val: 728 },
    { year: 946670400000, val: 730 },
    { year: 631137600000, val: 721 },
    { year: 315518400000, val: 694 },
    { year: -14400000, val: 656 },
    { year: -315633600000, val: 605 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            {
                argumentField: 'year',
                valueField: 'val'
            }
        ],
        legend: {visible: false},
        argumentAxis: {
            argumentType: 'datetime',
            label: {
                format: 'year'
            }
        }
    });
});

