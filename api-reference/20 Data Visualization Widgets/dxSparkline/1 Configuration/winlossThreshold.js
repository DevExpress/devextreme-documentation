var aluminiumCosts = [
    { month: 1, 2010: 2262 }, { month: 2, 2010: 2087 },
    { month: 3, 2010: 2238 }, { month: 4, 2010: 2349 },
    { month: 5, 2010: 2071 }, { month: 6, 2010: 1957 },
    { month: 7, 2010: 2008 }, { month: 8, 2010: 2119 },
    { month: 9, 2010: 2199 }, { month: 10, 2010: 2374 },
    { month: 11, 2010: 2354 }, { month: 12, 2010: 2369 }
];

$(function () {
    $('#sparklineContainer').dxSparkline({
        dataSource: aluminiumCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'winloss',
        showFirstLast: false,
        showMinMax: true,
        winlossThreshold: 2100
    });
})
