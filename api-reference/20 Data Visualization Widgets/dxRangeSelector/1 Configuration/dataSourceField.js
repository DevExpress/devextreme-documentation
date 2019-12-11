var dataSource = [
    { x: 0 },
    { x: 25 },
    { x: 50 },
    { x: 75 },
    { x: 100 }
];

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        dataSourceField: 'x'
    });
});