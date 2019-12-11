var silverCosts = [
    { month: 1, 2010: 17 }, { month: 2, 2010: 28 },
    { month: 3, 2010: 34 }, { month: 4, 2010: 37 },
    { month: 5, 2010: 47 }, { month: 6, 2010: 37 },
    { month: 7, 2010: 34 }, { month: 8, 2010: 40 },
    { month: 9, 2010: 41 }, { month: 10, 2010: 30 },
    { month: 11, 2010: 34 }, { month: 12, 2010: 32 }
];

var myTheme = {
    name: 'blueTheme',
    sparkline: {
        barPositiveColor: 'deepskyblue',
        minColor: 'powderblue',
        maxColor: 'mediumturquoise',
        tooltip: {
            color: 'lavender',
            font: { color: 'mediumblue' }
        }
    }
};

DevExpress.viz.registerTheme(myTheme, 'generic.light');

$(function () {
    $('#sparklineContainer').dxSparkline({
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'bar',
        theme: 'blueTheme',
        showFirstLast: false,
        showMinMax: true
    });
})
