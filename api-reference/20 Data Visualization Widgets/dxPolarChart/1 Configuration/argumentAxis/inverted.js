var dataSource = [
    { year: 1950, val: 546 },
    { year: 2050, val: 650 },
    { year: 2040, val: 680 },
    { year: 2030, val: 704 },
    { year: 2020, val: 721 },
    { year: 2010, val: 728 },
    { year: 2000, val: 730 },
    { year: 1990, val: 721 },
    { year: 1980, val: 694 },
    { year: 1970, val: 656 },
    { year: 1960, val: 605 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            {
                argumentField: 'year',
                valueField: 'val',
                type: 'line',
                closed: false
            }
        ],
        legend: { visible: false }
    });


    $("#invertedCheckbox").change(function () {
        var chart = $("#chartContainer").dxPolarChart("instance");
        chart.option({
            argumentAxis: { inverted: this.checked }
        });
    });
});